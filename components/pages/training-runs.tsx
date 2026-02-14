"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Brain,
  Play,
  Pause,
  RotateCcw,
  Search,
  Filter,
  MoreVertical,
  Activity,
  Flame,
  Gauge,
  History,
  Zap,
  ChevronRight,
  Clock,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const trainingRuns = [
  {
    id: "run-1",
    name: "DeepNet Hyperopt",
    status: "Running",
    start: "10:00 AM",
    duration: "1h 42m",
    loss: 0.1241,
    progress: 65,
    gpu: "84%",
    type: "Distributed",
  },
  {
    id: "run-2",
    name: "XGBoost Production",
    status: "Success",
    start: "02:30 PM",
    duration: "12m",
    loss: 0.0892,
    progress: 100,
    gpu: "0%",
    type: "Single Node",
  },
  {
    id: "run-3",
    name: "NLP Transformer v4",
    status: "Failed",
    start: "09:12 AM",
    duration: "4h 22m",
    loss: 1.4502,
    progress: 42,
    gpu: "0%",
    type: "Multi-GPU",
  },
];

export default function TrainingRuns() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Visual Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
              <Flame className="h-3 w-3" />
              Compute Engine
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Training Runs
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
              Monitor and manage large-scale asynchronous model training experiments. Track
              progress, resource utilization, and loss convergence in real-time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-[0_10px_30px_rgba(37,99,235,0.3)] rounded-2xl gap-3 transition-all hover:-translate-y-1">
              <Play className="h-5 w-5 fill-current" />
              LAUNCH NEW EXPERIMENT
            </Button>
          </div>
        </div>

        {/* Compute Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Active Experiments",
              value: "3",
              sub: "2 Queueing",
              icon: Activity,
              color: "text-blue-500",
            },
            {
              label: "GPU Utilization",
              value: "92.4%",
              sub: "Cluster Load",
              icon: Gauge,
              color: "text-emerald-500",
            },
            {
              label: "Avg Convergence",
              value: "0.084",
              sub: "Loss Delta",
              icon: Zap,
              color: "text-amber-500",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group"
            >
              <CardContent className="p-8 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </p>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-slate-500">{stat.sub}</p>
                </div>
                <div
                  className={`p-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 ${stat.color} group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table View */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-2xl rounded-[32px] overflow-hidden">
          <CardHeader className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-black">Experiment Queue</CardTitle>
              <CardDescription className="font-bold text-xs uppercase tracking-widest text-slate-400">
                Total 2,410 runs completed to date
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search runs..."
                  className="pl-11 h-12 w-[300px] bg-slate-50/50 border-slate-200 rounded-2xl"
                />
              </div>
              <Button variant="outline" className="h-12 w-12 rounded-2xl border-slate-200">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
              <TableRow className="border-slate-100 dark:border-slate-800">
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Run Identity & Environment
                </TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Live Status
                </TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Convergence
                </TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Resource
                </TableHead>
                <TableHead className="px-8 py-5"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainingRuns.map((run) => (
                <TableRow
                  key={run.id}
                  className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors group cursor-pointer"
                >
                  <TableCell className="px-8 py-6">
                    <div className="flex items-center gap-5">
                      <div className="size-12 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 rotate-3 group-hover:rotate-0 transition-transform">
                        <Brain className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 dark:text-white text-lg leading-tight">
                          {run.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant="outline"
                            className="text-[9px] font-black border-slate-200 px-2 py-0"
                          >
                            {run.type}
                          </Badge>
                          <span className="text-[10px] font-bold text-slate-400 lowercase">
                            {run.start}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-6">
                    <div className="space-y-3">
                      <Badge
                        className={`
                                                border-none px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider
                                                ${run.status === "Success" ? "bg-emerald-100 text-emerald-600" : run.status === "Running" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"}
                                            `}
                      >
                        {run.status}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-1000 ${run.status === "Running" ? "bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" : run.status === "Failed" ? "bg-red-500" : "bg-emerald-500"}`}
                            style={{ width: `${run.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-500">
                          {run.progress}%
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-6">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-slate-400">
                        Current Loss
                      </p>
                      <p className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
                        {run.loss.toFixed(6)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-6">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-slate-400">GPU Load</p>
                      <p className="font-black text-slate-700 dark:text-slate-300">{run.gpu}</p>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-11 w-11 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-11 w-11 rounded-xl text-slate-400"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Bottom Logs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-slate-950 text-white rounded-[40px] border-slate-800 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]" />
            <CardHeader className="p-0 mb-8 border-b border-slate-800 pb-8 flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-600 rounded-2xl">
                  <Terminal className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-black">Tailing Logs</CardTitle>
                  <p className="text-slate-400 font-medium text-sm">
                    Real-time STDOUT/STDERR stream for active experiments
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                  Streaming
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="font-mono text-[13px] space-y-3 opacity-80 leading-relaxed font-medium">
                <p className="flex gap-6">
                  <span className="text-white/30 shrink-0">14:02:11</span>{" "}
                  <span className="text-emerald-400">INFO</span> [Epoch 4/10] Validation Loss:
                  0.1441, Accuracy: 94.2%
                </p>
                <p className="flex gap-6">
                  <span className="text-white/30 shrink-0">14:02:15</span>{" "}
                  <span className="text-blue-400">DEBUG</span> Hyperparameter tuning: trial 24/100
                  starting on worker node-02.
                </p>
                <p className="flex gap-6">
                  <span className="text-white/30 shrink-0">14:02:22</span>{" "}
                  <span className="text-slate-500">INFO</span> Saving checkpoint to
                  s3://ml-core/artifacts/runs/run-1/epoch_4.pt
                </p>
                <p className="flex gap-6">
                  <span className="text-white/30 shrink-0">14:02:28</span>{" "}
                  <span className="text-amber-400">WARN</span> Slow data fetch detected from feature
                  store (Latency: 450ms).
                </p>
                <p className="flex gap-6">
                  <span className="text-white/30 shrink-0">14:02:35</span>{" "}
                  <span className="text-emerald-400">INFO</span> [Epoch 4/10] Training Loss: 0.1241,
                  Learning Rate: 0.0001
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 p-10 rounded-[40px] flex flex-col items-center justify-center text-center space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] mb-2 shadow-inner">
              <History className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Recent Artifacts
            </h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Access previous model weights, evaluation reports, and visualization artifacts.
            </p>
            <Button
              className="w-full h-14 border-slate-200 font-black rounded-2xl"
              variant="outline"
            >
              EXPLORE ARTIFACTS
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
