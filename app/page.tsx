import Image from "next/image"
import Link from "next/link"
import {
  BookAIcon,
  Calendar,
  ChevronRight,
  Clock,
  CloudSun,
  EuroIcon,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Plane,
  Shield,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileMenu } from "@/components/mobile-menu"
import { PricingInfo } from "@/components/pricing-info"
import { ContactFormEnhanced } from "@/components/contact-form-enhanced"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import TrainingCard from "@/components/training-card-reusable"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold">Aeroclub Jean Doudies</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Accueil
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              A propos
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#fleet"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Flotte
            </Link>
            <Link
              href="#events"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Formations
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative bg-sky-to-navy-gradient">
          <div className="absolute inset-0 z-0">
            <Image
              src="/aerodrome.jpg?height=800&width=1920"
              alt="Airplane flying over mountains"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-4 text-white max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Apprendre à piloter...</h1>
              <p className="text-lg md:text-xl">Ce n'est pas qu'un rêve d'enfant</p>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-16 md:py-24 bg-sky-pattern">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">A propos du club</h2>
                <p className="text-muted-foreground mb-6">
                  L'aéroclub est implanté sur le domaine public de l'aérodrome de Castelnaudary Villeneuve et dispose
                  d'un hangar pouvant abriter 5 aéronefs, d'une tour de contrôle abritant le bureau des instructeurs et
                  un simulateur de vol, d'un grand clubhouse ou se passent les réunions et animations du club, et d'une
                  salle de cours dédiée aux élèves ULM.
                </p>
                <p className="text-muted-foreground mb-6">
                  Forte d'une soixantaine de membres actifs, elle est dirigée par un Comité de direction élu en
                  assemblée générale et qui délègue la gestion courante au bureau directeur (Président, Trésorier,
                  secrétaire). Tous les membres assurant le bon fonctionnement de l'aéroclub (dirigeants, instructeurs,
                  responsables divers postes…) sont bénévoles.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 mt-8">
                  <div className="flex gap-2 items-center">
                    <Users className="h-8 w-8 text-sky-600" />
                    <div>
                      <p className="font-bold text-2xl">60+</p>
                      <p className="text-muted-foreground">Membres actifs</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Plane className="h-8 w-8 text-sky-600" />
                    <div>
                      <p className="font-bold text-2xl">5</p>
                      <p className="text-muted-foreground">Avions</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Shield className="h-8 w-8 text-sky-600" />
                    <div>
                      <p className="font-bold text-2xl">50+</p>
                      <p className="text-muted-foreground">D'années d'experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/accueil.png?height=800&width=1200"
                  alt="Aeroclub members and aircraft"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Nos services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Du vol découverte à la formation de futurs pilotes ou location d'avions, nous pouvons vous offrir
                différents types de services correspondant à vos besoins.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service cards */}
            
              <TrainingCard
                title="Formation au pilotage"
                description="Comprehensive training programs for all levels, from beginners to advanced pilots."
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
                        <DialogTitle className="text-lg font-semibold text-sky-900">
                          Formation au pilotage
                        </DialogTitle>
                      </div>
                      <DialogDescription className="text-sm text-sky-800">
                        Explore detailed insights into our aviation training. Tailored programs, certified instructors, and real flight simulations.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4 space-y-3 text-sm text-sky-700">
                      <p>🎓 100+ certified pilots trained</p>
                      <p>🛩️ State-of-the-art simulators</p>
                      <p>📍 Courses available in multiple locations</p>
                    </div>
                  </>
                }
              />

              {/* Other service cards */}
              {/* ... */}
              <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center mb-4">
                      <CloudSun className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Vols découvertes</CardTitle>
                    <CardDescription>
                      Rent our well-maintained aircraft for personal or training flights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                        Baptêmes de l'air
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                        Vols d'initiation au pilotage
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                        Vols a frais partagés
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      En savoir plus
                    </Button>
                  </CardFooter>
                </div>
              </Card>

              <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Location d'avions</CardTitle>
                    <CardDescription>
                      
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                        Location à l'heure ou à la journée
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                        Large choix d'appareils
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      En savoir plus
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Fleet section */}
        <section id="fleet" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
          {/* Fleet content */}
          {/* ... */}
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Notre flotte</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous disposons d'une flotte diversifiée d'avions pour répondre à tous vos besoins, que ce soit pour
                l'apprentissage, les vols de loisirs ou les voyages.
              </p>
            </div>

            <Tabs defaultValue="training" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-3 bg-sky-100">
                <TabsTrigger
                  value="training"
                  className="data-[state=active]:bg-sky-600 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  Avions école
                </TabsTrigger>
                <TabsTrigger
                  value="touring"
                  className="data-[state=active]:bg-sky-600 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  Avion voyage
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="data-[state=active]:bg-sky-600 data-[state=active]:text-white text-xs sm:text-sm"
                >
                  Ulm
                </TabsTrigger>
              </TabsList>

              <TabsContent value="training">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="flex flex-col h-full overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/evss.png"
                        alt="Cessna 152"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg sm:text-xl">Evektor Sportstar F-HDLV</CardTitle>
                        <CardDescription className="text-sm">
                          Avion biplace de fabrication tchèque, récent, très moderne équipé d'écrans numériques (EFIS)
                          et utilisé pour l'école et les voyages.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>2 places</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CloudSun className="h-4 w-4 text-muted-foreground" />
                            <span>VFR</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <EuroIcon className="h-4 w-4 text-muted-foreground" />
                            <span>111/h</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Plane className="h-4 w-4 text-muted-foreground" />
                            <span>170 kmh</span>
                          </div>
                        </div>
                      </CardContent>
                    
                    </div>
                  </Card>

                  <Card className="flex flex-col h-full overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/evss.png"
                        alt="Cessna 152"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg sm:text-xl">Evektor Sportstar F-HDLV</CardTitle>
                        <CardDescription className="text-sm">
                          Avion biplace de fabrication tchèque, récent, très moderne équipé d'écrans numériques (EFIS)
                          et utilisé pour l'école et les voyages.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>2 places</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CloudSun className="h-4 w-4 text-muted-foreground" />
                            <span>VFR</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <EuroIcon className="h-4 w-4 text-muted-foreground" />
                            <span>111/h</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Plane className="h-4 w-4 text-muted-foreground" />
                            <span>170 kmh</span>
                          </div>
                        </div>
                      </CardContent>          
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="touring">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="flex flex-col h-full overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/dr180.png"
                        alt="Cessna 182"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg sm:text-xl">Robin DR400 180cv</CardTitle>
                        <CardDescription className="text-sm">
                          Avion quadriplace de voyage, de fabrication française. Distance franchissable de près de 1000
                          km à une vitesse de croisière de 240 km/h.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>4 places</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CloudSun className="h-4 w-4 text-muted-foreground" />
                            <span>VFR/IFR</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <EuroIcon className="h-4 w-4 text-muted-foreground" />
                            <span>180/h</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Plane className="h-4 w-4 text-muted-foreground" />
                            <span>240 kmh</span>
                          </div>
                        </div>
                      </CardContent>
                     
                    </div>
                  </Card>

                  <Card className="flex flex-col h-full overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/dr160.webp"
                        alt="Piper Arrow"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg sm:text-xl">Robin DR400 160cv</CardTitle>
                        <CardDescription className="text-sm">
                          Avion quadriplace de propriétaire mis à disposition des membres du club qualifiés pour les
                          sorties et les animations.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>4 places</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CloudSun className="h-4 w-4 text-muted-foreground" />
                            <span>VFR/IFR</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <EuroIcon className="h-4 w-4 text-muted-foreground" />
                            <span>180/h</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Plane className="h-4 w-4 text-muted-foreground" />
                            <span>220 kmh</span>
                          </div>
                        </div>
                      </CardContent>
                 
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="flex flex-col h-full overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/ulm.png"
                        alt="Cirrus SR22"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg sm:text-xl">Super guepard 100CV</CardTitle>
                        <CardDescription className="text-sm">
                          Avion ultra léger motorisé (ULM) biplace de fabrication française, bien équipé pour l'école et
                          les voyages. Distance franchissable de 750 km à 180 km/h.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-grow">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>2 places</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CloudSun className="h-4 w-4 text-muted-foreground" />
                            <span>VFR</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <EuroIcon className="h-4 w-4 text-muted-foreground" />
                            <span>90€/h</span>          
                          </div>
                          <div className="flex items-center gap-1">
                            <Plane className="h-4 w-4 text-muted-foreground" />
                            <span>180 kmh</span>
                          </div>
                        </div>
                      </CardContent>
                     
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Events section */}
        <section id="events" className="py-16 md:py-24">
          {/* Events content */}
          {/* ... */}
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Nos Formations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous proposons des formations de qualité pour tous les niveaux, que vous soyez débutant ou pilote
                expérimenté.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <div className="flex flex-col flex-grow">
                <CardHeader>
                    <div className="flex items-center gap-2 text-azure-600 mb-2">
                      <BookAIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">~ 1 an</span>
                    </div>
                    <CardTitle>Brevet pilote ULM multiaxes</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">
                        Schématiquement, l'ULM multiaxes est un petit aéronef dont le poids et la puissance sont limités
                        et qui permet l'emport d'une à deux personnes. La pratique du pilotage d'un ULM nécessite, outre
                        la licence fédérale, un certificat médical de non contre-indication délivré par un médecin
                        généraliste. La formation associe une partie théorique et une partie pratique avec un
                        instructeur de l'aéroclub en double commandes. Le brevet de pilote d'ULM est acquis à vie et
                        n'est pas soumis à une obligation légale d'entraî-nement régulier. Celui-ci est laissé à
                        l'appréciation du pilote.
                      </p>
                    </div>
                    <PricingInfo flightPrice="81 euros/h" instructorPrice="24 euros/h instr" />
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      En savoir plus
                    </Button>
                  </CardFooter>
                </div>
              </Card>

              <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-azure-600 mb-2">
                      <BookAIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">~ 1 an</span>
                    </div>
                    <CardTitle>LAPL (light aircraft pilot licence)</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">
                        La LAPL permet d'accéder au pilotage de la plupart des avions d'aéroclub. Cette licence est
                        européenne, valable uniquement au sein de l'espace Schengen. Le pilote LAPL devra avoir réalisé
                        10 heures de vol solo après obtention de sa licence pour être autorisé à emmener des passagers.
                      </p>
                    </div>
                    <PricingInfo flightPrice="81 euros/h" instructorPrice="24 euros/h instr" />
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      En savoir plus
                    </Button>
                  </CardFooter>
                </div>
              </Card>

              <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-azure-600 mb-2">
                      <BookAIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">~ 1 an</span>
                    </div>
                    <CardTitle>PPL (private pilot licence)</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">
                        La PPL, outre sa reconnaissance internationale, est une des portes d'entrée pour poursuivre une
                        formation de pilote professionnel (pilote de ligne, vol aux instruments, avions multi-moteurs,
                        avions de plus de cinq places,…).
                      </p>
                    </div>
                    <PricingInfo flightPrice="81/h" instructorPrice="24/h instr" />
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      En savoir plus
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </div>
          </div>
        </section>



        <section id="contact" className="py-16 md:py-24 bg-sky-50">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Nous contacter</h2>
                <p className="text-muted-foreground mb-8">
                  Vous avez des questions? Contactez nous, nous serons ravis de vous aider.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-sky-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Nous situer</h3>
                      <p className="text-muted-foreground">
                        Aeroclub Jean Doudies
                        <br />
                        1661 route du Mas Ste Puelles
                        <br />
                        11400 Castelnaudary
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-sky-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telephone</h3>
                      <p className="text-muted-foreground">04.68.23.10.50</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-sky-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">ac.jd@freesbee.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-sky-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi: 8:00 AM - 6:00 PM
                        <br />
                        Samedi: 9:00 AM - 5:00 PM
                        <br />
                        Dimanche: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button size="icon" variant="outline">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-sky-100">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Envoyez nous un message</h3>
                <ContactFormEnhanced />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 text-white py-12">
        {/* Footer content */}
        {/* ... */}
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aeroclub Jean Doudies. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
