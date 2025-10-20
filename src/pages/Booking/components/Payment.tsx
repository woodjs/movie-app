export default function Payment() {
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
        className="before:bg-brand relative z-10 mt-[2rem] flex w-full
          items-center justify-between rounded-lg border-none
          bg-[rgba(36,34,31,0.5)] p-3 font-bold
          shadow-[rgba(255,146,70,0.35)_3px_3px_10px_0px] before:absolute
          before:inset-0 before:-z-10 before:rounded-lg before:p-px
          before:content-['']
          before:[mask:linear-gradient(#fff_0px,#fff_0px)_content-box_exclude,linear-gradient(#fff_0px,#fff_0px)]"
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
          className='font-sans flex h-[44px] items-center justify-center
            rounded-lg border border-[#000] bg-[rgba(0,0,0,0.5)] font-bold
            text-white'
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

      <div className='grid grid-cols-2 gap-2'>
        {/* Email поле */}
        <div className='relative col-span-2'>
          <label
            htmlFor='email'
            className='mb-1 block text-sm font-medium text-white'
          >
            Email
          </label>
          <div className='relative'>
            <input
              type='email'
              id='email'
              placeholder='your@email.com'
              className='relative z-10 w-full rounded-lg border-none
                bg-[rgba(36,34,31,0.5)] px-3 py-2 text-white focus:outline-none'
            />
            <div
              className='absolute inset-0 -z-10 rounded-lg bg-gradient-to-r
                from-[#f56600] to-[#ff9246] p-px'
            >
              <div className='h-full w-full rounded-[7px] bg-transparent'></div>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className='relative col-span-2'>
          <label
            htmlFor='card'
            className='mb-1 block text-sm font-medium text-white'
          >
            Card Information
          </label>
          <div className='relative'>
            <div
              className='relative z-10 rounded-lg bg-[rgba(36,34,31,0.5)] p-3'
            >
              <input
                type='text'
                id='card'
                placeholder='1234 1234 1234 1234'
                className='w-full border-none bg-transparent text-white
                  placeholder-gray-400 focus:outline-none'
              />
              <div className='mt-2 grid grid-cols-3 gap-2'>
                <input
                  type='text'
                  placeholder='MM/YY'
                  className='border-none bg-transparent text-white
                    placeholder-gray-400 focus:outline-none'
                />
                <input
                  type='text'
                  placeholder='CVC'
                  className='border-none bg-transparent text-white
                    placeholder-gray-400 focus:outline-none'
                />
                <input
                  type='text'
                  placeholder='ZIP'
                  className='border-none bg-transparent text-white
                    placeholder-gray-400 focus:outline-none'
                />
              </div>
            </div>
            <div
              className='absolute inset-0 -z-10 rounded-lg bg-gradient-to-r
                from-[#f56600] to-[#ff9246] p-px'
            >
              <div className='h-full w-full rounded-[7px] bg-transparent'></div>
            </div>
          </div>
        </div>

        {/* Кнопка оплаты */}
        <div className='col-span-2 mt-4'>
          <button
            className='font-sans relative flex h-11 w-full cursor-pointer
              flex-wrap items-center justify-between rounded-lg border
              border-black bg-black/50 p-0 font-bold tracking-wide text-white
              shadow-[rgb(21,21,21)_2px_4px_14px_1px] transition-all
              duration-200 ease-in-out'
          >
            <span
              className='w-full rounded-2xl bg-gradient-to-r from-[#f56600]
                to-[#ff9246] py-1.5 px-4 font-extrabold text-white
                transition-all duration-200 ease-in-out hover:brightness-110
                active:scale-95'
            >
              Pay Now
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
