'use client'

import { motion } from 'framer-motion'
import { Driver } from '@/types/driver'

interface DriverCardProps {
  driver: Driver
}

export default function DriverCard({ driver }: DriverCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card-light rounded-xl p-6 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-f1-dark mb-1">{driver.name}</h2>
          <p className="text-gray-600 text-sm font-semibold">{driver.team}</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold text-f1-red">#{driver.number}</div>
          <div className="text-xs text-gray-500 mt-1 font-medium">{driver.nationality}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-f1-gray rounded-lg p-3 border border-f1-border">
          <div className="text-gray-600 text-xs uppercase tracking-wide font-bold">Championship</div>
          <div className="text-2xl font-bold text-f1-dark mt-1">
            P{driver.championshipPosition}
          </div>
        </div>
        <div className="bg-f1-gray rounded-lg p-3 border border-f1-border">
          <div className="text-gray-600 text-xs uppercase tracking-wide font-bold">Points</div>
          <div className="text-2xl font-bold text-f1-red mt-1">{driver.points}</div>
        </div>
        <div className="bg-f1-gray rounded-lg p-3 border border-f1-border">
          <div className="text-gray-600 text-xs uppercase tracking-wide font-bold">Podiums</div>
          <div className="text-2xl font-bold text-f1-dark mt-1">{driver.podiums}</div>
        </div>
        <div className="bg-f1-gray rounded-lg p-3 border border-f1-border">
          <div className="text-gray-600 text-xs uppercase tracking-wide font-bold">Best Finish</div>
          <div className="text-2xl font-bold text-f1-dark mt-1">P{driver.bestFinish}</div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-f1-border">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm font-semibold">Average Qualifying</span>
          <span className="text-f1-dark font-bold">P{driver.avgQualifying.toFixed(1)}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600 text-sm font-semibold">DNFs</span>
          <span className="text-f1-dark font-bold">{driver.dnfs}</span>
        </div>
      </div>
    </motion.div>
  )
}
