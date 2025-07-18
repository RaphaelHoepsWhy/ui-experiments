import React, { ReactNode } from "react"

type Props = {
  className?: string
  children: ReactNode
}

export default function PageHeadline({ children }: Props) {
  return <h2 className="py-8 text-4xl break-words lg:py-16">{children}</h2>
}
