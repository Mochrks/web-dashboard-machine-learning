"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
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
import { Button } from "@/components/ui/button";

const generateScatterData = (modelCount: number, dataPoints: number) => {
  return Array.from({ length: modelCount }, (_, modelIndex) => ({
    name: `Model ${modelIndex + 1}`,
    data: Array.from({ length: dataPoints }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
    })),
  }));
};

const modelColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export default function DataExplorationWidget({ selectedModels }: { selectedModels: string[] }) {
  const [data, setData] = useState(generateScatterData(selectedModels.length, 100));
  const [xAxis, setXAxis] = useState("x");
  const [yAxis, setYAxis] = useState("y");
  const [zAxis, setZAxis] = useState("z");

  const refreshData = () => {
    setData(generateScatterData(selectedModels.length, 100));
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Select value={xAxis} onValueChange={setXAxis}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="X Axis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="x">X</SelectItem>
                <SelectItem value="y">Y</SelectItem>
                <SelectItem value="z">Z</SelectItem>
              </SelectContent>
            </Select>
            <Select value={yAxis} onValueChange={setYAxis}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Y Axis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="x">X</SelectItem>
                <SelectItem value="y">Y</SelectItem>
                <SelectItem value="z">Z</SelectItem>
              </SelectContent>
            </Select>
            <Select value={zAxis} onValueChange={setZAxis}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Z Axis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="x">X</SelectItem>
                <SelectItem value="y">Y</SelectItem>
                <SelectItem value="z">Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={refreshData}>Refresh Data</Button>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey={xAxis} name={xAxis.toUpperCase()} />
            <YAxis type="number" dataKey={yAxis} name={yAxis.toUpperCase()} />
            <ZAxis type="number" dataKey={zAxis} range={[60, 400]} name={zAxis.toUpperCase()} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            {data.map((entry, index) => (
              <Scatter
                key={entry.name}
                name={entry.name}
                data={entry.data}
                fill={modelColors[index % modelColors.length]}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
