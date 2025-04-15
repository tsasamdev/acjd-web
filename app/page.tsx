import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  ChevronRight,
  Clock,
  CloudSun,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Plane,
  Shield,
  Twitter,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="h-6 w-6 rotate-45 text-sky-600" />
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
           
        
          </div>
        </div>
      </header>
      <main className="flex-1">
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Apprendre à piloter...
              </h1>
              <p className="text-lg md:text-xl">
                Ce n'est pas qu'un rêve d'enfant 
              </p>
              
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-sky-pattern">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">A propos du club</h2>
                <p className="text-muted-foreground mb-6">
                L’aéroclub est implanté sur le domaine public de l’aérodrome de Castelnaudary Villeneuve et dispose d’un hangar pouvant abriter 5 aéronefs, d’une tour de contrôle abritant le bureau des instructeurs et un simulateur de vol, d’un grand clubhouse ou se passent les réunions et animations du club, et d’une salle de cours dédiée aux élèves ULM.
                </p>
                <p className="text-muted-foreground mb-6">
                Forte d’une soixantaine de membres actifs, elle est dirigée par un Comité de direction élu en assemblée générale et qui délègue la gestion courante au bureau directeur (Président, Trésorier, secrétaire). Tous les membres assurant le bon fonctionnement de l’aéroclub (dirigeants, instructeurs, responsables divers postes…) sont bénévoles.
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

        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Nos services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
              Du vol découverte à la formation de futurs pilotes ou location d'avions, nous pouvons vous offrir différents types de services correspondant à vos besoins.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Formation au pilotage</CardTitle>
                  <CardDescription>
                    Comprehensive training programs for all levels, from beginners to advanced pilots.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Light aircraft pilot licence (LAPL)
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      License pilote privé avion (PPL)
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Brevet de pilote (ULM)
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Forfait initiation
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                  >
                    En savoir plus
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Vols découverte</CardTitle>
                  <CardDescription>Rent our well-maintained aircraft for personal or training flights.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Hourly and daily rental options
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Discounted rates for members
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Online booking system
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Flexible scheduling
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                  >
                    En savoir plus
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Location d'avion</CardTitle>
                  <CardDescription>Join our community and enjoy exclusive benefits and events.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Discounted aircraft rental rates
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Access to club facilities
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Monthly social events
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                      Flying competitions and trips
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                  >
                    Tarifs
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="fleet" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Notre flotte</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous avons plusieurs types d'avions a disposition.
              </p>
            </div>

            <Tabs defaultValue="training" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto mb-8 md:grid-cols-3 bg-sky-100">
                <TabsTrigger value="training" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                  Avions école
                </TabsTrigger>
                <TabsTrigger value="touring" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                  Avion voyage
                </TabsTrigger>
                <TabsTrigger value="advanced" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                  Ulm
                </TabsTrigger>
              </TabsList>
              <TabsContent value="training">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  <Card className="overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/evss.jpg?height=400&width=600"
                        alt="Cessna 152"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Evektor Sportstar F-HDLV</CardTitle>
                      <CardDescription>Avion biplace  de fabrication 

tchèque, récent, très moderne équipé d'écrans numériques (EFIS)et utilisé pour l’école et les voyages. Une distance franchissable de 900 km à une vitesse de croisière de 170 km/h.


</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>111 euros/h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <span>170 kmh</span>
                        </div>
                      </div>
                    </CardContent>
                 
                  </Card>

                  <Card className="overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/evss.jpg?height=400&width=600"
                        alt="Cessna 152"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Evektor Sportstar F-HDLV</CardTitle>
                      <CardDescription>Avion biplace  de fabrication 

tchèque, récent, très moderne équipé d'écrans numériques (EFIS)et utilisé pour l’école et les voyages. Une distance franchissable de 900 km à une vitesse de croisière de 170 km/h.


