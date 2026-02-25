'use client'

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts'
import { Driver } from '@/types/driver'

interface SectorAnalysisProps {
  bearman: Driver
  ocon: Driver
}

export default function SectorAnalysis({ bearman, ocon }: SectorAnalysisProps) {
  const data = [
    {
      sector: 'Sector 1',
      Bearman: bearman.sectorTimes.sector1,
      Ocon: ocon.sectorTimes.sector1,
    },
    {
      sector: 'Sector 2',
      Bearman: bearman.sectorTimes.sector2,
      Ocon: ocon.sectorTimes.sector2,
    },
    {
      sector: 'Sector 3',
      Bearman: bearman.sectorTimes.sector3,
      Ocon: ocon.sectorTimes.sector3,
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="#E5E5E5" />
          <PolarAngleAxis 
            dataKey="sector" 
            stroke="#1A1A1A"
            style={{ fontSize: '12px', fontWeight: '600' }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 35]} 
            stroke="#1A1A1A"
            style={{ fontSize: '10px', fontWeight: '600' }}
          />
          <Radar 
            name="Bearman" 
            dataKey="Bearman" 
            stroke="#1A1A1A" 
            fill="#1A1A1A" 
            fillOpacity={0.4}
            strokeWidth={2}
          />
          <Radar 
            name="Ocon" 
            dataKey="Ocon" 
            stroke="#E10600" 
            fill="#E10600" 
            fillOpacity={0.4}
            strokeWidth={2}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px', fontWeight: '600' }}
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-f1-dark mb-4">Sector Times (seconds)</h3>
        
        <div className="bg-f1-gray rounded-lg p-4 border border-f1-border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-bold">Sector 1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-f1-dark">Bearman: <span className="font-bold">{bearman.sectorTimes.sector1}s</span></span>
            <span className="text-f1-dark">Ocon: <span className="font-bold">{ocon.sectorTimes.sector1}s</span></span>
          </div>
          <div className="mt-2 text-xs">
            <span className={bearman.sectorTimes.sector1 < ocon.sectorTimes.sector1 ? 'text-green-600 font-bold' : 'text-f1-red font-bold'}>
              Δ {Math.abs(bearman.sectorTimes.sector1 - ocon.sectorTimes.sector1).toFixed(3)}s
            </span>
          </div>
        </div>

        <div className="bg-f1-gray rounded-lg p-4 border border-f1-border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-bold">Sector 2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-f1-dark">Bearman: <span className="font-bold">{bearman.sectorTimes.sector2}s</span></span>
            <span className="text-f1-dark">Ocon: <span className="font-bold">{ocon.sectorTimes.sector2}s</span></span>
          </div>
          <div className="mt-2 text-xs">
            <span className={bearman.sectorTimes.sector2 < ocon.sectorTimes.sector2 ? 'text-green-600 font-bold' : 'text-f1-red font-bold'}>
              Δ {Math.abs(bearman.sectorTimes.sector2 - ocon.sectorTimes.sector2).toFixed(3)}s
            </span>
          </div>
        </div>

        <div className="bg-f1-gray rounded-lg p-4 border border-f1-border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-bold">Sector 3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-f1-dark">Bearman: <span className="font-bold">{bearman.sectorTimes.sector3}s</span></span>
            <span className="text-f1-dark">Ocon: <span className="font-bold">{ocon.sectorTimes.sector3}s</span></span>
          </div>
          <div className="mt-2 text-xs">
            <span className={bearman.sectorTimes.sector3 < ocon.sectorTimes.sector3 ? 'text-green-600 font-bold' : 'text-f1-red font-bold'}>
              Δ {Math.abs(bearman.sectorTimes.sector3 - ocon.sectorTimes.sector3).toFixed(3)}s
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
