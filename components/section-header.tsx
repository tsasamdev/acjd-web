import React from "react"

interface SectionHeaderProps {
  icon: React.ReactNode
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title, subtitle, className }) => (
  <div className={`text-center mb-16 ${className ?? ""}`}>
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
      {icon}
      {title}
    </div>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
)
