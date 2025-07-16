import { useEffect, useState } from "react"

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  function getIsMobile() {
    return matchMedia(`(max-width: 1024px)`).matches
  }

  useEffect(() => {
    function onResize() {
      setIsMobile(getIsMobile())
    }

    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return isMobile
}
