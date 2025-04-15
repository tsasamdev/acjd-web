"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] max-w-sm bg-white p-0">
        <SheetHeader className="border-b border-sky-100 p-4">
          <SheetTitle>Menu</SheetTitle>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="absolute right-4 top-4">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetHeader>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="flex flex-col space-y-2 px-4">
            <li>
              <Link
                href="#"
                className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-sky-50"
                onClick={handleLinkClick}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-sky-50"
                onClick={handleLinkClick}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-sky-50"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#fleet"
                className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-sky-50"
                onClick={handleLinkClick}
              >
                Flotte
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-sky-50"
                onClick={handleLinkClick}
              >
                Formations
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="flex h-10 items-center rounded-md px-4 text-sm font-medium hover:bg-sky-50"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
