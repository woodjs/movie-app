import { Loader, Error, Section } from '@/common'
import { Hero } from './components'

import { useGetShowsQuery } from '@/services/TMDB'
import { maxWidth } from '@/styles'
import { sections } from '@/constants'
import { cn } from '@/utils/helper'
import AnimatedBackground from '@/shared/ui/AppBg'

const Home = () => {
  const { data, isLoading, isError } = useGetShowsQuery({
    category: 'movie',
    type: 'popular',
    page: 1,
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error error='Unable to fetch the movies! ' />
  }

  const popularMovies = data?.results.slice(0, 5)

  return (
    <>
      <AnimatedBackground />
      <Hero movies={popularMovies} />
      <div className={cn(maxWidth, 'mt-2 xs:mt-4 sm:mt-6 md:mt-8 lg:mt-12')}>
        {sections.map(({ title, category, type }) => (
          <Section title={title} category={category} type={type} key={title} />
        ))}
      </div>
    </>
  )
}

export default Home
