'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Driver } from '@/types/driver'

interface ComparisonChartProps {
  bearman: Driver
  ocon: Driver
}

export default function ComparisonChart({ bearman, ocon }: ComparisonChartProps) {
  const data = bearman.lapTimes.map((time, index) => ({
    lap: `Lap ${index + 1}`,
    bearman: time,
    ocon: ocon.lapTimes[index],
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
        <XAxis 
          dataKey="lap" 
          stroke="#1A1A1A"
          style={{ fontSize: '12px', fontWeight: '600' }}
        />
        <YAxis 
          stroke="#1A1A1A"
          style={{ fontSize: '12px', fontWeight: '600' }}
          domain={['auto', 'auto']}
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
          iconType="line"
        />
        <Line 
          type="monotone" 
          dataKey="bearman" 
          stroke="#1A1A1A" 
          strokeWidth={3}
          name="Bearman"
          dot={{ fill: '#1A1A1A', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="ocon" 
          stroke="#E10600" 
          strokeWidth={3}
          name="Ocon"
          dot={{ fill: '#E10600', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
