"use client"
import { motion } from "framer-motion"

interface Stat {
  value: number
  label: string
  prefix?: string
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-US")
}

export function StatsSection() {
  const stats: Stat[] = [
    { value: 272869, label: "projets financés" },
    { value: 8535100362, label: "vers la création", prefix: "$" },
    { value: 100251257, label: "engagements" },
  ]

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-1/3 h-full">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[80%] border-r-[16px] border-primary rounded-r-full" />
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[80%] border-l-[16px] border-primary rounded-l-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Donner vie à un projet créatif.</h2>
          <p className="text-zinc-600 uppercase tracking-wide">Sur notre plate-forme:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.prefix}
                {formatNumber(stat.value)}
              </div>
              <div className="text-zinc-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

