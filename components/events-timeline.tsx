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
    title: "Aub'air'ge Espagnole",
    date: "2025-08-01",
    formattedDate: "01 Aout 2025",
    time: "10:00 - 17:00",
    location: "Aérodrome de Castelnaudary",
    description: "",
    category: "social",
    image: "/placeholder.svg?height=400&width=600&text=Journée+Portes+Ouvertes",
    participants: 45,
  },
  {
    id: "event-2",
    title: "Cassoulet airport 2025",
    date: "2025-08-23",
    formattedDate: "23 Aout 2025",
    time: "10:00 - 17:00",
    location: "Aérodrome de Castelnaudary",
    description: "",
    category: "social",
    image: "/placeholder.svg?height=400&width=600&text=Journée+Portes+Ouvertes",
    participants: 45,
  },
  {
    id: "event-3",
    title: "Forum des associations",
    date: "2025-09-06",
    formattedDate: "06 Septembre 2025",
    time: "10:00 - 17:00",
    location: "Aérodrome de Castelnaudary",
    description: "",
    category: "social",
    image: "/placeholder.svg?height=400&width=600&text=Journée+Portes+Ouvertes",
    participants: 45,
  },
  {
    id: "event-4",
    title: "Journée des associations",
    date: "2025-09-13",
    formattedDate: "13 Septembre 2025",
    time: "10:00 - 17:00",
    location: "Aérodrome de Castelnaudary",
    description: "",
    category: "social",
    image: "/placeholder.svg?height=400&width=600&text=Journée+Portes+Ouvertes",
    participants: 45,
  },
  {
    id: "event-5",
    title: "Choucroute party + arrosage du LT ",
    date: "2025-10-25",
    formattedDate: "25 Octobre 2025",
    time: "12:00 - 20:30",
    location: "Clubhouse",
    description:
      "",
    category: "meeting",
    participants: 60,
  }
]

interface EventsTimelineProps {
  limit?: number
}

export function EventsTimeline({ limit = 5 }: EventsTimelineProps) {
  // Remove modal state and handler
  // const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  // const [isModalOpen, setIsModalOpen] = useState(false)

  // Sort events by date ascending, then limit
  const displayedEvents = [...events]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    

  // Remove handleEventClick
  // const handleEventClick = (event: Event) => {
  //   setSelectedEvent(event)
  //   setIsModalOpen(true)
  // }

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
              className="sm:ml-10 bg-white rounded-lg shadow-sm border border-sky-100 overflow-hidden hover:shadow-md transition-shadow"
              // onClick removed
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

      {/* Event details modal removed */}
    </div>
  )
}
