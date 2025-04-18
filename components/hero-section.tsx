"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { AnimatedText } from "@/components/animations/animated-text"

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] lg:h-[800px] bg-sky-900 overflow-hidden">
      {/* Background image */}
      {!imageError && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/aerodrome.jpg"
            alt="Aérodrome de Castelnaudary"
            fill
            priority
            className={`object-cover ${imageLoaded ? "opacity-70" : "opacity-0"} transition-opacity duration-500`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-sky-900/50"></div>
        </div>
      )}

      {/* Aviation-themed overlay (visible regardless of image loading) */}
      <div className="absolute inset-0 z-[1]">
        {/* Clouds */}
        <div className="absolute top-[10%] left-[5%] w-32 h-16 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-[20%] right-[15%] w-48 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-[60%] left-[25%] w-40 h-20 bg-white/10 rounded-full blur-xl"></div>

        {/* Flight path lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,300 C100,200 300,600 600,300 S900,100 1200,300"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path
            d="M-100,500 C200,400 400,800 700,500 S1000,300 1300,500"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path
            d="M-100,100 C200,200 400,0 700,100 S1000,200 1300,100"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Small airplane silhouettes */}
        <div className="absolute top-[15%] right-[30%]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/20"
          >
            <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-[45%] left-[20%]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/15"
          >
            <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-[65%] right-[15%]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/20"
          >
            <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="flex flex-col items-start gap-6 text-white max-w-xl">
        
          <FadeIn delay={0.4}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
              <AnimatedText text="Apprendre à piloter" delay={0.6} />
              <span className="text-sky-300">...</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-sky-100">
              Ce n'est pas qu'un rêve d'enfant, c'est une aventure accessible à tous.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                Découvrir nos formations
              </Button>
            
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
