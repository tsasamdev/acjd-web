"use client"

import { motion } from "framer-motion"
import { Plane } from "lucide-react"
import { useEffect, useState } from "react"

interface FlyingPlaneProps {
  color?: string
  size?: number
  duration?: number
  delay?: number
}

export function FlyingPlane({ color = "text-white", size = 24, duration = 20, delay = 0 }: FlyingPlaneProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show the animation after a delay and if the user hasn't disabled animations
    const timer = setTimeout(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (!prefersReducedMotion) {
        setIsVisible(true)
      }
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  if (!isVisible) return null

  return (
    <motion.div
      className={`fixed z-40 ${color}`}
      initial={{ x: "-10vw", y: "20vh", rotate: 15 }}
      animate={{
        x: "110vw",
        y: "10vh",
        rotate: 15,
        transition: {
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 10,
        },
      }}
    >
      <Plane size={size} className="transform -rotate-45" />
    </motion.div>
  )
}
