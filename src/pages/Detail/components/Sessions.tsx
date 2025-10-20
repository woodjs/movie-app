import { useState, useRef, useEffect } from 'react'
import { MapPin, FileText, Volume2, Tv, X } from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/shared/ui'

// Универсальная структура услуги
interface Amenity {
  icon?: React.ElementType
  label: string
  description?: string
}

interface Category {
  name: string
  times: string[]
  amenities?: Amenity[]
}

interface SessionsProps {
  onSelectSlot: (time: string) => void
}

export default function Sessions({ onSelectSlot }: SessionsProps) {
  const [modalData, setModalData] = useState<null | {
    title: string
    description?: string
    amenities: Amenity[]
  }>(null)

  const [selectedTime, setSelectedTime] = useState<string | null>(null) // <-- новое состояние

  const modalRef = useRef<HTMLDivElement>(null)

  // Закрытие модалки по клику вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalData(null)
      }
    }
    if (modalData) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [modalData])

  const categories: Category[] = [
    {
      name: 'VIP',
      times: ['12:00 PM', '3:15 PM', '6:30 PM', '9:00 PM'],
      amenities: [
        {
          icon: FileText,
          label: 'CC',
          description:
            'Closed Captioning devices display dialogue and sound as text.',
        },
        {
          icon: Volume2,
          label: 'AD',
          description:
            'Audio Described: provides audio descriptions for visually impaired guests.',
        },
        {
          icon: Tv,
          label: 'HDR by Barco',
          description: 'High Dynamic Range for vivid colors and clarity.',
        },
        {
          label: 'No Passes',
          description: 'Restrictions apply, see conditions.',
        },
        {
          label: 'Stadium Seating',
          description: 'Stadium seating for better visibility.',
        },
      ],
    },
    {
      name: 'RPX',
      times: ['10:00 AM', '1:30 PM', '4:45 PM', '8:00 PM'],
      amenities: [
        { icon: FileText, label: 'CC' },
        { icon: Volume2, label: 'AD' },
        { icon: Tv, label: 'HDR by Barco' },
        { label: 'No Passes' },
        { label: 'Stadium Seating' },
      ],
    },
    {
      name: 'Standard',
      times: ['11:15 AM', '2:30 PM', '5:00 PM', '7:30 PM'],
      amenities: [
        { icon: FileText, label: 'CC' },
        { icon: Volume2, label: 'AD' },
        { label: 'Stadium Seating' },
      ],
    },
  ]

  return (
    <>
      <div
        className='grid gap-4'
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(27rem, 1fr))' }}
      >
        <Card
          Header={
            <div
              className='rounded-t-xl px-3 py-3'
              style={{
                background: `linear-gradient(90deg, rgba(0,0,0,0.86) 26.19%, rgba(29,29,29,0.46) 100%) center center / cover no-repeat, url('https://www.regmovies.com/placeholderTheatreImageSmall2.jpg')`,
              }}
            >
              <p className='mb-1 text-2xl font-bold text-white'>
                Regal Dania Pointe
              </p>
              <div className='flex items-center gap-1 text-gray-300'>
                <MapPin className='h-4 w-4' />
                <span>128 Sunset Drive (11.11mi)</span>
              </div>
            </div>
          }
          Body={
            <div className='flex flex-col'>
              {categories.map(cat => (
                <div
                  key={cat.name}
                  className='overflow-hidden bg-gradient-to-b from-gray-800
                    to-gray-700'
                >
                  {/* Верхний блок с названием и Details */}
                  <div
                    className='flex items-center justify-between
                      bg-gradient-to-r from-gray-900 to-gray-800 px-3 py-2'
                  >
                    <span className='font-medium text-gray-200'>
                      {cat.name}
                    </span>
                    <button
                      className='rounded bg-gray-900 px-2 py-1 text-sm uppercase
                        text-gray-400 hover:bg-gray-800 hover:text-white'
                      onClick={() =>
                        setModalData({
                          title: cat.name,
                          amenities: cat.amenities || [],
                        })
                      }
                    >
                      Details
                    </button>
                  </div>

                  {/* Слоты времени */}
                  <div className='flex flex-wrap p-3'>
                    {cat.times.map(time => (
                      <button
                        key={time}
                        className={`mr-2 mb-2 rounded px-3 py-1 transition-all
                        ${selectedTime === time ? 'bg-orange-600 text-white' : 'bg-gray-700 text-gray-200'}
                        hover:bg-gray-600`}
                        // onClick={() => setSelectedTime(time)}
                        onClick={() => onSelectSlot(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {/* Нижняя панель с иконками и текстом */}
                  <div
                    className='flex flex-wrap items-center p-3 text-sm
                      text-gray-300'
                  >
                    <div className='flex items-center gap-2'>
                      {cat.amenities?.map(
                        (item, idx) =>
                          item.icon && (
                            <item.icon
                              key={idx}
                              className='h-5 w-5'
                              title={item.label}
                            />
                          ),
                      )}
                    </div>
                    <div className='ml-4 flex flex-wrap items-center gap-2'>
                      {cat.amenities
                        ?.filter(item => !item.icon)
                        .map((item, idx) => <span key={idx}>{item.label}</span>)
                        .reduce(
                          (prev: any[], curr, i) =>
                            i > 0
                              ? [...prev, <span key={`dot-${i}`}>•</span>, curr]
                              : [curr],
                          [],
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </div>

      {/* === Модалка === */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center
              bg-black/70 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className='mx-4 max-h-[80vh] w-full max-w-lg overflow-y-auto
                rounded-2xl bg-gray-800 p-6 shadow-xl'
            >
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-lg font-bold text-white'>
                  {modalData.title} - Showtime Details
                </h3>
                <button onClick={() => setModalData(null)}>
                  <X className='h-5 w-5 text-gray-400 hover:text-white' />
                </button>
              </div>
              <ul className='list-inside list-disc space-y-3 text-gray-300'>
                {modalData.amenities.map((item, idx) => (
                  <li key={idx}>
                    <span className='font-semibold'>{item.label}:</span>{' '}
                    {item.description || ''}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
