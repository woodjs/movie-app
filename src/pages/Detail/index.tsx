import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'

import { Poster, Loader, Error, Section } from '@/common'
import { Casts, Videos, Genre } from './components'

import { useGetShowQuery } from '@/services/TMDB'
import { useMotion } from '@/hooks/useMotion'
import { mainHeading, maxWidth, paragraph } from '@/styles'
import { cn } from '@/utils/helper'
import DateSelector from './components/DateSelector'
import ShowtimeSelector from './components/Sessions'
import Sessions from './components/Sessions'
import SeatBooking from './components/SeatSelector'
import { DateSelectorBar } from '@/shared/ui'

const Detail = () => {
  const { category, id } = useParams()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const { fadeDown, staggerContainer } = useMotion()

  const {
    data: movie,
    isLoading,
    isFetching,
    isError,
  } = useGetShowQuery({
    category: String(category),
    id: Number(id),
  })

  useEffect(() => {
    document.title =
      (movie?.title || movie?.name) && !isLoading
        ? movie.title || movie.name
        : 'tMovies'
    return () => {
      document.title = 'tMovies'
    }
  }, [movie?.title, movie?.name, isLoading])

  const toggleShow = () => setShow(prev => !prev)

  if (isLoading || isFetching) return <Loader />
  if (isError) return <Error error='Something went wrong!' />

  const {
    title,
    poster_path: posterPath,
    overview,
    name,
    genres,
    videos,
    credits,
  } = movie

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6)),url('https://image.tmdb.org/t/p/original/${posterPath}')`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
  }

  const availableDates = [
    new Date(2025, 9, 18),
    new Date(2025, 9, 20),
    new Date(2025, 9, 23),
  ]

  const handleDateChange = (date?: Date) => console.log('Выбрана дата:', date)

  // 👉 При выборе времени редиректим на страницу бронирования
  const handleSlotSelect = (date: string, time: string) => {
    navigate(
      `/booking?movieId=${id}&category=${category}&date=${encodeURIComponent(
        date,
      )}&time=${encodeURIComponent(time)}`,
    )
  }

  return (
    <>
      <section className='z-50 w-full dark:bg-black' style={backgroundStyle}>
        <div
          className={`${maxWidth} flex flex-row justify-center gap-8 pt-24 pb-8
            md:gap-10 lg:gap-12 lg:py-36`}
        >
          <Poster title={title} posterPath={posterPath} />
          <m.div
            variants={staggerContainer(0.2, 0.4)}
            initial='hidden'
            animate='show'
            className='mb-8 flex max-w-[90vw] flex-1 flex-col gap-3 font-nunito
              text-gray-300'
          >
            <m.h2
              variants={fadeDown}
              className={cn(mainHeading, 'md:max-w-[420px]')}
            >
              {title || name}
            </m.h2>
            <m.ul
              variants={fadeDown}
              className='flex flex-row flex-wrap items-center gap-3'
            >
              {genres.map(genre => (
                <Genre key={genre.id} name={genre.name} />
              ))}
            </m.ul>
            <m.p variants={fadeDown} className={paragraph}>
              {overview.length > 280
                ? show
                  ? overview
                  : `${overview.slice(0, 280)}...`
                : overview}
              {overview.length > 280 && (
                <button
                  className='ml-1 font-bold hover:underline'
                  onClick={toggleShow}
                >
                  {!show ? 'show more' : 'show less'}
                </button>
              )}
            </m.p>
            <Casts casts={credits?.cast || []} />
          </m.div>
        </div>
      </section>

      <div className='mx-auto max-w-[90rem] px-4 py-8'>
        {/* Выбор даты и времени */}
        <div className='mb-[30px] flex items-center justify-center'>
          <DateSelectorBar
            availableDates={availableDates}
            onDateChange={handleDateChange}
          />
        </div>

        {/* Компонент, где выбирается время — передаем onSelect */}
        <Sessions
          onSelectSlot={slot => handleSlotSelect(slot.date, slot.time)}
        />
      </div>

      <Videos videos={videos.results} />
      <Section
        title={`Similar ${category === 'movie' ? 'movies' : 'series'}`}
        category={String(category)}
        className={maxWidth}
        id={Number(id)}
        showSimilarShows
      />
    </>
  )
}

export default Detail
