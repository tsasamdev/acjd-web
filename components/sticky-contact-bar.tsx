"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Menu, X } from "lucide-react"

export function StickyContactBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide the bar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-sky-100 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {isExpanded && (
        <div className="absolute bottom-full left-0 right-0 bg-white p-4 rounded-t-xl shadow-lg border border-sky-100 border-b-0 animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-sky-800">Contactez-nous</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-full hover:bg-sky-50"
              aria-label="Fermer le menu de contact"
            >
              <X className="h-5 w-5 text-sky-600" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="tel:+33468231050"
              className="flex flex-col items-center gap-1 p-3 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
            >
              <Phone className="h-5 w-5 text-sky-600" />
              <span className="text-xs font-medium text-sky-800">Appeler</span>
            </Link>
            <Link
              href="mailto:ac.jd@freesbee.fr"
              className="flex flex-col items-center gap-1 p-3 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
            >
              <Mail className="h-5 w-5 text-sky-600" />
              <span className="text-xs font-medium text-sky-800">Email</span>
            </Link>
            <Link
              href="https://maps.google.com/?q=Aeroclub+Jean+Doudies+1661+route+du+Mas+Ste+Puelles+11400+Castelnaudary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 p-3 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
            >
              <MapPin className="h-5 w-5 text-sky-600" />
              <span className="text-xs font-medium text-sky-800">Itinéraire</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsExpanded(false)}
              className="flex flex-col items-center gap-1 p-3 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-sky-600"
              >
                <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                <rect width="18" height="12" x="3" y="4" rx="2" />
                <line x1="10" x2="14" y1="16" y2="16" />
              </svg>
              <span className="text-xs font-medium text-sky-800">Message</span>
            </Link>
          </div>
        </div>
      )}

      <div className="flex justify-around items-center h-16">
        <Link
          href="tel:+33468231050"
          className="flex flex-col items-center justify-center flex-1 h-full hover:bg-sky-50 transition-colors"
        >
          <Phone className="h-5 w-5 text-sky-600 mb-1" />
          <span className="text-xs text-sky-800">Appeler</span>
        </Link>
        <Link
          href="mailto:ac.jd@freesbee.fr"
          className="flex flex-col items-center justify-center flex-1 h-full hover:bg-sky-50 transition-colors"
        >
          <Mail className="h-5 w-5 text-sky-600 mb-1" />
          <span className="text-xs text-sky-800">Email</span>
        </Link>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-col items-center justify-center flex-1 h-full hover:bg-sky-50 transition-colors"
          aria-expanded={isExpanded}
          aria-label="Ouvrir le menu de contact"
        >
          <Menu className="h-5 w-5 text-sky-600 mb-1" />
          <span className="text-xs text-sky-800">Plus</span>
        </button>
      </div>
    </div>
  )
}
