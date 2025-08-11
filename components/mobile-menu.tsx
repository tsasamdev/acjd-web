"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, EuroIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useActiveSection } from "@/hooks/use-active-section"

export function MobileMenu({ onOpenPriceModal }: { onOpenPriceModal: () => void }) {
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(["home", "about", "services", "fleet", "events", "pricing", "contact"])

  const handleLinkClick = () => {
    setOpen(false)
  }

  const menuItems = [
    { name: "Accueil", href: "#home", id: "home" },
    { name: "A propos", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Flotte", href: "#fleet", id: "fleet" },
    { name: "Formations", href: "#formations", id: "formations" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

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
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="o" width={30} height={30} className="h-8 w-auto" />
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="flex flex-col space-y-2 px-4">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id || (activeSection === "" && item.id === "home")
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex h-10 items-center rounded-md px-4 text-sm font-medium transition-colors ${
                      isActive ? "bg-sky-50 text-sky-600" : "text-muted-foreground hover:bg-sky-50 hover:text-sky-600"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                    {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-600"></span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
