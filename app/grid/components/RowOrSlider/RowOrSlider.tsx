"use client"

import { cn } from "@/lib/utils"
import React, { Fragment, ReactNode } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/pagination"
import useIsMobile from "@/hooks/useIsMobile"

type Props = {
  className?: string
  items: ReactNode[]
  itemSliderWidth?: string
  forceSlider?: boolean
}

export default function RowOrSlider({
  items,
  className,
  forceSlider,
  itemSliderWidth = "320px",
}: Props) {
  const isMobile = useIsMobile()

  return (
    <>
      <div
        className={cn(
          "flex gap-4 px-4 max-lg:hidden lg:gap-6 lg:px-8",
          { "max-lg:hidden": !forceSlider, hidden: forceSlider },
          className,
        )}
      >
        {items.map((item, index) => (
          <div key={index} className="w-0 flex-1">
            {item}
          </div>
        ))}
      </div>

      <div className={cn("pb-20", { "lg:hidden": !forceSlider }, className)}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          slidesOffsetBefore={isMobile ? 16 : 32}
          slidesOffsetAfter={isMobile ? 16 : 32}
          modules={[Pagination]}
          pagination={{ type: "progressbar" }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} style={{ width: itemSliderWidth }}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
