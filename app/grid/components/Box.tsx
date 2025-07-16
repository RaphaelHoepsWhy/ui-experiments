import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React, { ReactNode } from "react"

const boxVariants = cva(
  [
    "relative flex items-end rounded p-8",
    "aspect-high after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:rounded-b after:bg-gradient-to-t after:from-black/60 after:to-transparent",
  ],
  {
    variants: {
      gradient: {
        purple: "bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500",
        sunset: "bg-gradient-to-bl from-orange-500 via-red-500 to-pink-500",
        ocean: "bg-gradient-to-bl from-blue-500 via-cyan-500 to-teal-500",
        nature:
          "bg-gradient-to-bl from-green-500 via-emerald-500 to-yellow-500",
        twilight:
          "bg-gradient-to-bl from-purple-500 via-blue-500 to-indigo-500",
      },
    },
    defaultVariants: {
      gradient: "purple",
    },
  },
)

type Props = {
  className?: string
  children?: ReactNode
} & VariantProps<typeof boxVariants>

export default function Box({ children, className, gradient }: Props) {
  return (
    <div className={cn(boxVariants({ gradient }), className)}>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
