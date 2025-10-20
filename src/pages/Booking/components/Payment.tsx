import { useState, useEffect } from 'react'

export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [timer, setTimer] = useState(120)

  // Таймер для второго шага
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [step, timer])

  const formattedTime = `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`

  const handleSubmitCard = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
    setTimer(120)
  }

  const handleResendCode = () => setTimer(120)

  return (
    <div
      className='relative flex flex-col rounded-[15px]
        bg-[linear-gradient(rgba(217,217,217,0.227)_0%,rgba(217,217,217,0)_100%)]
        py-[2rem] px-[6.5rem] text-white shadow-[rgb(8,8,9)_2px_0px_6px_0px]
        after:absolute after:top-0 after:left-0 after:-z-10 after:h-full
        after:w-full after:backdrop-blur-[22px] after:content-[""]'
    >
      <p className='text-left text-2xl font-bold'>Payment</p>

      <div
        className='relative z-10 mt-[2rem] flex w-full items-center
          justify-between rounded-lg border-none bg-[rgba(36,34,31,0.5)] p-3
          font-bold shadow-[rgba(255,146,70,0.35)_3px_3px_10px_0px]'
      >
        <div>
          <p className='text-xl font-bold italic'>Tickets</p>
          <p>Added (N) TICKETS</p>
        </div>
        <div>
          <p>$56.97</p>
        </div>
      </div>

      <div
        className='[&_hr]:border-white/53 mt-4 text-base xl:text-lg [&_hr]:my-2
          [&_hr]:border-[0.5px] [&_hr]:opacity-50'
      >
        <div className='flex justify-between font-semibold'>
          <div>
            Booking Fee
            <span className='opacity-80'> (Non-Refundable)</span>
          </div>
          <p>$6.00</p>
        </div>

        <hr />

        <div className='flex justify-between font-semibold'>
          <div>Sales Tax</div>
          <p>$4.41</p>
        </div>

        <hr />

        <div className='mt-2 flex justify-between'>
          <h2 className='text-lg font-bold'>Total</h2>
          <p className='text-lg font-bold'>$67.38</p>
        </div>
      </div>

      <div className='mt-[1rem] grid grid-cols-2 gap-2'>
        <button
          onClick={() => {
            setIsModalOpen(true)
            setStep(1)
          }}
          className='font-sans flex h-[44px] items-center justify-center
            rounded-lg border border-[#000] bg-[rgba(0,0,0,0.5)] font-bold
            text-white transition-all hover:bg-[rgba(0,0,0,0.7)]'
        >
          <span>Credit or Debit Card</span>
        </button>
        <button
          className='font-sans flex h-[44px] items-center justify-center
            rounded-lg border border-[#000] bg-[rgba(0,0,0,0.5)] font-bold
            text-white disabled:cursor-not-allowed disabled:opacity-70'
          disabled
        >
          <span>Stripe</span>
        </button>
      </div>

      {/* --- Модалка --- */}
      {isModalOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center
            bg-black/60 backdrop-blur-md'
        >
          <div
            className='relative w-full max-w-lg rounded-2xl border
              border-gray-700 bg-[#111] p-6 text-white
              shadow-[0_0_20px_rgba(255,255,255,0.15)]'
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute right-3 top-3 text-gray-400 hover:text-white'
            >
              ✕
            </button>

            {step === 1 ? (
              <>
                <h2 className='mb-4 text-2xl font-bold text-white'>
                  Card Details
                </h2>
                <form onSubmit={handleSubmitCard} className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-300'>
                      Full name (as on card)
                    </label>
                    <input
                      type='text'
                      required
                      className='mt-1 w-full rounded-lg border border-gray-700
                        bg-[#1c1c1c] p-2.5 text-sm text-white
                        placeholder-gray-500 focus:border-orange-500
                        focus:ring-orange-500'
                      placeholder='Bonnie Green'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-300'>
                      Card number
                    </label>
                    <input
                      type='text'
                      required
                      placeholder='xxxx-xxxx-xxxx-xxxx'
                      className='mt-1 w-full rounded-lg border border-gray-700
                        bg-[#1c1c1c] p-2.5 text-sm text-white
                        placeholder-gray-500 focus:border-orange-500
                        focus:ring-orange-500'
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-300'>
                        Expiration
                      </label>
                      <input
                        type='text'
                        required
                        placeholder='12/23'
                        className='mt-1 w-full rounded-lg border border-gray-700
                          bg-[#1c1c1c] p-2.5 text-sm text-white
                          placeholder-gray-500 focus:border-orange-500
                          focus:ring-orange-500'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-300'>
                        CVV
                      </label>
                      <input
                        type='text'
                        required
                        placeholder='•••'
                        className='mt-1 w-full rounded-lg border border-gray-700
                          bg-[#1c1c1c] p-2.5 text-sm text-white
                          placeholder-gray-500 focus:border-orange-500
                          focus:ring-orange-500'
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='mt-4 w-full rounded-lg bg-orange-600 py-2.5
                      font-medium text-white transition-all hover:bg-orange-700'
                  >
                    Pay now
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className='mb-4 text-2xl font-bold text-white'>
                  Enter Confirmation Code
                </h2>
                <p className='mb-2 text-sm text-gray-400'>
                  Code sent to your phone. Time left:{' '}
                  <span className='font-semibold text-orange-400'>
                    {formattedTime}
                  </span>
                </p>
                <input
                  type='text'
                  placeholder='Enter code'
                  className='w-full rounded-lg border border-gray-700
                    bg-[#1c1c1c] p-2.5 text-center text-lg tracking-widest
                    text-white placeholder-gray-500 focus:border-orange-500
                    focus:ring-orange-500'
                />
                <div className='mt-4 flex justify-between'>
                  <button
                    type='button'
                    onClick={() => setStep(1)}
                    className='rounded-lg border border-gray-600 px-4 py-2
                      text-sm font-medium text-gray-300 hover:bg-[#222]'
                  >
                    Back
                  </button>
                  <button
                    disabled={timer > 0}
                    onClick={handleResendCode}
                    className={`rounded-lg px-4 py-2 text-sm font-medium
                      transition-all ${
                        timer > 0
                          ? 'cursor-not-allowed bg-gray-700 text-gray-500'
                          : 'bg-orange-600 text-white hover:bg-orange-700'
                      }`}
                  >
                    {timer > 0 ? 'Resend Code' : 'Resend Code'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
