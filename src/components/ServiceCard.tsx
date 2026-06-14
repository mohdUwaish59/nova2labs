"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

export interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  priceRange?: string
}

export function ServiceCard({ icon: Icon, title, description, features, priceRange }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden rounded-2xl bg-white border border-slate-200"
      style={{
        boxShadow:
          "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
      }}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
              <Icon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
              {priceRange && (
                <p className="text-xs text-slate-500">{priceRange}</p>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 mb-3">{description}</p>

        {/* Features */}
        <div className="space-y-1.5">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
              <span className="text-xs text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-3 w-full rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </motion.div>
  )
}
