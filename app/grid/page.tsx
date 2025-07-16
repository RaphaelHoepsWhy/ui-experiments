import Box from "@/app/grid/components/Box"

export default function Home() {
  return (
    <div className="aspect-wide grid grid-cols-3 gap-8">
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
  )
}
