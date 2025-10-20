export function Card({
  Header,
  Body,
}: {
  Header: React.ReactNode
  Body: React.ReactNode
}) {
  return (
    <div
      className='overflow-hidden rounded-xl bg-gradient-to-b from-gray-800
        via-gray-700 to-gray-800'
    >
      {Header}
      <div>{Body}</div>
    </div>
  )
}
