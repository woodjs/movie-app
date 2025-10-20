import { useState } from 'react'

type Seat = {
  id: string
  row: string
  number: number
  type: 'standard' | 'vip' | 'couple'
  occupied?: boolean
}

const seats: Seat[] = Array.from({ length: 30 }, (_, i) => ({
  id: `S${i + 1}`,
  row: String.fromCharCode(65 + Math.floor(i / 10)),
  number: (i % 10) + 1,
  type: 'standard',
}))

const SeatBooking = ({ onBack }: { onBack: () => void }) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])

  const toggleSeat = (seat: Seat) => {
    if (seat.occupied) return
    const isSelected = selectedSeats.find(s => s.id === seat.id)
    let updatedSeats: Seat[]
    if (isSelected) {
      updatedSeats = selectedSeats.filter(s => s.id !== seat.id)
    } else {
      updatedSeats = [...selectedSeats, seat]
    }
    setSelectedSeats(updatedSeats)
  }

  const rows = Array.from(new Set(seats.map(s => s.row)))

  return (
    <div className='flex flex-col items-center gap-6 p-6'>
      <h2 className='mb-2 text-xl font-bold text-gray-700'>Выберите места</h2>

      <div
        className='mb-4 h-6 w-full rounded-t-lg bg-gray-400 text-center
          font-bold text-black'
      >
        SCREEN
      </div>

      <div className='flex w-full flex-col gap-2'>
        {rows.map(row => (
          <div key={row} className='flex justify-center gap-2'>
            {seats
              .filter(s => s.row === row)
              .map(seat => {
                const isSelected = selectedSeats.some(s => s.id === seat.id)
                return (
                  <button
                    key={seat.id}
                    className={`h-10 w-10 rounded ${
                      seat.type === 'vip'
                        ? 'bg-yellow-400'
                        : seat.type === 'couple'
                          ? 'bg-pink-400'
                          : 'bg-green-400'
                    } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {seat.number}
                  </button>
                )
              })}
          </div>
        ))}
      </div>

      <div className='mt-4 w-full rounded bg-gray-100 p-4 shadow'>
        <h3 className='mb-2 font-bold text-gray-700'>Выбранные места:</h3>
        {selectedSeats.length === 0 ? (
          <p className='text-gray-500'>Места не выбраны</p>
        ) : (
          <ul className='flex flex-wrap gap-2'>
            {selectedSeats.map(s => (
              <li
                key={s.id}
                className='rounded bg-blue-200 px-2 py-1 font-semibold'
              >
                {s.row}
                {s.number} ({s.type})
              </li>
            ))}
          </ul>
        )}
        <button
          className={`mt-4 rounded px-4 py-2 ${
            selectedSeats.length === 0
              ? 'cursor-not-allowed bg-gray-400'
              : 'bg-green-500 hover:bg-green-600'
            } font-bold text-white`}
          disabled={selectedSeats.length === 0}
          onClick={() =>
            alert(
              `Забронировано: ${selectedSeats.map(s => s.row + s.number).join(', ')}`,
            )
          }
        >
          Забронировать
        </button>
      </div>

      <button className='mt-4 text-blue-500 hover:underline' onClick={onBack}>
        Назад к выбору слота
      </button>
    </div>
  )
}

export default SeatBooking
