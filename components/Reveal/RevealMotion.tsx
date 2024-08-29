import { useScroll, useTransform, motion } from "framer-motion"
import React from "react"

export default function RevealMotion({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="w-fit h-fit">
      <motion.div
        style={{
          scale,
          opacity,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
