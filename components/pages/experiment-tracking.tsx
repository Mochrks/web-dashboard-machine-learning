"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  History,
  Play,
  Clock,
  Target,
  BarChart2,
  Filter,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  FlaskConical,
  Activity,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const experiments = [
  {
    id: "exp-001",
    name: "ResNet-50 Image Classification",
    status: "Completed",
    runtime: "4h 22m",
    accuracy: "94.2%",
    loss: "0.12",
    author: "Alex Chen",
    date: "2 hours ago",
  },
  {
    id: "exp-002",
    name: "BERT Transformer Fine-tuning",
    status: "Running",
    runtime: "1h 15m",
    accuracy: "89.5%",
    loss: "0.24",
    author: "Alex Chen",
    date: "Just now",
  },
  {
    id: "exp-003",
    name: "XGBoost Fraud Detection",
    status: "Completed",
    runtime: "12m 45s",
    accuracy: "98.1%",
    loss: "0.05",
    author: "Sarah Smith",
    date: "Yesterday",
  },
  {
    id: "exp-004",
    name: "LSTM Time Series Forecast",
    status: "Failed",
    runtime: "2h 45m",
    accuracy: "N/A",
    loss: "N/A",
    author: "Michael Ross",
    date: "2 days ago",
  },
];

export default function ExperimentTracking() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
              <FlaskConical className="h-3 w-3" />
              Research Laboratory
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Experiment Tracking
            </h1>
            <p className="text-slate-500 font-medium">
              Manage, compare, and optimize your model training experiments.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-12 px-6 font-bold border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:bg-slate-50"
            >
              <History className="h-4 w-4 mr-2" />
              Archived
            </Button>
            <Button className="h-12 px-8 font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5">
              <Play className="h-4 w-4 mr-2 fill-current" />
              New Experiment
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Total Runs",
              value: "1,284",
              icon: History,
              color: "text-blue-600",
              bg: "bg-blue-600/10",
            },
            {
              label: "Active Now",
              value: "6",
              icon: Activity,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
            },
            {
              label: "Avg. Precision",
              value: "92.4%",
              icon: Target,
              color: "text-amber-500",
              bg: "bg-amber-500/10",
            },
            {
              label: "GPU Usage",
              value: "78%",
              icon: BarChart2,
              color: "text-indigo-600",
              bg: "bg-indigo-600/10",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-all group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110 duration-500`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experiments Table */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
          <CardHeader className="bg-white dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-black">Recent Experiments</CardTitle>
                <CardDescription className="font-medium">
                  Comparing performance across different architectures.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Filter runs..."
                    className="pl-10 w-[240px] border-slate-200 dark:border-slate-800 h-10"
                  />
                </div>
                <Button variant="outline" size="icon" className="h-10 w-10 border-slate-200">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-800/30">
              <TableRow className="hover:bg-transparent border-slate-100 dark:border-slate-800">
                <TableHead className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-slate-400">
                  Experiment Name
                </TableHead>
                <TableHead className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-slate-400">
                  Status
                </TableHead>
                <TableHead className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-slate-400">
                  Runtime
                </TableHead>
                <TableHead className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-slate-400">
                  Accuracy
                </TableHead>
                <TableHead className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-slate-400">
                  Loss
                </TableHead>
                <TableHead className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-slate-400 text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiments.map((exp) => (
                <TableRow
                  key={exp.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 border-slate-100 dark:border-slate-800 transition-colors group"
                >
                  <TableCell className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {exp.name}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1">
                        {exp.author} • {exp.date}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    <Badge
                      className={`
                                            px-3 py-1 rounded-full text-[10px] font-black uppercase border-none
                                            ${exp.status === "Completed" ? "bg-emerald-500/10 text-emerald-600" : ""}
                                            ${exp.status === "Running" ? "bg-blue-500/10 text-blue-600 animate-pulse" : ""}
                                            ${exp.status === "Failed" ? "bg-red-500/10 text-red-600" : ""}
                                        `}
                    >
                      <span
                        className={`size-1.5 rounded-full mr-2 inline-block ${
                          exp.status === "Completed"
                            ? "bg-emerald-500"
                            : exp.status === "Running"
                              ? "bg-blue-600"
                              : "bg-red-500"
                        }`}
                      ></span>
                      {exp.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {exp.runtime}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    <span
                      className={`font-black text-sm ${exp.accuracy === "N/A" ? "text-slate-300" : "text-slate-900 dark:text-white"}`}
                    >
                      {exp.accuracy}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    <span
                      className={`font-black text-sm ${exp.loss === "N/A" ? "text-slate-300" : "text-slate-900 dark:text-white"}`}
                    >
                      {exp.loss}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Showing 4 of 1,284 runs
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 font-bold text-[10px] uppercase px-4"
                disabled
              >
                Prev
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 font-bold text-[10px] uppercase px-4 border-slate-300"
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
