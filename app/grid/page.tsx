import Box from "@/app/grid/components/Box"

export default function Home() {
  return (
    <>
      <h2 className="p-4 text-2xl lg:p-8">First Section</h2>
      <div className="aspect-wide grid grid-cols-3 gap-4 px-8 lg:gap-6 lg:px-8">
        <Box className="text-lg">
          <div className="pb-1 text-sm">First</div>
          <div className="text-lg">Lorem Ipsum</div>
        </Box>
        <Box className="text-lg">
          <div className="pb-1 text-sm">First</div>
          <div className="text-lg">Dolor Sit</div>
        </Box>
        <Box className="text-lg">
          <div className="pb-1 text-sm">First</div>
          <div className="text-lg">Amet Consetetur</div>
        </Box>
      </div>
    </>
  )
}
