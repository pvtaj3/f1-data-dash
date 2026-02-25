'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Driver } from '@/types/driver'

interface PerformanceChartProps {
  bearman: Driver
  ocon: Driver
}

export default function PerformanceChart({ bearman, ocon }: PerformanceChartProps) {
  const data = [
    {
      metric: 'Points',
      Bearman: bearman.points,
      Ocon: ocon.points,
    },
    {
      metric: 'Podiums',
      Bearman: bearman.podiums,
      Ocon: ocon.podiums,
    },
    {
      metric: 'Top 10s',
      Bearman: bearman.topTens,
      Ocon: ocon.topTens,
    },
    {
      metric: 'Races',
      Bearman: bearman.racesCompleted,
      Ocon: ocon.racesCompleted,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#38383F" />
        <XAxis 
          dataKey="metric" 
          stroke="#9CA3AF"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#9CA3AF"
          style={{ fontSize: '12px' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#15151E', 
            border: '1px solid #E10600',
            borderRadius: '8px'
          }}
          labelStyle={{ color: '#fff' }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
        />
        <Bar 
          dataKey="Bearman" 
          fill="#B6BABD" 
          radius={[8, 8, 0, 0]}
        />
        <Bar 
          dataKey="Ocon" 
          fill="#FF87BC" 
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
