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
        <CartesianGrid strokeDasharray="3 3" stroke="#38383F" />
        <XAxis 
          dataKey="lap" 
          stroke="#9CA3AF"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#9CA3AF"
          style={{ fontSize: '12px' }}
          domain={['auto', 'auto']}
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
          iconType="line"
        />
        <Line 
          type="monotone" 
          dataKey="bearman" 
          stroke="#B6BABD" 
          strokeWidth={3}
          name="Bearman"
          dot={{ fill: '#B6BABD', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="ocon" 
          stroke="#FF87BC" 
          strokeWidth={3}
          name="Ocon"
          dot={{ fill: '#FF87BC', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
