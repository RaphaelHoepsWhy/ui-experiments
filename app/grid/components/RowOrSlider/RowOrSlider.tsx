"use client"

import { cn } from "@/lib/utils"
import React, { Fragment, ReactNode } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

type Props = {
  className?: string
  items: ReactNode[]
}

export default function RowOrSlider({ items, className }: Props) {
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

      <div className={cn("lg:hidden", className)}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "380px" }}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
