"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  RefreshCcw,
  Maximize2,
  History,
  Activity,
  Target,
  Zap,
  Cpu,
  ArrowUpRight,
  Search,
  Filter,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function ModelEvaluation() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Visual Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
              <Target className="h-3 w-3" />
              Model Validator
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                Model Evaluation <span className="text-slate-400 font-light ml-2">v2.4.0</span>
              </h1>
              <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
                Comparative performance analysis and statistical verification for the{" "}
                <span className="text-slate-900 dark:text-white font-bold">
                  Inference Engine Alpha
                </span>
                . Validating against 4.2M simulation points.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-14 px-8 font-black border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl gap-2 shadow-sm"
            >
              <History className="h-4 w-4" />
              VERSION LOG
            </Button>
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-[0_10px_30px_rgba(37,99,235,0.3)] rounded-2xl gap-2 transition-all hover:-translate-y-1">
              <RefreshCcw className="h-4 w-4" />
              RE-RUN EVALUATION
            </Button>
          </div>
        </div>

        {/* Metric Summary Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Precision",
              value: "0.942",
              delta: "+2.1%",
              trend: "up",
              icon: Zap,
              color: "text-blue-500",
              bg: "bg-blue-500/10",
            },
            {
              label: "Recall / Sensitivity",
              value: "0.914",
              delta: "-0.4%",
              trend: "down",
              icon: Activity,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
            },
            {
              label: "F1 Score (weighted)",
              value: "0.928",
              delta: "+1.2%",
              trend: "up",
              icon: Target,
              color: "text-indigo-500",
              bg: "bg-indigo-500/10",
            },
            {
              label: "Inference Latency",
              value: "8.4ms",
              delta: "Optimal",
              trend: "neutral",
              icon: Cpu,
              color: "text-amber-500",
              bg: "bg-amber-500/10",
            },
          ].map((metric, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-950"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-4 rounded-2xl ${metric.bg} ${metric.color} group-hover:scale-110 transition-transform`}
                  >
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`border-none font-black text-[9px] px-3 py-1 flex items-center gap-1 ${
                      metric.trend === "up"
                        ? "bg-emerald-100 text-emerald-600"
                        : metric.trend === "down"
                          ? "bg-red-100 text-red-600"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {metric.trend === "up" && <TrendingUp className="h-3 w-3" />}
                    {metric.trend === "down" && <TrendingDown className="h-3 w-3" />}
                    {metric.delta}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-none">
                    {metric.value}
                  </h3>
                  <div className="w-full bg-slate-100 dark:bg-slate-900 h-1.5 mt-4 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${metric.color.replace("text", "bg")} rounded-full`}
                      style={{
                        width: parseFloat(metric.value)
                          ? `${parseFloat(metric.value) * 100}%`
                          : "85%",
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visualizations & Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[40px] overflow-hidden">
            <CardHeader className="p-10 border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-black tracking-tight">
                  Confusion Matrix
                </CardTitle>
                <CardDescription className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">
                  Class balance & verification
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-2xl border-slate-200"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-10">
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    category: "True Positive",
                    value: "4,281",
                    color: "bg-blue-600",
                    text: "text-white",
                  },
                  {
                    category: "False Positive",
                    value: "142",
                    color: "bg-white dark:bg-slate-900",
                    text: "text-slate-900 dark:text-white",
                  },
                  {
                    category: "False Negative",
                    value: "84",
                    color: "bg-white dark:bg-slate-900",
                    text: "text-slate-900 dark:text-white",
                  },
                  {
                    category: "True Negative",
                    value: "12,940",
                    color: "bg-blue-600",
                    text: "text-white",
                  },
                ].map((cell, i) => (
                  <div
                    key={i}
                    className={`p-8 rounded-[32px] ${cell.color} ${cell.text} border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-2 shadow-sm`}
                  >
                    <span className="text-3xl font-black leading-none">{cell.value}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      {cell.category}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 shadow-xl rounded-[40px] overflow-hidden">
            <CardHeader className="p-10 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-2xl font-black tracking-tight">
                ROC / AUC Analysis
              </CardTitle>
              <CardDescription className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">
                Model discriminative capability (Score: 0.982)
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10">
              <div className="aspect-[16/9] w-full bg-slate-950 rounded-[32px] relative overflow-hidden flex items-center justify-center border border-slate-800">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <svg
                  className="w-full h-full relative z-10 p-8"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 100 L 0 0 L 100 0 L 100 100 Z"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="0.5"
                  />
                  {/* Evaluation Curve */}
                  <path
                    d="M0 100 Q 5 10, 100 0"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                  />
                  {/* Baseline */}
                  <line
                    x1="0"
                    y1="100"
                    x2="100"
                    y2="0"
                    stroke="#334155"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
                <div className="absolute bottom-8 right-8 bg-blue-600/10 border border-blue-600/20 px-4 py-2 rounded-xl backdrop-blur-md">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    Optimized Performance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Version History Table */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden">
          <CardHeader className="p-10 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <CardTitle className="text-2xl font-black tracking-tight">
                Version Evolution
              </CardTitle>
              <CardDescription className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">
                Tracking regression and improvement over time
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Filter version..."
                  className="h-12 w-64 pl-12 rounded-2xl border-slate-200 bg-slate-50"
                />
              </div>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-2xl gap-2 font-bold text-xs uppercase tracking-widest"
              >
                <Filter className="h-4 w-4" />
                COMPARISON
              </Button>
            </div>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
              <TableRow className="border-slate-100 dark:border-slate-800">
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Experiment vUID
                </TableHead>
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Core Performance
                </TableHead>
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Validation Status
                </TableHead>
                <TableHead className="px-10 py-6 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "v2.4.0",
                  status: "Primary",
                  accuracy: "0.942",
                  f1: "0.928",
                  time: "Just now",
                },
                { id: "v2.3.8", status: "Archive", accuracy: "0.921", f1: "0.904", time: "2d ago" },
                { id: "v2.3.4", status: "Archive", accuracy: "0.894", f1: "0.881", time: "1w ago" },
              ].map((row, i) => (
                <TableRow
                  key={i}
                  className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-950 transition-colors group"
                >
                  <TableCell className="px-10 py-8">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                        {row.id}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        Evaluated {row.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8">
                    <div className="flex items-center gap-10">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-slate-400">Acc</p>
                        <p className="font-mono text-sm font-bold">{row.accuracy}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-slate-400">F1</p>
                        <p className="font-mono text-sm font-bold">{row.f1}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8">
                    <Badge
                      variant="outline"
                      className={`border-none px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        row.status === "Primary"
                          ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20"
                          : "bg-slate-100 dark:bg-slate-900 text-slate-500"
                      }`}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-10 py-8 text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-12 w-12 rounded-2xl text-slate-400 hover:text-blue-600 group-hover:bg-blue-50"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
