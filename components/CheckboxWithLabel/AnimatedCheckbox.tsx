"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"
import CheckboxIcon from "@/components/icons/CheckboxIcon"
import CheckIcon from "@/components/icons/CheckIcon"
import CloseIcon from "@/components/icons/CloseIcon"
import { AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"

const distance = 15
const duration = 0.3
const opacityDuration = 0.3
const opacityDelay = duration - opacityDuration

const variants = {
  hiddenBottom: {
    y: distance,
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

type CheckboxIcon = "checkbox" | "check" | "close"

interface Props extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  renderIcon: "checkbox" | "check" | "close"
  className: string
}

export default function AnimatedCheckbox({
  className,
  renderIcon,
  ...props
}: Props) {
  const prevIcon = useRef<CheckboxIcon>(renderIcon)
  const direction = useRef<"down" | "up">("up")

  const [renderIconDelayed, setRenderIconDelayed] = useState(renderIcon)

  useEffect(() => {
    setRenderIconDelayed(renderIcon)
  }, [renderIcon])

  function updateDirection() {
    const oldIcon = prevIcon.current
    const newIcon = renderIcon
    prevIcon.current = renderIcon

    if (newIcon === "checkbox" && oldIcon === "check") {
      direction.current = "down"
      return
    }
    if (newIcon === "check" && oldIcon === "checkbox") {
      direction.current = "up"
      return
    }

    if (newIcon === "close" && oldIcon === "check") {
      direction.current = "up"
      return
    }
    if (newIcon === "check" && oldIcon === "close") {
      direction.current = "down"
      return
    }

    if (newIcon === "checkbox" && oldIcon === "close") {
      direction.current = "down"
      return
    }

    return "up"
  }

  updateDirection()

  const iconProps = {
    className: "absolute top-0 left-0 size-4",
    variants: variants,
    initial: direction.current === "up" ? "hiddenBottom" : "hiddenTop",
    animate: "visible",
    exit: direction.current === "up" ? "hiddenTop" : "hiddenBottom",
  }

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative size-4 shrink-0 overflow-hidden rounded-[4px] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <AnimatePresence initial={false}>
        {renderIconDelayed === "checkbox" && (
          <CheckboxIcon key="checkbox" {...iconProps} />
        )}
        {renderIconDelayed === "check" && (
          <CheckIcon key="check" {...iconProps} />
        )}
        {renderIconDelayed === "close" && (
          <CloseIcon key="close" {...iconProps} />
        )}
      </AnimatePresence>
    </CheckboxPrimitive.Root>
  )
}
