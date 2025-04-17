"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { AnimatedText } from "@/components/animations/animated-text"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[600px] md:h-[700px] lg:h-[800px] bg-gradient-to-b from-sky-800 to-sky-950"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="flex flex-col items-start gap-6 text-white max-w-xl">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-block px-3 py-1 bg-sky-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
              Aéroclub Jean Doudies
            </div>
          </FadeIn>
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
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
