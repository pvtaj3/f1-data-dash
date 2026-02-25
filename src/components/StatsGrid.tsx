'use client'

import { motion } from 'framer-motion'
import { Driver } from '@/types/driver'

interface StatsGridProps {
  bearman: Driver
  ocon: Driver
}

export default function StatsGrid({ bearman, ocon }: StatsGridProps) {
  const stats = [
    { 
      label: 'Qualifying Battle', 
      bearman: bearman.qualifyingBattle, 
      ocon: ocon.qualifyingBattle,
      format: (val: number) => `${val}x`
    },
    { 
      label: 'Avg Lap Time', 
      bearman: bearman.avgLapTime, 
      ocon: ocon.avgLapTime,
      format: (val: number) => `${val.toFixed(3)}s`
    },
    { 
      label: 'Fastest Lap', 
      bearman: bearman.fastestLap, 
      ocon: ocon.fastestLap,
      format: (val: number) => `${val.toFixed(3)}s`,
      lower: true
    },
    { 
      label: 'Points per Race', 
      bearman: bearman.points / bearman.racesCompleted, 
      ocon: ocon.points / ocon.racesCompleted,
      format: (val: number) => val.toFixed(2)
    },
  ]

  return (
    <div className="card-gradient rounded-xl p-6 border border-f1-red/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-f1-red">Head-to-Head Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const bearmanWins = stat.lower 
            ? stat.bearman < stat.ocon 
            : stat.bearman > stat.ocon

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-f1-dark/50 rounded-lg p-4 hover:bg-f1-dark/70 transition-colors"
            >
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-3">
                {stat.label}
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-left">
                  <div className={`text-sm font-semibold ${bearmanWins ? 'text-green-400' : 'text-white'}`}>
                    Bearman
                  </div>
                  <div className={`text-lg font-bold ${bearmanWins ? 'text-green-400' : 'text-white'}`}>
                    {stat.format(stat.bearman)}
                  </div>
                </div>
                <div className="text-gray-600 text-2xl font-bold">VS</div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${!bearmanWins ? 'text-green-400' : 'text-white'}`}>
                    Ocon
                  </div>
                  <div className={`text-lg font-bold ${!bearmanWins ? 'text-green-400' : 'text-white'}`}>
                    {stat.format(stat.ocon)}
                  </div>
                </div>
              </div>
              {bearmanWins ? (
                <div className="text-xs text-center text-green-400 mt-2">
                  ✓ Bearman leads
                </div>
              ) : (
                <div className="text-xs text-center text-green-400 mt-2">
                  ✓ Ocon leads
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
