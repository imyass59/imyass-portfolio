import { useState, useEffect } from "react"

type Breakpoints = {
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  "2xl": boolean
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

const useBreakpoints = (): Breakpoints => {
  const [isBreakpoint, setIsBreakpoint] = useState<Breakpoints>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  })

  useEffect(() => {
    const handleResize = () => {
      setIsBreakpoint({
        sm: window.innerWidth >= breakpoints.sm,
        md: window.innerWidth >= breakpoints.md,
        lg: window.innerWidth >= breakpoints.lg,
        xl: window.innerWidth >= breakpoints.xl,
        "2xl": window.innerWidth >= breakpoints["2xl"],
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isBreakpoint
}

export default useBreakpoints
