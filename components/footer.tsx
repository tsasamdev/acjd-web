"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sky-900 to-navy-950 text-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Mobile Footer */}
        <div className="md:hidden pb-16">
          {" "}
          {/* Added padding at the bottom for the sticky contact bar */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">Aeroclub Jean Doudies</span>
            </div>
            <p className="text-sky-200 text-sm leading-relaxed mb-6 max-w-md">
              L'aéroclub Jean Doudies est une association dédiée à la promotion de l'aviation légère et à la formation
              de pilotes depuis plus de 50 ans.
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/aeroclub.castelnaudary"
                className="w-10 h-10 rounded-full bg-sky-800/50 flex items-center justify-center hover:bg-sky-700/50 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/aeroclub.castelnaudary/"
                className="w-10 h-10 rounded-full bg-sky-800/50 flex items-center justify-center hover:bg-sky-700/50 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-sky-800/20 rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-4 text-center">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-300 shrink-0 mt-0.5" />
                  <span className="text-sky-200 text-sm">1661 route du Mas Ste Puelles, 11400 Castelnaudary</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-300 shrink-0" />
                  <a href="tel:+33468231050" className="text-sky-200 text-sm hover:text-white transition-colors">
                    04.68.23.10.50
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sky-300 shrink-0" />
                  <a
                    href="mailto:contact@aeroclubjeandoudies.fr"
                    className="text-sky-200 text-sm hover:text-white transition-colors"
                  >
                    contact@aeroclubjeandoudies.fr
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links - Accordion Style */}
            <div className="space-y-4">
              <div className="bg-sky-800/20 rounded-xl p-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-semibold text-lg">Liens rapides</h3>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 pl-1">
                    <ul className="space-y-3 grid grid-cols-2">
                      <li>
                        <Link href="#home" className="text-sky-200 hover:text-white transition-colors text-sm">
                          Accueil
                        </Link>
                      </li>
                      <li>
                        <Link href="#about" className="text-sky-200 hover:text-white transition-colors text-sm">
                          À propos
                        </Link>
                      </li>
                      <li>
                        <Link href="#services" className="text-sky-200 hover:text-white transition-colors text-sm">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="#fleet" className="text-sky-200 hover:text-white transition-colors text-sm">
                          Flotte
                        </Link>
                      </li>
                      <li>
                        <Link href="#events" className="text-sky-200 hover:text-white transition-colors text-sm">
                          Formations
                        </Link>
                      </li>
                      <li>
                        <Link href="#contact" className="text-sky-200 hover:text-white transition-colors text-sm">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-sky-800/20 rounded-xl p-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-semibold text-lg">Formations</h3>
                    <span className="transition group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 pl-1">
                    <ul className="space-y-3">
                      <li>
                        <Link href="#" className="text-sky-200 hover:text-white transition-colors text-sm">
                          Brevet ULM
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sky-200 hover:text-white transition-colors text-sm">
                          LAPL
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sky-200 hover:text-white transition-colors text-sm">
                          PPL
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-sky-800">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <a href="#" className="opacity-70 hover:opacity-100 transition">
                  <img src="/ffa.png" alt="FFA" className="h-8" />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition">
                  <img src="/ffplum.png" alt="FFPLUM" className="h-8" />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition">
                  <img src="/castel.png" alt="Castelnaudary" className="h-8" />
                </a>
              </div>
            </div>
            <p className="text-xs text-sky-300 text-center">
              © {new Date().getFullYear()} Aeroclub Jean Doudies. Tous droits réservés.
            </p>
          </div>
          <div className="mt-2 flex justify-center text-xs text-sky-400">
            <span>
              Made with <span className="text-pink-400">♥</span> by{' '}
              <a
                href="https://github.com/tsasamdev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-400"
              >
                Tsiory
              </a>
            </span>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid gap-10 md:grid-cols-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-auto" />
                <span className="text-xl font-bold">Aeroclub Jean Doudies</span>
              </div>
              <p className="text-sky-200 text-sm leading-relaxed mb-6">
                L'aéroclub Jean Doudies est une association dédiée à la promotion de l'aviation légère et à la formation
                de pilotes depuis plus de 50 ans.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/aeroclub.castelnaudary" className="text-sky-200 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/aeroclub.castelnaudary/" className="text-sky-200 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-sky-200 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sky-200 hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sky-200 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#fleet" className="text-sky-200 hover:text-white transition-colors">
                    Flotte
                  </Link>
                </li>
                <li>
                  <Link href="#formations" className="text-sky-200 hover:text-white transition-colors">
                    Formations
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sky-200 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Formations</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#formations" className="text-sky-200 hover:text-white transition-colors">
                    Brevet ULM
                  </Link>
                </li>
                <li>
                  <Link href="#formations" className="text-sky-200 hover:text-white transition-colors">
                    LAPL
                  </Link>
                </li>
                <li>
                  <Link href="#formations" className="text-sky-200 hover:text-white transition-colors">
                    PPL
                  </Link>
                </li>        
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-300 shrink-0 mt-0.5" />
                  <span className="text-sky-200">1661 route du Mas Ste Puelles, 11400 Castelnaudary</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-300 shrink-0" />
                  <span className="text-sky-200">04.68.23.10.50</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sky-300 shrink-0" />
                  <span className="text-sky-200">ac.jd@freesbee.fr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-sky-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-sky-300">
              © {new Date().getFullYear()} Aeroclub Jean Doudies. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="opacity-70 hover:opacity-100 transition">
                <img src="/ffa.png" alt="FFA" className="h-10" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">
                <img src="/ffplum.png" alt="FFPLUM" className="h-10" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">
                <img src="/castel.png" alt="Castelnaudary" className="h-10" />
              </a>
            </div>
          </div>
          <div className="mt-2 flex justify-center text-xs text-sky-400">
            <span>
              Made with <span className="text-pink-400">♥</span> by{' '}
              <a
                href="https://github.com/tsasamdev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-400"
              >
                Tsiory
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
