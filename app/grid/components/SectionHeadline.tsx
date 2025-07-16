import React, { ReactNode } from "react"

type Props = {
  className?: string
  children: ReactNode
}

export default function SectionHeadline({ children }: Props) {
  return <h2 className="pb-4 text-2xl lg:pb-8">{children}</h2>
}
