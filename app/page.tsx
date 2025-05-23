"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookAIcon,
  ChevronRight,
  Clock,
  CompassIcon,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Plane,
  ReceiptCentIcon,
  Shield,
  Users,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileMenu } from "@/components/mobile-menu"
import { PricingInfo } from "@/components/pricing-info"
import { ContactFormEnhanced } from "@/components/contact-form-enhanced"
import { Footer } from "@/components/footer"
import { StickyContactBar } from "@/components/sticky-contact-bar"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { HoverCard } from "@/components/animations/hover-card"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { FlyingPlane } from "@/components/animations/flying-plane"
import { HeroSection } from "@/components/hero-section"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import TrainingCard from "@/components/training-card-reusable"
import { useActiveSection } from "@/hooks/use-active-section"
import { AircraftCard } from "@/components/aircraft-card"
import { evektorImages, robinDR180Images, robinDR160Images, ulmImages } from "@/components/placeholder-images"
import { ImprovedPriceButton } from "@/components/improved-price-button"
import { EventsTimeline } from "@/components/events-timeline"
import { WebcamFeed } from "@/components/webcam-feed"
import WeatherComponent from "@/components/weather-component"
import WeatherForecast from "@/components/weather-component"

export default function Home() {
  const activeSection = useActiveSection(["home", "about", "services", "fleet", "events", "webcam","contact"])
  const [useBackupHero, setUseBackupHero] = useState(false)
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  // Check if the image is available

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <FlyingPlane delay={3} />
      <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold text-sky-800">Aeroclub Jean Doudies</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { name: "Accueil", href: "#home", id: "home" },
              { name: "A propos", href: "#about", id: "about" },
              { name: "Services", href: "#services", id: "services" },
              { name: "Flotte", href: "#fleet", id: "fleet" },
              { name: "Formations", href: "#events", id: "events" },
              { name: "Webcam", href: "#webcam", id: "webcam" },
              { name: "Contact", href: "#contact", id: "contact" },
            ].map((item) => {
              const isActive = activeSection === item.id || (activeSection === "" && item.id === "home")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-sky-600 relative ${isActive ? "text-sky-600" : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-[21px] left-0 w-full h-0.5 bg-sky-600 rounded-full"></span>
                  )}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-3">
            <MobileMenu onOpenPriceModal={() => setIsPriceModalOpen(true)} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Use either the image-based hero or the fallback */}
        <HeroSection />

        {/* About section */}
        <section id="about" className="py-20 md:py-28 bg-sky-pattern">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-6">
                    <Plane className="w-4 h-4 mr-2" />À propos de nous
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl font-bold tracking-tight mb-6 text-sky-900">Notre aéroclub</h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    L'aéroclub est implanté sur le domaine public de l'aérodrome de Castelnaudary Villeneuve et dispose
                    d'un hangar pouvant abriter 5 aéronefs, d'une tour de contrôle abritant le bureau des instructeurs
                    et un simulateur de vol, d'un grand clubhouse ou se passent les réunions et animations du club, et
                    d'une salle de cours dédiée aux élèves ULM.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Forte d'une soixantaine de membres actifs, elle est dirigée par un Comité de direction élu en
                    assemblée générale et qui délègue la gestion courante au bureau directeur (Président, Trésorier,
                    secrétaire). Tous les membres assurant le bon fonctionnement de l'aéroclub (dirigeants,
                    instructeurs, responsables divers postes…) sont bénévoles.
                  </p>
                </FadeIn>
                <StaggerIn delay={0.4}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                    <HoverCard>
                      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-sm border border-sky-50 transition-all duration-300 hover:shadow-md hover:border-sky-100 h-[120px]">
                        <Users className="h-8 w-8 text-sky-600 mb-2" /> {/* Reduced icon size */}
                        <p className="font-bold text-2xl text-sky-900">60+</p> {/* Smaller number font size */}
                        <p className="text-muted-foreground text-sm text-center">Membres actifs</p> {/* Smaller label font size */}
                      </div>
                    </HoverCard>
                    <HoverCard>
                      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-sm border border-sky-50 transition-all duration-300 hover:shadow-md hover:border-sky-100 h-[120px]">
                        <Plane className="h-8 w-8 text-sky-600 mb-2" />
                        <p className="font-bold text-2xl text-sky-900">5</p>
                        <p className="text-muted-foreground text-sm text-center">Avions</p>
                      </div>
                    </HoverCard>
                    <HoverCard>
                      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-sm border border-sky-50 transition-all duration-300 hover:shadow-md hover:border-sky-100 h-[120px]">
                        <Shield className="h-8 w-8 text-sky-600 mb-2" />
                        <p className="font-bold text-2xl text-sky-900">50+</p>
                        <p className="text-muted-foreground text-sm text-center">Années d'expérience</p>
                      </div>
                    </HoverCard>
                  </div>
                  <div className="flex flex-col gap-8 mt-8">
                    <FadeIn direction="right" delay={0.2}>
                      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent z-10"></div>
                        <Image src="/accueil.png" alt="Aeroclub members and aircraft" fill className="object-cover" />
                      </div>
                    </FadeIn>
                  </div>
                </StaggerIn>
              </div>

              <div className="flex flex-col gap-8">
                {/* Events Timeline */}
                <div className="mt-8">
                  <FadeIn direction="right" delay={0.3}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="h-5 w-5 text-sky-600" />
                        <h3 className="font-semibold text-lg text-sky-800">Événements à venir</h3>
                      </div>
                      <EventsTimeline limit={3} />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="py-20 md:py-28 bg-white">
          {/* Content remains the same */}
          <div className="container">
            <div className="text-center mb-16">
              <FadeIn>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                  <CompassIcon className="w-4 h-4 mr-2" />
                  Nos services
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-sky-900">Ce que nous proposons</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Du vol découverte à la formation de futurs pilotes ou location d'avions, nous pouvons vous offrir
                  différents types de services correspondant à vos besoins.
                </p>
              </FadeIn>
            </div>
            <StaggerIn>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Service cards */}
                <HoverCard>
                  <TrainingCard
                    title="Formation au pilotage"
                    description=""
                    icon={<Plane className="h-6 w-6 text-white" />}
                    details={[
                      "Light aircraft pilot licence (LAPL)",
                      "License pilote privé avion (PPL)",
                      "Brevet de pilote (ULM)",
                    ]}
                    modalContent={
                      <>
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center">
                              <Plane className="h-5 w-5 text-white" />
                            </div>
                            <DialogTitle className="text-xl font-semibold text-sky-900">
                              Formation au pilotage
                            </DialogTitle>
                          </div>
                          <DialogDescription className="text-base text-sky-800 leading-relaxed">
                            Coucou, ici description plus detaillée.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-4 space-y-3 text-sm text-sky-700">
                          <p>🎓 10+ ppl par an</p>
                          <p>🛩️ Avions equipés a jours</p>
                          <p>📍 Aeroclub tres bien situé</p>
                        </div>
                      </>
                    }
                  />
                </HoverCard>

                <HoverCard>
                  <TrainingCard
                    title="Vols découvertes"
                    description=""
                    icon={<CompassIcon className="h-6 w-6 text-white" />}
                    details={["Baptêmes de l'air", "Vols d'initiation au pilotage", "Vols a frais partagés"]}
                    modalContent={
                      <>
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center">
                              <CompassIcon className="h-5 w-5 text-white" />
                            </div>
                            <DialogTitle className="text-xl font-semibold text-sky-900">Vols découvertes</DialogTitle>
                          </div>
                          <DialogDescription className="text-base text-sky-800 leading-relaxed">
                            Coucou, ici description plus detaillée.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-4 space-y-3 text-sm text-sky-700">
                          <p>🎓 10+ ppl par an</p>
                          <p>🛩️ Avions equipés a jours</p>
                          <p>📍 Aeroclub tres bien situé</p>
                        </div>
                      </>
                    }
                  />
                </HoverCard>

                <HoverCard>
                  <TrainingCard
                    title="Location d'avions"
                    description=""
                    icon={<ReceiptCentIcon className="h-6 w-6 text-white" />}
                    details={["Location à l'heure ou à la journée", "Large choix d'appareils", "Pack murissement"]}
                    modalContent={
                      <>
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center">
                              <ReceiptCentIcon className="h-5 w-5 text-white" />
                            </div>
                            <DialogTitle className="text-xl font-semibold text-sky-900">Location d'avions</DialogTitle>
                          </div>
                          <DialogDescription className="text-base text-sky-800 leading-relaxed">
                            Coucou, ici description plus detaillée.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-4 space-y-3 text-sm text-sky-700">
                          <p>🎓 10+ ppl par an</p>
                          <p>🛩️ Avions equipés a jours</p>
                          <p>📍 Aeroclub tres bien situé</p>
                        </div>
                      </>
                    }
                  />
                </HoverCard>
              </div>
            </StaggerIn>
          </div>
        </section>

        {/* Fleet section */}
        <section id="fleet" className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50">
          {/* Content remains the same */}
          <div className="container">
            <div className="text-center mb-16">
              <FadeIn>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                  <Plane className="w-4 h-4 mr-2" />
                  Notre flotte
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-sky-900">Nos avions</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nous disposons d'une flotte diversifiée d'avions pour répondre à tous vos besoins, que ce soit pour
                  l'apprentissage, les vols de loisirs ou les voyages.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <Tabs defaultValue="training" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-3 bg-sky-100/50 p-1 rounded-xl">
                  <TabsTrigger
                    value="training"
                    className="data-[state=active]:bg-sky-600 data-[state=active]:text-white text-xs sm:text-sm rounded-lg transition-all"
                  >
                    Avions école
                  </TabsTrigger>
                  <TabsTrigger
                    value="touring"
                    className="data-[state=active]:bg-sky-600 data-[state=active]:text-white text-xs sm:text-sm rounded-lg transition-all"
                  >
                    Avion voyage
                  </TabsTrigger>
                  <TabsTrigger
                    value="advanced"
                    className="data-[state=active]:bg-sky-600 data-[state=active]:text-white text-xs sm:text-sm rounded-lg transition-all"
                  >
                    Ulm
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="training">
                  <StaggerIn>
                    <div className="grid gap-8 md:grid-cols-2">
                      <HoverCard>
                        <AircraftCard
                          name="Evektor Sportstar F-HDLV"
                          description="Avion biplace de fabrication tchèque, récent, très moderne équipé d'écrans numériques (EFIS) et utilisé pour l'école et les voyages."
                          images={evektorImages}
                          badge="École"
                          seats={2}
                          flightRules="VFR"
                          price="111€/h"
                          speed="170 km/h"
                        />
                      </HoverCard>

                      <HoverCard>
                        <AircraftCard
                          name="Evektor Sportstar F-HDLV"
                          description="Avion biplace de fabrication tchèque, récent, très moderne équipé d'écrans numériques (EFIS) et utilisé pour l'école et les voyages."
                          images={evektorImages}
                          badge="École"
                          seats={2}
                          flightRules="VFR"
                          price="111€/h"
                          speed="170 km/h"
                        />
                      </HoverCard>
                    </div>
                  </StaggerIn>
                </TabsContent>

                <TabsContent value="touring">
                  <StaggerIn>
                    <div className="grid gap-8 md:grid-cols-2">
                      <HoverCard>
                        <AircraftCard
                          name="Robin DR400 180cv"
                          description="Avion quadriplace de voyage, de fabrication française. Distance franchissable de près de 1000 km à une vitesse de croisière de 240 km/h."
                          images={robinDR180Images}
                          badge="Voyage"
                          seats={4}
                          flightRules="VFR/IFR"
                          price="180€/h"
                          speed="240 km/h"
                        />
                      </HoverCard>

                      <HoverCard>
                        <AircraftCard
                          name="Robin DR400 160cv"
                          description="Avion quadriplace de propriétaire mis à disposition des membres du club qualifiés pour les sorties et les animations."
                          images={robinDR160Images}
                          badge="Voyage"
                          seats={4}
                          flightRules="VFR/IFR"
                          price="180€/h"
                          speed="220 km/h"
                        />
                      </HoverCard>
                    </div>
                  </StaggerIn>
                </TabsContent>

                <TabsContent value="advanced">
                  <StaggerIn>
                    <div className="grid gap-8 md:grid-cols-2">
                      <HoverCard>
                        <AircraftCard
                          name="Super guepard 100CV"
                          description="Avion ultra léger motorisé (ULM) biplace de fabrication française, bien équipé pour l'école et les voyages. Distance franchissable de 750 km à 180 km/h."
                          images={ulmImages}
                          badge="ULM"
                          seats={2}
                          flightRules="VFR"
                          price="90€/h"
                          speed="180 km/h"
                        />
                      </HoverCard>
                    </div>
                  </StaggerIn>
                </TabsContent>
              </Tabs>
            </FadeIn>
          </div>
        </section>

        {/* Events section */}
        <section id="events" className="py-20 md:py-28 bg-white">
          {/* Content remains the same */}
          <div className="container">
            <div className="text-center mb-16">
              <FadeIn>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                  <BookAIcon className="w-4 h-4 mr-2" />
                  Nos Formations
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-sky-900">Devenez pilote</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nous proposons des formations de qualité pour tous les niveaux, que vous soyez débutant ou pilote
                  expérimenté.
                </p>
              </FadeIn>
            </div>

            <StaggerIn>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <HoverCard>
                  <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-2 text-sky-600 mb-3">
                          <BookAIcon className="h-5 w-5" />
                          <span className="text-sm font-medium">~ 1 an</span>
                        </div>
                        <CardTitle className="text-xl text-sky-800">Brevet pilote ULM multiaxes</CardTitle>
                        <CardDescription className="mt-2"></CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Schématiquement, l'ULM multiaxes est un petit aéronef dont le poids et la puissance sont
                            limités et qui permet l'emport d'une à deux personnes. La pratique du pilotage d'un ULM
                            nécessite, outre la licence fédérale, un certificat médical de non contre-indication délivré
                            par un médecin généraliste.
                          </p>
                          <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">Formation théorique et pratique</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">Brevet acquis à vie</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">Certificat médical simple</span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-auto pt-4 border-t border-sky-100">
                          <PricingInfo flightPrice="81 euros/h" instructorPrice="24 euros/h instr" />
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">En savoir plus</Button>
                      </CardFooter>
                    </div>
                  </Card>
                </HoverCard>

                <HoverCard>
                  <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-2 text-sky-600 mb-3">
                          <BookAIcon className="h-5 w-5" />
                          <span className="text-sm font-medium">~ 1 an</span>
                        </div>
                        <CardTitle className="text-xl text-sky-800">LAPL (light aircraft pilot licence)</CardTitle>
                        <CardDescription className="mt-2"></CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            La LAPL permet d'accéder au pilotage de la plupart des avions d'aéroclub. Cette licence est
                            européenne, valable uniquement au sein de l'espace Schengen. Le pilote LAPL devra avoir
                            réalisé 10 heures de vol solo après obtention de sa licence pour être autorisé à emmener des
                            passagers.
                          </p>
                          <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">Licence européenne</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">30 heures de vol minimum</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">Examen théorique et pratique</span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-auto pt-4 border-t border-sky-100">
                          <PricingInfo flightPrice="81 euros/h" instructorPrice="24 euros/h instr" />
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">En savoir plus</Button>
                      </CardFooter>
                    </div>
                  </Card>
                </HoverCard>

                <HoverCard>
                  <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-2 text-sky-600 mb-3">
                          <BookAIcon className="h-5 w-5" />
                          <span className="text-sm font-medium">~ 1 an</span>
                        </div>
                        <CardTitle className="text-xl text-sky-800">PPL (private pilot licence)</CardTitle>
                        <CardDescription className="mt-2"></CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            La PPL, outre sa reconnaissance internationale, est une des portes d'entrée pour poursuivre
                            une formation de pilote professionnel (pilote de ligne, vol aux instruments, avions
                            multi-moteurs, avions de plus de cinq places,…).
                          </p>
                          <ul className="space-y-2 mb-6">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">Reconnaissance internationale</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">45 heures de vol minimum</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                Possibilité d'évolution professionnelle
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-auto pt-4 border-t border-sky-100">
                          <PricingInfo flightPrice="81 euros/h" instructorPrice="24 euros/h instr" />
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">En savoir plus</Button>
                      </CardFooter>
                    </div>
                  </Card>
                </HoverCard>
              </div>
            </StaggerIn>
          </div>
        </section>

        <section id="webcam" className="py-20 md:py-28 bg-sky-50">
      <div className="container">
        <div className="text-center mb-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-sky-900">Notre Webcam en direct</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez en temps réel les conditions météorologiques et l'ambiance de notre aérodrome !
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Webcam Feed Section (Left Side) */}
          <div className="lg:w-1/2">
            <FadeIn delay={0.1}>
              <WebcamFeed streamUrl="https://www.youtube.com/watch?v=t0J6D3XAVh8"  isYouTube/>
            </FadeIn>
          </div>

          {/* Weather Forecast Section (Right Side) */}
          <div className="lg:w-1/2">
            <div className="mt-16 lg:mt-0">
              <WeatherForecast latitude={43.310362} longitude={1.921527} />
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Contact section */}
        <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-white">
          {/* Content remains the same */}
          <div className="container">
            <div className="text-center mb-16">
              <FadeIn>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-sky-900">Nous contacter</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Vous avez des questions? Contactez nous, nous serons ravis de vous aider.
                </p>
              </FadeIn>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <FadeIn direction="left" delay={0.3}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-sky-800 mb-2">Nous situer</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Aeroclub Jean Doudies
                          <br />
                          1661 route du Mas Ste Puelles
                          <br />
                          11400 Castelnaudary
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-sky-800 mb-2">Telephone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+33468231050" className="hover:text-sky-600 transition-colors">
                            04.68.23.10.50
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-sky-800 mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:ac.jd@freesbee.fr" className="hover:text-sky-600 transition-colors">
                            ac.jd@freesbee.fr
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-sky-800 mb-2">Horaires</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Lundi - Vendredi: 8:00 AM - 6:00 PM
                          <br />
                          Samedi: 9:00 AM - 5:00 PM
                          <br />
                          Dimanche: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-medium text-lg text-sky-800 mb-4">Suivez-nous</h3>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-200 transition-colors"
                        >
                          <Facebook className="h-5 w-5 text-sky-600" />
                          <span className="sr-only">Facebook</span>
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-200 transition-colors"
                        >
                          <Instagram className="h-5 w-5 text-sky-600" />
                          <span className="sr-only">Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                  <h3 className="text-xl font-semibold mb-6 text-sky-800">Envoyez nous un message</h3>
                  <ContactFormEnhanced />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactBar />
      <ImprovedPriceButton />
      <ImprovedPriceButton />
    </div>
  )
}
