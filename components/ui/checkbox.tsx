"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"
import { useState } from "react"
import CheckboxIcon from "@/components/icons/CheckboxIcon"
import CheckIcon from "@/components/icons/CheckIcon"
import CloseIcon from "@/components/icons/CloseIcon"
import { AnimatePresence } from "motion/react"

const variants = {
  hiddenBottom: {
    y: 10,
  },
  visible: {
    y: 0,
  },
  hiddenTop: {
    y: -10,
  },
}

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [disableCloseIconOnHover, setDisableCloseIconOnHover] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  function updateChecked(value: boolean) {
    setIsChecked(value)
    if (value) {
      setDisableCloseIconOnHover(true)
    }
  }

  function handleMouseLeave() {
    console.log("mouseleave")
    setIsHovered(false)
    setDisableCloseIconOnHover(false)
  }

  function getRenderIcon() {
    if (!isChecked) {
      return "checkbox"
    }
    if (isHovered && !disableCloseIconOnHover) {
      return "close"
    }
    return "check"
  }

  const renderIcon = getRenderIcon()

  console.log(disableCloseIconOnHover)

  return (
    <CheckboxPrimitive.Root
      checked={isChecked}
      onCheckedChange={(value) => updateChecked(value === true)}
      data-slot="checkbox"
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => handleMouseLeave()}
      {...props}
    >
      <AnimatePresence mode="wait">
        {renderIcon === "checkbox" && (
          <CheckboxIcon
            key="checkbox"
            className="size-4"
            variants={variants}
            intial={"hiddenBottom"}
            animate={"visible"}
            exit={"hiddenTop"}
          />
        )}
        {renderIcon === "check" && (
          <CheckIcon
            key="check"
            className="size-4"
            variants={variants}
            intial={"hiddenBottom"}
            animate={"visible"}
            exit={"hiddenTop"}
          />
        )}
        {renderIcon === "close" && (
          <CloseIcon
            key="close"
            className="size-4"
            variants={variants}
            intial={"hiddenBottom"}
            animate={"visible"}
            exit={"hiddenTop"}
          />
        )}
      </AnimatePresence>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
