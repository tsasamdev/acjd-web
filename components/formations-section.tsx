import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { HoverCard } from "@/components/animations/hover-card"
import { BookAIcon, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PricingInfo } from "@/components/pricing-info"
import React from "react"

export type Formation = {
  title: string
  description: string
  duration?: string
  features: string[]
  flightPrice?: string
  instructorPrice?: string
}

export type FormationsSectionProps = {
  sectionTitle?: string
  sectionSubtitle?: string
  formations: Formation[]
}

export function FormationsSection({
  sectionTitle = "Nos Formations",
  sectionSubtitle = "Nous proposons des formations de qualité pour tous les niveaux, que vous soyez débutant ou pilote expérimenté.",
  formations,
}: FormationsSectionProps) {
  return (
    <section id="formations" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
            
              {sectionTitle}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-sky-900">Devenez pilote</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">{sectionSubtitle}</p>
          </FadeIn>
        </div>

        <StaggerIn>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-full">
            {formations.map((formation, idx) => (
              <HoverCard key={formation.title + idx}>
                <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden min-w-0 w-full max-w-full">
                  <div className="h-2 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-2 text-sky-600 mb-3">
                       
                        {formation.duration && <span className="text-sm font-medium">{formation.duration}</span>}
                      </div>
                      <CardTitle className="text-xl text-sky-800">{formation.title}</CardTitle>
                      <CardDescription className="mt-2"></CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{formation.description}</p>
                        <ul className="space-y-2 mb-6">
                          {formation.features.map((feature, i) => (
                            <li className="flex flex-row items-center gap-2" key={feature + i}>
                              <ChevronRight className="h-5 w-5 text-sky-500 shrink-0" />
                              <span className="text-sm text-muted-foreground flex items-center">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {(formation.flightPrice || formation.instructorPrice) && (
                        <div className="mt-auto pt-4 border-t border-sky-100">
                          <PricingInfo flightPrice={formation.flightPrice ?? ""} instructorPrice={formation.instructorPrice ?? ""} />
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </HoverCard>
            ))}
          </div>
        </StaggerIn>
      </div>
    </section>
  )
}
