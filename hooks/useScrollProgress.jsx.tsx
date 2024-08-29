import { useState, useEffect } from "react"

export default function useScrollProgress() {
  const [completion, setCompletion] = useState<number>(1)

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress: any = window.scrollY
      const scrollHeight: any = document.body.scrollHeight - window.innerHeight

      if (scrollHeight)
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
    }

    /**
     * Call the function to update the scroll completion
     */
    window.addEventListener("scroll", updateScrollCompletion)

    /**
     * Remove the event listener when the component is unmounted
     */
    return () => window.removeEventListener("scroll", updateScrollCompletion)
  }, [])

  return completion
}
