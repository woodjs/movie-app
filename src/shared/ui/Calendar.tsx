// import { AnimatePresence, motion } from 'framer-motion'

// export function Calendar() {
//   return (
//     <AnimatePresence>
//       {showModal && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.25 }}
//           className='fixed inset-0 z-50 flex items-center justify-center
//             bg-black/70 backdrop-blur-sm'
//         >
//           <motion.div
//             ref={modalRef}
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ duration: 0.25, ease: 'easeOut' }}
//             className='mx-4 w-full max-w-md rounded-2xl bg-gray-800 p-6
//               shadow-xl'
//           >
//             <h3 className='mb-4 text-center text-lg font-bold text-white'>
//               Select a Date
//             </h3>

//             <DayPicker
//               className='flex justify-center'
//               mode='single'
//               selected={selectedDate}
//               onSelect={d => {
//                 if (d) {
//                   handleDateSelect(d)
//                   setShowModal(false)
//                 }
//               }}
//               month={today}
//               captionLayout='label'
//               hideNavigation
//               disabled={date => availableDates.length > 0 && !isAvailable(date)}
//               // modifiersStyles={{
//               //   selected: { backgroundColor: '#3b82f6', color: 'white' },
//               //   disabled: { color: '#555' },
//               //   today: {}, // убираем выделение для сегодняшнего дня
//               // }}
//               // styles={{
//               //   caption: { color: 'white' },
//               //   head_cell: { color: '#9ca3af' },
//               //   day: { borderRadius: '8px' },
//               // }}
//             />

//             <div className='mt-6 flex justify-center'>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className='rounded-lg bg-gray-700 px-4 py-2 font-semibold
//                   text-white transition-all hover:bg-gray-600'
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
