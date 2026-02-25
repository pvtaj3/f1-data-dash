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
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
        <XAxis 
          dataKey="metric" 
          stroke="#1A1A1A"
          style={{ fontSize: '12px', fontWeight: '600' }}
        />
        <YAxis 
          stroke="#1A1A1A"
          style={{ fontSize: '12px', fontWeight: '600' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#FFFFFF', 
            border: '2px solid #E10600',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          labelStyle={{ color: '#1A1A1A', fontWeight: 'bold' }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px', fontWeight: '600' }}
        />
        <Bar 
          dataKey="Bearman" 
          fill="#1A1A1A" 
          radius={[8, 8, 0, 0]}
        />
        <Bar 
          dataKey="Ocon" 
          fill="#E10600" 
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
