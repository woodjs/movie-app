import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import AnimatedBackground from '@/shared/ui/AppBg'
import { MovieCardOverlay } from '@/shared/ui'
import CinemaSeatBooking from './components/SeatSelection'
import { maxWidth } from '@/styles'
import Payment from './components/Payment'

export default function Booking() {
  const [searchParams] = useSearchParams()

  // 🧭 Параметры из URL
  const movieId = searchParams.get('movieId')
  const category = searchParams.get('category')
  const date = searchParams.get('date')
  const time = searchParams.get('time')

  // 🧩 Фиктивные данные о фильме (в реальном проекте подгружаются по API)
  const movieTitle = 'Roofman'
  const moviePoster =
    'https://www.regmovies.com/_next/image?url=https%3A%2F%2Fregalcdn.azureedge.net%2FREG%2FRoofman%2FHO00019048%2FMobile_MovieFeed%2F20250630-131358164.jpg&w=1920&q=75'

  // 💾 Локальное состояние выбранных мест
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  // 🎟 Завершение бронирования
  const handleBookingComplete = (booking: any) => {
    console.log('✅ Booking complete:', {
      ...booking,
      movieId,
      category,
      date,
      time,
    })
    // 🔹 здесь можно вызвать API бронирования:
    // await api.bookSeats({ movieId, date, time, seats: booking.seatIds })
  }

  return (
    <>
      <AnimatedBackground />

      <section className='mx-auto w-full max-w-7xl'>
        <div
          className={`${maxWidth} flex flex-col justify-center gap-[1.5rem]
            pt-24 pb-8`}
        >
          {/* 🎬 Карточка фильма */}
          <MovieCardOverlay
            title={movieTitle}
            ratingIcon='R'
            category={category || 'Standard'}
            cinemaName='Regal Dania Pointe'
            poster={moviePoster}
            details={`Date: ${date || '-'} | Time: ${time || '-'}`}
          />
          <Payment />
          {/* 🪑 Секция выбора мест */}
          <CinemaSeatBooking
            layout={{
              rows: 8,
              seatsPerRow: 12,
              aislePosition: 5,
            }}
            seatTypes={{
              regular: { name: 'Regular', price: 150, rows: [0, 1, 2] },
              premium: { name: 'Premium', price: 250, rows: [3, 4, 5] },
              vip: { name: 'VIP', price: 350, rows: [6, 7] },
            }}
            bookedSeats={['C2', 'C4', 'D5']}
            currency='₽'
            title={`${movieTitle} — Seat Selection`}
            subtitle={`Choose seats for ${date}, ${time}`}
            onSeatSelect={selected => setSelectedSeats(selected)}
            onBookingComplete={handleBookingComplete}
          />
        </div>
      </section>
    </>
  )
}
