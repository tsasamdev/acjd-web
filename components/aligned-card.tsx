import type React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface AlignedCardProps {
  className?: string
  image?: React.ReactNode
  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
}

export function AlignedCard({ className, image, header, content, footer }: AlignedCardProps) {
  return (
    <Card className={`flex flex-col h-full overflow-hidden ${className}`}>
      {image}
      <div className="flex flex-col flex-grow">
        {header && <CardHeader>{header}</CardHeader>}
        {content && <CardContent className="flex-grow">{content}</CardContent>}
        {footer && <CardFooter className="mt-auto">{footer}</CardFooter>}
      </div>
    </Card>
  )
}
