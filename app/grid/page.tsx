import Box from "@/app/grid/components/Box"
import SectionHeadline from "@/app/grid/components/SectionHeadline"
import "swiper/css"
import RowOrSlider from "@/app/grid/components/RowOrSlider/RowOrSlider"
import PageHeadline from "@/app/grid/components/PageHeadline"

export default function Home() {
  return (
    <>
      <div className="px-4 lg:px-8">
        <PageHeadline>Layout Experiments</PageHeadline>
        <SectionHeadline>Paragraph</SectionHeadline>

        <p className="max-w-[800px] pb-8 lg:pb-16">
          This Paragraph contains body text that also scales in a minimal way.
          This text is intended to be easy to read for the user, so the
          font-size is mostly determined by the distance of their eyes from the
          screen, not the overall available space on their screen. We only add
          some minimal scaling for visual layout consistency.
        </p>

        <div className="grid grid-cols-3 gap-4 lg:gap-6">
          <p className="col-start-1 -col-end-1 max-w-[800px] pb-8 lg:col-start-2 lg:pb-16">
            A paragraph like this could also start on another grid line. But it
            always has a max-width of 800px. Since it is ment to be readable as
            easy as possible we avoid too long lines here that the eye cannot
            follow.
          </p>
        </div>

        <SectionHeadline>Row / Slider</SectionHeadline>
      </div>

      <RowOrSlider
        className="pb-12"
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

      <RowOrSlider
        className="pb-12"
        itemSliderWidth="240px"
        items={[
          <Box className="aspect-square text-lg" key={1} gradient={"sunset"}>
            <div className="pb-1 text-sm">First</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="aspect-square text-lg" key={2} gradient={"sunset"}>
            <div className="pb-1 text-sm">Second</div>
            <div className="text-lg">Dolor Sit</div>
          </Box>,
          <Box className="aspect-square text-lg" key={3} gradient={"sunset"}>
            <div className="pb-1 text-sm">Third</div>
            <div className="text-lg">Amet Consetetur</div>
          </Box>,
          <Box className="aspect-square text-lg" key={4} gradient={"sunset"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
        ]}
      />

      <RowOrSlider
        className="pb-24 lg:pb-24"
        itemSliderWidth="260px"
        forceSlider={true}
        items={[
          <Box className="text-lg" key={1} gradient={"ocean"}>
            <div className="pb-1 text-sm">First</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={2} gradient={"ocean"}>
            <div className="pb-1 text-sm">Second</div>
            <div className="text-lg">Dolor Sit</div>
          </Box>,
          <Box className="text-lg" key={3} gradient={"ocean"}>
            <div className="pb-1 text-sm">Third</div>
            <div className="text-lg">Amet Consetetur</div>
          </Box>,
          <Box className="text-lg" key={4} gradient={"ocean"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={5} gradient={"ocean"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={6} gradient={"ocean"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={7} gradient={"ocean"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={8} gradient={"ocean"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
          <Box className="text-lg" key={9} gradient={"ocean"}>
            <div className="pb-1 text-sm">Fourth</div>
            <div className="text-lg">Lorem Ipsum</div>
          </Box>,
        ]}
      />
    </>
  )
}
