const AnimatedBackground = () => {
  return (
    <div className='fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden'>
      {/* Градиентный фон */}
      {/* <div
        className='absolute top-0 left-0 -z-10 h-full w-full overflow-hidden'
        style={{
          backgroundImage: `
            radial-gradient(70% 53% at 36% 76%, rgb(17, 17, 17) 0%, rgba(0, 0, 0, 0) 100%),
            radial-gradient(42% 53% at 15% 94%, rgba(0, 0, 0, 0.34) 7%, rgba(0, 0, 0, 0) 100%),
            radial-gradient(74% 86% at 67% 38%, rgb(26, 19, 19) 24%, rgba(164, 183, 255, 0) 100%),
            linear-gradient(125deg, rgba(0, 0, 0, 0.96) 0%, rgb(226, 94, 0) 50%, rgb(52, 0, 0) 100%)
          `,
        }}
      /> */}
      <div
        className="css-154ukp7 before:animate-slowMove1 after:animate-slowMove2
          after:w-30 after:h-30 absolute top-0 left-0 -z-20 h-full w-full
          overflow-hidden
          bg-[radial-gradient(70%_53%_at_36%_76%,#111_0%,#0000_100%),radial-gradient(42%_53%_at_15%_94%,#00000057_7%,#0000_100%),radial-gradient(74%_86%_at_67%_38%,#1a1313_24%,#a4b7ff00_100%),linear-gradient(125deg,#000000f5_0%,#e25e00_50%,#340000_100%)]
          before:absolute before:top-[10%] before:left-[15%] before:-z-10
          before:h-20 before:w-20 before:rounded-full before:bg-[#893901]
          before:blur-[200px] before:filter before:content-[''] after:absolute
          after:left-1/2 after:top-1/2 after:-z-10 after:rounded-full
          after:bg-[#653818] after:blur-[80px] after:filter after:content-['']
          md:before:h-[40vh] md:before:w-[40vh] md:after:h-[30vh]
          md:after:w-[40vh]"
      />

      {/* Нойз фильтр */}
      <div
        className="opacity-65 h-full w-full
          bg-[url('https://www.regmovies.com/noise_filter3.png')] bg-repeat
          mix-blend-overlay"
      />
    </div>
  )
}

export default AnimatedBackground
