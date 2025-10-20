import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Calendar } from 'lucide-react'
import { cn } from '@/utils/helper'

interface DateSelectorBarProps {
  availableDates?: Date[]
  onDateChange?: (date: Date) => void
}

const DateSelectorBar = ({
  availableDates = [],
  onDateChange,
}: DateSelectorBarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)

  const today = new Date()

  // Генерируем ближайшие 10 дней
  const nextDays = Array.from({ length: 10 }).map((_, i) => {
    const date = new Date()
    date.setDate(today.getDate() + i)
    return date
  })

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onDateChange?.(date)
  }

  // Сегодня всегда доступно
  const isAvailable = (date: Date) => {
    if (date.toDateString() === today.toDateString()) return true
    if (availableDates.length === 0) return true
    return availableDates.some(d => d.toDateString() === date.toDateString())
  }

  const formatDay = (date: Date) =>
    date.toLocaleDateString('en-US', { weekday: 'short' })
  const formatNumber = (date: Date) => date.getDate()

  // === Клик вне модалки ===
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false)
      }
    }
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showModal])

  return (
    <section className='bg-gray-900 py-6 text-gray-200 shadow-md'>
      <div className='mx-auto max-w-4xl px-4'>
        <div
          className='no-scrollbar flex items-center justify-start gap-2
            overflow-x-auto pb-2'
        >
          {nextDays.map(date => {
            const isSelected =
              date.toDateString() === selectedDate.toDateString()
            const available = isAvailable(date)

            return (
              <button
                key={date.toDateString()}
                disabled={!available}
                onClick={() => handleDateSelect(date)}
                className={`flex min-w-[60px] flex-col items-center
                justify-center rounded-xl border px-3 py-2
                ${isSelected ? 'bg-white text-black' : ''}
                ${!available ? 'cursor-not-allowed opacity-40' : ''}
                ${!isSelected && available ? 'bg-gray-800 hover:bg-gray-700' : ''}
                transition-all duration-200`}
              >
                <span className='text-xs font-semibold uppercase'>
                  {formatDay(date)}
                </span>
                <span className='text-2xl font-bold leading-none'>
                  {formatNumber(date)}
                </span>
              </button>
            )
          })}

          {/* Кнопка “Select Day” */}
          <button
            onClick={() => setShowModal(true)}
            className='flex min-w-[70px] flex-col items-center justify-center
              rounded-xl border border-gray-600 bg-gray-800 px-3 py-2
              transition-all hover:bg-gray-700'
          >
            <Calendar className='mb-1 h-5 w-5' />
            <span className='text-xs font-semibold'>Select Day</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DateSelectorBar
