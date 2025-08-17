"use client";

import { useState, useEffect } from "react"
import { Calendar, Users, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Plane } from 'lucide-react';
import { supabase } from "@/lib/supabaseClient";


// Define the event type based on Supabase schema
interface Event {
  id: string;
  title: string;
  date: string; // ISO string
  from_hour?: string | null;
  to_hour?: string | null;
  location: string;
  description: string;
  category: "formation" | "competition" | "social" | "meeting";
  image?: string | null;
  participants?: number | null;
}

interface EventsTimelineProps {
  limit?: number
}

export function EventsTimeline({ limit = 10 }: EventsTimelineProps) {
  // Remove modal state and handler
  // const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  // const [isModalOpen, setIsModalOpen] = useState(false)


  // State for events, loading, error
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      // Only fetch events where date >= today
      const today = new Date().toISOString().slice(0, 10);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('date', today)
        .order('date', { ascending: true });
      if (error) {
        setError("Erreur lors du chargement des événements.");
        setEvents([]);
      } else {
        setEvents(data as Event[]);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);
  const displayedEvents = events.slice(0, limit);
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

      {loading ? (
        <div className="text-center py-8 text-sky-700">Chargement des événements...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-600">{error}</div>
      ) : (
        <div className="space-y-4">
          {displayedEvents.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Aucun événement à venir.</div>
          ) : (
            displayedEvents.map((event, index) => {
              // Format date (e.g. 2025-08-01 -> 01 Août 2025)
              const dateObj = new Date(event.date);
              const formattedDate = dateObj.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
              // Format time (from_hour - to_hour) to HH:MM
              function formatHour(h?: string | null) {
                if (!h) return "";
                // Accepts 'HH:MM' or 'HH:MM:SS', returns 'HH:MM'
                return h.split(":").slice(0,2).join(":");
              }
              let time = "";
              if (event.from_hour && event.to_hour) {
                time = `${formatHour(event.from_hour)} - ${formatHour(event.to_hour)}`;
              } else if (event.from_hour) {
                time = formatHour(event.from_hour);
              } else {
                time = "";
              }
              return (
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
                  <div className="sm:ml-10 bg-white rounded-lg shadow-sm border border-sky-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row">
                      {/* Date column - visible on sm and above */}
                      <div className="hidden sm:flex flex-col items-center justify-center p-3 bg-sky-50 text-sky-800 font-medium w-24 shrink-0">
                        <Calendar className="h-4 w-4 mb-1" />
                        <time dateTime={event.date} className="text-center text-xs">
                          {formattedDate}
                        </time>
                      </div>

                      {/* Content */}
                      <div className="p-3 flex-grow">
                        {/* Mobile date - visible only on xs */}
                        <div className="flex items-center text-sky-700 mb-1 sm:hidden">
                          <Calendar className="h-3 w-3 mr-1" />
                          <time dateTime={event.date} className="text-xs">
                            {formattedDate}
                          </time>
                        </div>

                        <div className="flex items-start justify-between">
                          <h3 className="font-medium text-base text-sky-900 mb-1">{event.title}</h3>
                          {/*
                          <Badge className={`${getCategoryColor(event.category)} ml-2 text-xs`}>
                            {getCategoryLabel(event.category)}
                          </Badge>
                          */}
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-sky-600" />
                            <span>{time}</span>
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
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
