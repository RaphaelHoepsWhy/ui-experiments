import React, { ReactNode } from "react"

type Props = {
  className?: string
  children: ReactNode
}

export default function SectionHeadline({ children }: Props) {
  return <h2 className="p-4 text-2xl lg:p-8">{children}</h2>
}
