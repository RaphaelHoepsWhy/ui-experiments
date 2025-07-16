"use client"

import { cn } from "@/lib/utils"
import React, { Fragment, ReactNode } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/pagination"

type Props = {
  className?: string
  items: ReactNode[]
  itemSliderWidth?: string
}

export default function RowOrSlider({
  items,
  className,
  itemSliderWidth = "320px",
}: Props) {
  return (
    <>
      <div
        className={cn(
          "flex gap-4 px-4 max-lg:hidden lg:gap-6 lg:px-8",
          className,
        )}
      >
        {items.map((item, index) => (
          <div key={index} className="w-0 flex-1">
            {item}
          </div>
        ))}
      </div>

      <div className={cn("pb-20 lg:hidden", className)}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
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
