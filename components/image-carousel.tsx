"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  aspectRatio?: "square" | "video" | "wide"
  autoplay?: boolean
  autoplayInterval?: number
  showArrows?: boolean
  showDots?: boolean
  showPlayPause?: boolean
  className?: string
  overlayGradient?: boolean
  badges?: React.ReactNode
}

export function ImageCarousel({
  images,
  aspectRatio = "video",
  autoplay = true, // Changed to true by default
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
  showPlayPause = true,
  className = "",
  overlayGradient = false,
  badges,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Handle autoplay
  useEffect(() => {
    if (!autoplay || isPaused || images.length <= 1) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval, images.length, isPaused])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    },
    [currentIndex],
  )

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!isHovering) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isHovering, goToPrevious, goToNext])

  // Determine aspect ratio class
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-[16/9]",
    wide: "aspect-[2/1]",
  }[aspectRatio]

  // Variants for slide animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  // If there's only one image, simplify the component
  if (images.length <= 1) {
    return (
      <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
        {overlayGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent z-10"></div>
        )}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={images[0]?.src || "/placeholder.svg"}
            alt={images[0]?.alt || "Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {badges && <div className="absolute bottom-4 left-4 z-20">{badges}</div>}
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden group ${aspectRatioClass} ${className}`}
      onMouseEnter={() => {
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
    >
      {/* Gradient overlay */}
      {overlayGradient && <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent z-10"></div>}

      {/* Main image carousel */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sky-800 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sky-800 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Play/Pause button */}
      {showPlayPause && autoplay && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            togglePause()
          }}
          className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sky-800 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      )}

      {/* Indicator dots */}
      {showDots && (
        <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                goToSlide(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Badges (e.g. "École", "Voyage", etc.) */}
      {badges && <div className="absolute bottom-4 left-4 z-20">{badges}</div>}

      {/* Progress bar animation */}
      {autoplay && !isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-200/30 z-20">
          <motion.div
            className="h-full bg-sky-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: autoplayInterval / 1000,
              ease: "linear",
              repeat: 0,
            }}
            key={`progress-${currentIndex}`}
          />
        </div>
      )}
    </div>
  )
}
