import Box from "@/app/grid/components/Box"
import SectionHeadline from "@/app/grid/components/SectionHeadline"
import "swiper/css"
import RowOrSlider from "@/app/grid/components/RowOrSlider/RowOrSlider"

export default function Home() {
  return (
    <>
      <SectionHeadline>First Section</SectionHeadline>

      <RowOrSlider
        className="pb-4 lg:pb-8"
        items={[
          <Box className="text-lg" key={1}>
            <div className="pb-1 text-sm">First</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={2}>
            <div className="pb-1 text-sm">First</div>
            <div className="text-lg">Dolor Sit</div>
          </Box>,
          <Box className="text-lg" key={3}>
            <div className="pb-1 text-sm">First</div>
            <div className="text-lg">Amet Consetetur</div>
          </Box>,
        ]}
      />
    </>
  )
}
