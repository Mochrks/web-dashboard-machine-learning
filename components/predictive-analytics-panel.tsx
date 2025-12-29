"use client";

import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const generatePredictiveData = (modelCount: number, dataPoints: number) => {
  const models = Array.from({ length: modelCount }, (_, i) => `model${i + 1}`);
  const currentDate = new Date();
  return Array.from({ length: dataPoints }, (_, i) => {
    const date = new Date(currentDate.getTime() + i * 86400000);
    return {
      date: date.toISOString().split("T")[0],
      ...models.reduce(
        (acc, model) => ({
          ...acc,
          [model]: Math.random() * 20 + 80 + (i / dataPoints) * 10,
        }),
        {}
      ),
    };
  });
};

const modelColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export default function PredictiveAnalyticsPanel({ selectedModels }: { selectedModels: string[] }) {
  const [data, setData] = useState(generatePredictiveData(selectedModels.length, 30));
  const [predictionRange, setPredictionRange] = useState("30");

  useEffect(() => {
    setData(generatePredictiveData(selectedModels.length, parseInt(predictionRange)));
  }, [predictionRange, selectedModels.length]);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <Select value={predictionRange} onValueChange={setPredictionRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select prediction range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Next 30 days</SelectItem>
              <SelectItem value="60">Next 60 days</SelectItem>
              <SelectItem value="90">Next 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedModels.map((model, index) => (
              <Area
                key={model}
                type="monotone"
                dataKey={model}
                stroke={modelColors[index % modelColors.length]}
                fill={modelColors[index % modelColors.length]}
                fillOpacity={0.3}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
