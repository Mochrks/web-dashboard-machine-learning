"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const generateModelData = (modelCount: number) => {
  return Array.from({ length: modelCount }, (_, i) => ({
    name: `Model ${i + 1}`,
    accuracy: (Math.random() * 20 + 80).toFixed(2),
    f1Score: (Math.random() * 0.3 + 0.7).toFixed(2),
    precision: (Math.random() * 0.3 + 0.7).toFixed(2),
    recall: (Math.random() * 0.3 + 0.7).toFixed(2),
    trainingTime: Math.floor(Math.random() * 1000 + 500),
  }));
};

export default function ModelComparisonTable({ selectedModels }: { selectedModels: string[] }) {
  const [modelData, setModelData] = useState(generateModelData(selectedModels.length));

  return (
    <div>
      <Table>
        <TableCaption>Comparison of selected machine learning models</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Accuracy (%)</TableHead>
            <TableHead>F1 Score</TableHead>
            <TableHead>Precision</TableHead>
            <TableHead>Recall</TableHead>
            <TableHead>Training Time (s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modelData.map((model, index) => (
            <TableRow key={index}>
              <TableCell>{model.name}</TableCell>
              <TableCell>{model.accuracy}</TableCell>
              <TableCell>{model.f1Score}</TableCell>
              <TableCell>{model.precision}</TableCell>
              <TableCell>{model.recall}</TableCell>
              <TableCell>{model.trainingTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Button onClick={() => setModelData(generateModelData(selectedModels.length))}>
          Refresh Data
        </Button>
      </div>
    </div>
  );
}
