"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.3, className = "" }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}
