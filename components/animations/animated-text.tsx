"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  type?: "words" | "chars"
}

export function AnimatedText({ text, className = "", once = true, delay = 0, type = "words" }: AnimatedTextProps) {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    // Split the text properly when the component mounts
    if (type === "words") {
      setItems(text.split(/\s+/))
    } else {
      setItems(text.split(""))
    }
  }, [text, type])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
          style={{ marginRight: type === "words" && index !== items.length - 1 ? "0.25em" : undefined }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}
