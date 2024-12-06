'use client'

import { useState, useEffect } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const generatePerformanceData = (modelCount: number, dataPoints: number) => {
  const models = Array.from({ length: modelCount }, (_, i) => `model${i + 1}`)
  return Array.from({ length: dataPoints }, (_, i) => ({
    timestamp: new Date(Date.now() - (dataPoints - i - 1) * 86400000).toISOString().split('T')[0],
    ...models.reduce((acc, model) => ({
      ...acc,
      [model]: Math.random() * 100
    }), {})
  }))
}

const modelColors = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
]

export default function ModelPerformanceChart({ selectedModels }: { selectedModels: string[] }) {
  const [data, setData] = useState(generatePerformanceData(5, 30))
  const [timeRange, setTimeRange] = useState('30')

  useEffect(() => {
    setData(generatePerformanceData(5, parseInt(timeRange)))
  }, [timeRange])

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => setData(generatePerformanceData(5, parseInt(timeRange)))}>
            Refresh Data
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedModels.map((model, index) => (
              <Line
                key={model}
                type="monotone"
                dataKey={model}
                stroke={modelColors[index % modelColors.length]}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

