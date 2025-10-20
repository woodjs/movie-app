import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import RatingIcon from './RatingIcon'

type MovieCardOverlayProps = {
  poster: string
  title: string
  ratingIcon: string
  ratingDescription?: string
  cinemaName: string
  category: string
  details?: string
}

export function MovieCardOverlay({
  poster,
  title,
  ratingIcon,
  ratingDescription,
  cinemaName,
  category,
  details,
}: MovieCardOverlayProps) {
  // const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='relative w-full'>
      {/* Верхняя карточка */}
      <div
        className='flex h-[75px] w-full items-center gap-4 rounded-[10px]
          bg-white/10 shadow-[rgb(8,8,9)_1px_3px_6px_0px] backdrop-blur-md'
      >
        <img
          src={poster}
          alt={`${title} poster`}
          className='h-full w-[116px] rounded-l-[10px] object-cover'
        />

        <div className='flex flex-1 flex-col justify-center text-white'>
          <span className='text-[26px] font-bold leading-none'>{title}</span>

          <div className='mt-1 flex items-center gap-2 text-sm text-gray-200'>
            <RatingIcon rating={ratingIcon} className='h-[1em]' />
            <span className='mx-1 h-3 w-[1px] bg-gray-400' />
            <span>{category}</span>
            <span className='ml-[1em] text-lg font-semibold'>{cinemaName}</span>
          </div>

          {ratingDescription && (
            <span className='text-xs text-gray-400'>{ratingDescription}</span>
          )}
        </div>

        {/* {details && (
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className='ml-2 flex items-center justify-center rounded-full p-1
              text-white transition hover:bg-white/20'
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )} */}
      </div>

      {/* Анимированный всплывающий блок
      <AnimatePresence>
        {details && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 300, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute top-full left-0 z-10 w-full overflow-hidden
              rounded-b-[16px] shadow-[rgba(8,8,9,0.56)_1px_3px_6px_0px]'
            style={{ backdropFilter: 'blur(1rem)' }}
          >
            <div className='h-full p-4 text-white'>{details}</div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  )
}