</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>111 euros/h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <span>170 kmh</span>
                        </div>
                      </div>
                    </CardContent>
                   
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="touring">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  <Card className="overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/dr180.png?height=400&width=600"
                        alt="Cessna 182"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Robin DR400 180cv</CardTitle>
                      <CardDescription>Avion quadriplace de voyage,  de fabrication française, Une distance franchissable de près de 1000 km à une vitesse de croisière de 240 km/h.</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>180 euros/hour</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <span>240 kmh</span>
                        </div>
                      </div>
                    </CardContent>
                  
                  </Card>

                  <Card className="overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/dr160.webp?height=400&width=600"
                        alt="Piper Arrow"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Robin DR400 160cv</CardTitle>
                      <CardDescription>Avion quadriplace de propriétaire mis à disposition des membres du club qualifiés pour les sorties et les animations.</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>180 euros/h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <span>155 knots</span>
                        </div>
                      </div>
                    </CardContent>
                    
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  <Card className="overflow-hidden border-sky-100 hover:border-sky-200 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent z-10"></div>
                      <Image
                        src="/ulm.jpg?height=400&width=600"
                        alt="Cirrus SR22"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Super guepard 100CV</CardTitle>
                      <CardDescription>Avion ultra léger motorisé (ULM) biplace de fabrication française, bien équipé pour l’école et les voyages. Une distance franchissable de 750 km à une vitesse de croisière de 180 km/h.</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>90 euros/h</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <span>180 knots</span>
                        </div>
                      </div>
                    </CardContent>
                   
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="events" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Formations</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-azure-600 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">May 15, 2025</span>
                  </div>
                  <CardTitle>BREVET DE PILOTE ULM MULTIAXES</CardTitle>
                  <CardDescription>
                   
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                  Schématiquement, l’ULM multiaxes est un petit aéronef dont le poids et la puissance sont limités et qui permet l’emport d’une à deux personnes.

 

La pratique du pilotage d’un ULM nécessite, outre la licence fédérale, un certificat médical de non contre-indication délivré par un médecin généraliste.


La formation associe une partie théorique et une partie pratique avec un instructeur de l’aéroclub en double commandes. 


Le brevet de pilote d’ULM est acquis à vie et n’est pas soumis à une obligation légale d’entraî-nement régulier. Celui-ci est laissé à l’appréciation du pilote.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>81 euros/h</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>24 euros/h instructeur</span>
                  </div>
                </CardContent>
                
              </Card>

              <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-azure-600 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">May 15, 2025</span>
                  </div>
                  <CardTitle>LAPL (light aircraft pilot licence)</CardTitle>
                  <CardDescription>
                   
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                  La LAPL permet d’accéder au pilotage de la plupart des avions d’aéroclub. Cette licence est européenne, valable uniquement au sein de l’espace Schengen. Le pilote LAPL devra avoir réalisé 10 heures de vol solo après obtention de sa licence pour être autorisé à emmener des passagers. 
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>81 euros/h</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>24 euros/h instructeur</span>
                  </div>
                </CardContent>
                
              </Card>

              <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-azure-600 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">May 15, 2025</span>
                  </div>
                  <CardTitle>PPL (private pilot licence)</CardTitle>
                  <CardDescription>
                   
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                  La PPL, outre sa reconnaissance internationale, est une des portes d'entrée pour poursuivre une formation de pilote professionnel (pilote de ligne, vol aux instruments, avions multi-moteurs, avions de plus de cinq places,…).
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>81 euros/h</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>24 euros/h instructeur</span>
                  </div>
                </CardContent>
                
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

              <div className="bg-gradient-to-b from-white to-sky-50 p-6 rounded-lg shadow-sm border border-sky-100">
                <h3 className="text-xl font-semibold mb-4">Envoyez nous un message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sujet du message"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Votre message"
                    />
                  </div>
                  <Button className="w-full bg-azure-600 hover:bg-azure-700">Envoyer le message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-navy-950 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-6 w-6 rotate-45 text-azure-400" />
                <span className="text-xl font-bold">Aeroclub Jean Doudies</span>
              </div>
              <p className="text-sky-200 mb-4">
              Apprendre à piloter...  Ce n'est pas qu'un rêve d'enfant 
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sky-300 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sky-300 hover:text-white transition-colors">
                    A propos
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sky-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#fleet" className="text-sky-300 hover:text-white transition-colors">
                    Notre flotte
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-sky-300 hover:text-white transition-colors">
                    Formations
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sky-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
               
              </ul>
            </div>

            
          </div>

          <div className="border-t border-navy-800 mt-8 pt-8 text-center text-sky-300">
            <p>© {new Date().getFullYear()} Aeroclub Jean Doudies.Tout droits reservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
