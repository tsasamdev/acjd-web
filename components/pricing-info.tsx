import { Clock } from "lucide-react"

interface PricingInfoProps {
  flightPrice: string
  instructorPrice: string
  className?: string
}

export function PricingInfo({ flightPrice, instructorPrice, className = "" }: PricingInfoProps) {
  return (
    <div className={`mt-auto pt-4 border-t border-sky-100 ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{flightPrice}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{instructorPrice}</span>
        </div>
      </div>
    </div>
  )
}
