"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageCarousel } from "@/components/image-carousel"
import { CloudSun, EuroIcon, Plane, Users } from "lucide-react"

interface AircraftCardProps {
  name: string
  description: string
  images: {
    src: string
    alt: string
  }[]
  badge: string
  seats: number
  flightRules: string
  price: string
  speed: string
  onDetailsClick?: () => void
}

export function AircraftCard({
  name,
  description,
  images,
  badge,
  seats,
  flightRules,
  price,
  speed,
  onDetailsClick,
}: AircraftCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-sky-100 hover:border-sky-200 transition-all duration-300 hover:shadow-md rounded-xl">
      <ImageCarousel
        images={images}
        aspectRatio="video"
        autoplay={true}
        autoplayInterval={6000}
        showArrows={true}
        showDots={true}
        showPlayPause={true}
        overlayGradient={true}
        badges={
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-500 text-white">
            {badge}
          </span>
        }
      />
      <div className="flex flex-col flex-grow">
        <CardHeader className="p-6">
          <CardTitle className="text-xl sm:text-2xl text-sky-800">{name}</CardTitle>
          <CardDescription className="text-sm mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50">
              <Users className="h-5 w-5 text-sky-600" />
              <span className="font-medium">{seats} places</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50">
              <CloudSun className="h-5 w-5 text-sky-600" />
              <span className="font-medium">{flightRules}</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50">
              <EuroIcon className="h-5 w-5 text-sky-600" />
              <span className="font-medium">{price}</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-sky-50">
              <Plane className="h-5 w-5 text-sky-600" />
              <span className="font-medium">{speed}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            variant="outline"
            className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
            onClick={onDetailsClick}
          >
            Voir les détails
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
