"use client"

import AnimatedCheckbox from "@/components/CheckboxWithLabel/AnimatedCheckbox"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"

type Props = {
  className?: string
}

export default function CheckboxWithLabel({}: Props) {
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

  return (
    <div
      className="flex items-center gap-2 transition-colors hover:text-green-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <AnimatedCheckbox
        id="terms"
        className="cursor-pointer"
        renderIcon={renderIcon}
        checked={isChecked}
        onCheckedChange={(value) => updateChecked(value === true)}
      />
      <Label htmlFor="terms" className="cursor-pointer">
        Accept terms and conditions
      </Label>
    </div>
  )
}
