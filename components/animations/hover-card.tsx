"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
}

export function HoverCard({ children, className = "", hoverScale = 1.03 }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: hoverScale, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
