"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useState } from "react"
import CloseIcon from "@/components/icons/CloseIcon"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [disableCloseIconOnHover, setDisableCloseIconOnHover] = useState(false)

  function updateChecked(value: boolean) {
    setIsChecked(value)
  }

  return (
    <CheckboxPrimitive.Root
      checked={isChecked}
      onCheckedChange={(value) => setIsChecked(value === true)}
      data-slot="checkbox"
      className={cn(
        "peer border-input bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Checkbox />
      <CheckIcon />
      <CloseIcon />
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
