import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import DateSelectorBar from './DateSelector'

export default function SessionsBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedStep, setSelectedStep] = useState<'date' | 'seats'>('date')
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  // Данные для примера
  const categories = [
    {
      name: 'VIP',
      times: ['12:00 PM', '3:15 PM', '6:30 PM', '9:00 PM'],
    },
    {
      name: 'Standard',
      times: ['11:15 AM', '2:30 PM', '5:00 PM', '7:30 PM'],
    },
  ]

  // Функция перехода к выбору мест
  const proceedToSeats = () => {
    if (selectedDate && selectedTime) {
      setSelectedStep('seats')
    } else {
      alert('Please select a date and time')
    }
  }

  return (
    <div className='mx-auto max-w-6xl px-4 py-8'>
      <AnimatePresence exitBeforeEnter>
        {selectedStep === 'date' && (
          <motion.div
            key='dateStep'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Секция выбора даты */}
            <DateSelectorBar
              availableDates={[new Date(), new Date(Date.now() + 86400000)]}
              onDateChange={d => setSelectedDate(d)}
            />

            {/* Слоты времени */}
            <div className='mt-6 space-y-4'>
              {categories.map(cat => (
                <div key={cat.name}>
                  <div
                    className='mb-2 flex items-center justify-between
                      text-gray-300'
                  >
                    <span>{cat.name}</span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {cat.times.map(time => (
                      <button
                        key={time}
                        className={`rounded px-3 py-1
                        ${selectedTime === time ? 'bg-orange-600 text-white' : 'bg-gray-700 text-gray-200'}
                        transition hover:bg-gray-600`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 flex justify-end'>
              <button
                onClick={proceedToSeats}
                className='rounded bg-orange-600 px-4 py-2 text-white transition
                  hover:bg-orange-500'
              >
                Next: Select Seats
              </button>
            </div>
          </motion.div>
        )}

        {selectedStep === 'seats' && (
          <motion.div
            key='seatsStep'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Секция выбора места */}
            <div className='rounded-xl bg-gray-800 p-6'>
              <h3 className='mb-4 text-lg font-bold text-white'>
                Select Your Seats
              </h3>

              {/* Экран */}
              <div
                className='mb-4 flex h-12 w-full items-center justify-center
                  rounded-t-md bg-gray-700 text-gray-200'
              >
                Screen
              </div>

              {/* Схема зала (пример 5 рядов x 8 мест) */}
              <div className='flex flex-col gap-2'>
                {Array.from({ length: 5 }).map((_, rowIdx) => (
                  <div key={rowIdx} className='flex justify-center gap-2'>
                    {Array.from({ length: 8 }).map((_, seatIdx) => {
                      const seatId = `${rowIdx + 1}-${seatIdx + 1}`
                      const selected = selectedSeats.includes(seatId)
                      return (
                        <button
                          key={seatId}
                          className={`h-8 w-8 rounded
                          ${selected ? 'bg-orange-600' : 'bg-gray-600'}
                          transition hover:bg-orange-500`}
                          onClick={() => {
                            setSelectedSeats(prev =>
                              prev.includes(seatId)
                                ? prev.filter(s => s !== seatId)
                                : [...prev, seatId],
                            )
                          }}
                        ></button>
                      )
                    })}
                  </div>
                ))}
              </div>

              <div className='mt-6 flex justify-between'>
                <button
                  onClick={() => setSelectedStep('date')}
                  className='rounded bg-gray-700 px-4 py-2 text-white transition
                    hover:bg-gray-600'
                >
                  Back
                </button>
                <button
                  className='rounded bg-orange-600 px-4 py-2 text-white
                    transition hover:bg-orange-500'
                  onClick={() =>
                    alert(`Seats booked: ${selectedSeats.join(', ')}`)
                  }
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
