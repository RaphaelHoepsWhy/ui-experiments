"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"
import CheckboxIcon from "@/components/icons/CheckboxIcon"
import CheckIcon from "@/components/icons/CheckIcon"
import CloseIcon from "@/components/icons/CloseIcon"
import { AnimatePresence } from "motion/react"

const distance = 15
const duration = 0.3
const opacityDuration = 0.3
const opacityDelay = duration - opacityDuration

const variants = {
  hiddenBottom: {
    y: distance,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        duration: duration,
        ease: "easeInOut",
      },
      opacity: {
        delay: opacityDelay,
        duration: opacityDuration,
        ease: "easeInOut",
      },
    },
  },
  hiddenTop: {
    y: -distance,
    opacity: 0,
    transition: {
      y: {
        duration: duration,
        ease: "easeInOut",
      },
      opacity: {
        duration: opacityDuration,
        ease: "easeInOut",
      },
    },
  },
}

interface Props extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  renderIcon: "checkbox" | "check" | "close"
  className: string
}

export default function AnimatedCheckbox({
  className,
  renderIcon,
  ...props
}: Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative size-4 shrink-0 overflow-hidden rounded-[4px] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <AnimatePresence>
        {renderIcon === "checkbox" && (
          <CheckboxIcon
            key="checkbox"
            className="absolute top-0 left-0 size-4"
            variants={variants}
            initial={"hiddenBottom"}
            animate={"visible"}
            exit={"hiddenTop"}
          />
        )}
        {renderIcon === "check" && (
          <CheckIcon
            key="check"
            className="absolute top-0 left-0 size-4"
            variants={variants}
            initial={"hiddenBottom"}
            animate={"visible"}
            exit={"hiddenTop"}
          />
        )}
        {renderIcon === "close" && (
          <CloseIcon
            key="close"
            className="absolute top-0 left-0 size-4"
            variants={variants}
            initial={"hiddenBottom"}
            animate={"visible"}
            exit={"hiddenTop"}
          />
        )}
      </AnimatePresence>
    </CheckboxPrimitive.Root>
  )
}
