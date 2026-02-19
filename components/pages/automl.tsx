"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Sparkles,
  Zap,
  Layers,
  Search,
  Settings2,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const activeJobs = [
  {
    id: "job-102",
    name: "Customer Churn Optimization",
    target: "binary_classification",
    progress: 68,
    timeRemaining: "14m",
    bestScore: "0.912",
    trialCount: 42,
  },
  {
    id: "job-103",
    name: "Demand Forecasting v2",
    target: "time_series_regression",
    progress: 32,
    timeRemaining: "45m",
    bestScore: "0.854",
    trialCount: 18,
  },
];

export default function AutoML() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-[40px] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-10 md:p-14 group">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent blur-3xl pointer-events-none transition-opacity group-hover:opacity-40 duration-700"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <Badge className="bg-blue-600/20 text-blue-400 border-none px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full">
                <Sparkles className="h-3 w-3 mr-2" />
                AI-Powered Discovery
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Automated <br />
                <span className="text-blue-500">Intelligence.</span>
              </h1>
              <p className="text-slate-400 text-lg font-medium max-w-lg leading-relaxed">
                Let AutoML discover the optimal architecture, hyperparameters, and feature
                transformations for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-1">
                  START DISCOVERY
                </Button>
                <Button
                  variant="link"
                  className="text-slate-300 font-bold hover:text-white transition-colors"
                >
                  Read Whitepaper <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative size-64 md:size-80 flex items-center justify-center">
              <div className="absolute inset-0 border-[1px] border-slate-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-10 border-[1px] border-blue-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="size-32 bg-blue-600 rounded-[40px] flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] rotate-12 transition-transform group-hover:rotate-0 duration-700">
                <Cpu className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Active Jobs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Active Optimization Jobs
              </h2>
              <Button variant="ghost" className="text-blue-600 font-bold">
                View History
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {activeJobs.map((job) => (
                <Card
                  key={job.id}
                  className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group hover:border-blue-500/50 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl">
                            <Zap className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-black text-slate-900 dark:text-white">
                              {job.name}
                            </h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {job.target}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold">
                            <span className="text-slate-500">Overall Progress</span>
                            <span className="text-blue-600">{job.progress}%</span>
                          </div>
                          <Progress
                            value={job.progress}
                            className="h-2 bg-slate-100 dark:bg-slate-800"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-12 text-center border-l border-slate-100 dark:border-slate-800 pl-12">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Trials
                          </p>
                          <p className="text-lg font-black">{job.trialCount}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Best F1
                          </p>
                          <p className="text-lg font-black text-emerald-500">{job.bestScore}</p>
                        </div>
                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-xl bg-slate-900 border-none shadow-lg"
                        >
                          <Settings2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Insights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              System Status
            </h2>
            <Card className="border-slate-200 dark:border-slate-800 p-6 space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
                <div>
                  <p className="text-xs font-black text-emerald-700 uppercase tracking-widest">
                    Discovery Engine
                  </p>
                  <p className="text-sm font-bold text-emerald-600">FULLY OPERATIONAL</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                      Total Architectures
                    </span>
                  </div>
                  <span className="text-sm font-black text-slate-900 dark:text-white">412</span>
                </div>
                <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                      Monthly Saved Time
                    </span>
                  </div>
                  <span className="text-sm font-black text-slate-900 dark:text-white">
                    840 Hours
                  </span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                      Search Space
                    </span>
                  </div>
                  <span className="text-sm font-black text-slate-900 dark:text-white">
                    10^12 Params
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-12 font-black border-slate-200 dark:border-slate-800 uppercase tracking-widest text-xs"
              >
                Configure Engine Settings
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
