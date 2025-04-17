"use client"

import React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerInProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

export function StaggerIn({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  direction = "up",
  distance = 20,
}: StaggerInProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return {}
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, ...getDirectionOffset() },
    show: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  }

  // Clone children and add motion variants
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return <motion.div variants={item}>{child}</motion.div>
    }
    return child
  })

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {childrenWithProps}
    </motion.div>
  )
}
