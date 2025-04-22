"use client"

import { useState } from "react"
import { Calendar, Users, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Plane } from 'lucide-react';

// Define the event type
interface Event {
  id: string
  title: string
  date: string
  formattedDate: string
  time: string
  location: string
  description: string
  category: "formation" | "competition" | "social" | "meeting"
  image?: string
  participants?: number
}

// Sample events data
const events: Event[] = [
  {
    id: "event-1",
    title: "Journée Portes Ouvertes",
    date: "2025-11-15",
    formattedDate: "15 Novembre 2025",
    time: "10:00 - 17:00",
    location: "Aérodrome de Castelnaudary",
    description:
      "Venez découvrir l'aéroclub et ses activités lors de notre journée portes ouvertes. Au programme : présentation des avions, démonstrations de vol, baptêmes de l'air à tarif réduit, et rencontre avec nos instructeurs. Une occasion unique de découvrir le monde de l'aviation légère et de poser toutes vos questions sur la formation de pilote.",
    category: "social",
    image: "/placeholder.svg?height=400&width=600&text=Journée+Portes+Ouvertes",
    participants: 45,
  },
  {
    id: "event-2",
    title: "Formation Météo pour Pilotes",
    date: "2025-12-05",
    formattedDate: "5 Décembre 2025",
    time: "14:00 - 17:00",
    location: "Salle de cours de l'aéroclub",
    description:
      "Session de formation sur l'interprétation des données météorologiques pour les pilotes. Cette formation est ouverte à tous les membres du club et couvre les bases de la météorologie aéronautique, la lecture des METAR/TAF, et l'utilisation des outils de prévision météo pour la préparation des vols.",
    category: "formation",
    participants: 12,
  },
  {
    id: "event-3",
    title: "Rallye Aérien Régional",
    date: "2025-01-20",
    formattedDate: "20 Janvier 2025",
    time: "09:00 - 18:00",
    location: "Départ de Castelnaudary",
    description:
      "Participez à notre rallye aérien régional ! Un parcours de navigation passionnant à travers la région Occitanie. Ouvert aux pilotes brevetés membres du club. Briefing la veille à 18h. Inscription obligatoire avant le 10 janvier.",
    category: "competition",
    image: "/placeholder.svg?height=400&width=600&text=Rallye+Aérien",
    participants: 8,
  },
  {
    id: "event-4",
    title: "Assemblée Générale Annuelle",
    date: "2024-02-10",
    formattedDate: "10 Février 2024",
    time: "18:30 - 20:30",
    location: "Clubhouse",
    description:
      "Assemblée générale annuelle de l'aéroclub. Présentation du bilan de l'année écoulée, des projets pour l'année à venir, et élection du nouveau bureau. La réunion sera suivie d'un apéritif convivial. Présence de tous les membres souhaitée.",
    category: "meeting",
    participants: 60,
  },
  {
    id: "event-5",
    title: "Week-end Maintenance Participative",
    date: "2024-03-15",
    formattedDate: "15-16 Mars 2024",
    time: "09:00 - 17:00",
    location: "Hangar de l'aéroclub",
    description:
      "Week-end dédié à la maintenance participative des avions du club. Venez aider à l'entretien de notre flotte sous la supervision de nos mécaniciens. Aucune compétence particulière requise, juste de la bonne volonté ! Repas offert aux participants.",
    category: "social",
    participants: 15,
  },
]

interface EventsTimelineProps {
  limit?: number
}

export function EventsTimeline({ limit = 3 }: EventsTimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Limit the number of events to display
  const displayedEvents = events.slice(0, limit)

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  // Get category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "formation":
        return "bg-blue-100 text-blue-800"
      case "competition":
        return "bg-orange-100 text-orange-800"
      case "social":
        return "bg-green-100 text-green-800"
      case "meeting":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Get category label
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "formation":
        return "Formation"
      case "competition":
        return "Compétition"
      case "social":
        return "Événement social"
      case "meeting":
        return "Réunion"
      default:
        return category
    }
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sky-200 hidden sm:block"></div>

      {/* Events */}
      <div className="space-y-4">
        {displayedEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            
            {/* Timeline icon - visible on sm and above */}
            <Plane className="absolute left-4 top-6 w-4 h-4 text-sky-500 transform -translate-x-1/2 hidden sm:block" />

            {/* Event card - more compact */}
            <div
              className="sm:ml-10 bg-white rounded-lg shadow-sm border border-sky-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Date column - visible on sm and above */}
                <div className="hidden sm:flex flex-col items-center justify-center p-3 bg-sky-50 text-sky-800 font-medium w-24 shrink-0">
                  <Calendar className="h-4 w-4 mb-1" />
                  <time dateTime={event.date} className="text-center text-xs">
                    {event.formattedDate}
                  </time>
                </div>

                {/* Content */}
                <div className="p-3 flex-grow">
                  {/* Mobile date - visible only on xs */}
                  <div className="flex items-center text-sky-700 mb-1 sm:hidden">
                    <Calendar className="h-3 w-3 mr-1" />
                    <time dateTime={event.date} className="text-xs">
                      {event.formattedDate}
                    </time>
                  </div>

                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-base text-sky-900 mb-1">{event.title}</h3>
                    <Badge className={`${getCategoryColor(event.category)} ml-2 text-xs`}>
                      {getCategoryLabel(event.category)}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-sky-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-sky-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-1 mb-1">{event.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Event details modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl font-semibold text-sky-900">{selectedEvent.title}</DialogTitle>
                  <Badge className={getCategoryColor(selectedEvent.category)}>
                    {getCategoryLabel(selectedEvent.category)}
                  </Badge>
                </div>
              </DialogHeader>

              {selectedEvent.image && (
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedEvent.image || "/placeholder.svg"}
                    alt={selectedEvent.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-sky-600" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{selectedEvent.formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-sky-600" />
                  <div>
                    <p className="text-sm text-gray-500">Horaire</p>
                    <p className="font-medium">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-sky-600" />
                  <div>
                    <p className="text-sm text-gray-500">Lieu</p>
                    <p className="font-medium">{selectedEvent.location}</p>
                  </div>
                </div>

                {selectedEvent.participants && (
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-sky-600" />
                    <div>
                      <p className="text-sm text-gray-500">Participants</p>
                      <p className="font-medium">{selectedEvent.participants} inscrits</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-sky-800 mb-2">Description</h4>
                <p className="text-gray-600">{selectedEvent.description}</p>
              </div>

             
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
