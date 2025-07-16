import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

type Props = {
  className?: string
  children?: ReactNode
}

export default function Box({ children, className }: Props) {
  return (
    <div
      className={cn(
        "relative flex items-end rounded bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 p-8",
        "aspect-high after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:rounded-b after:bg-gradient-to-t after:from-black/60 after:to-transparent",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
