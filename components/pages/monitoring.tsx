"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bolt,
  TrendingUp,
  Minus,
  History,
  FileText,
  RefreshCcw,
  AlertCircle,
  Activity,
  Waves,
  ShieldCheck,
  Timer,
  Zap,
} from "lucide-react";

export default function Monitoring() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Status Hero */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-white dark:bg-slate-950 p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none"></div>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="size-3 bg-emerald-500 rounded-full animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                Inference Live
              </span>
            </div>
            <div className="space-y-1">
              <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Fraud Detection Engine <span className="text-slate-400 font-light">v2.1.4</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg flex items-center gap-2">
                <History className="h-4 w-4" />
                Analyzing production traffic • Last evaluation 42s ago
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Global Status
              </p>
              <p className="text-xl font-black text-emerald-600 uppercase">OPERATIONAL</p>
            </div>
            <Button
              variant="outline"
              className="h-14 px-8 font-black border-slate-200 dark:border-slate-800 text-sm gap-2 rounded-2xl"
            >
              <FileText className="h-4 w-4" />
              VIEW FULL LOGS
            </Button>
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm gap-2 rounded-2xl shadow-2xl shadow-blue-500/20">
              <RefreshCcw className="h-4 w-4" />
              TRIGGER EVALUATION
            </Button>
          </div>
        </div>

        {/* Real-time Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Request Latency",
              value: "42ms",
              sub: "P99 • Stable",
              icon: Timer,
              color: "text-blue-500",
              trend: "+2.1%",
              trendColor: "text-slate-400",
            },
            {
              label: "System Load",
              value: "24.8%",
              sub: "Cluster Load",
              icon: Zap,
              color: "text-amber-500",
              trend: "-5.0%",
              trendColor: "text-emerald-500",
            },
            {
              label: "Inference Success",
              value: "99.98%",
              sub: "Past 24 Hours",
              icon: ShieldCheck,
              color: "text-emerald-500",
              trend: "0.00%",
              trendColor: "text-slate-400",
            },
            {
              label: "Throughput",
              value: "1.2k",
              sub: "Requests / Sec",
              icon: Activity,
              color: "text-indigo-500",
              trend: "+12.4%",
              trendColor: "text-emerald-500",
            },
          ].map((metric, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all rounded-[24px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-900 ${metric.color}`}>
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`text-[10px] font-black ${metric.trendColor} flex items-center gap-1`}
                  >
                    {metric.trend.startsWith("+") ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : metric.trend === "0.00%" ? (
                      <Minus className="h-3 w-3" />
                    ) : (
                      <TrendingUp className="h-3 w-3 rotate-180" />
                    )}
                    {metric.trend}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    {metric.label}
                  </p>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                    {metric.value}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500 italic mt-1">{metric.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Monitoring Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Alerts and Signals */}
          <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-xl rounded-[32px] overflow-hidden">
            <CardHeader className="p-8 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-black">Performance Signals</CardTitle>
                  <CardDescription className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Real-time anomaly & drift detection
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="px-3 py-1 font-black text-[10px] border-slate-200"
                >
                  LAST 6 HOURS
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {[
                {
                  status: "critical",
                  title: "Concept Drift: User Transaction Patterns",
                  desc: "Detected shift in 'mean_transaction_volume'. P-value: 0.0012 (significant).",
                  time: "12m ago",
                },
                {
                  status: "warning",
                  title: "Latency Surge: us-east-1 Cluster",
                  desc: "Inference latency increased from 38ms to 84ms in region us-east-1.",
                  time: "45m ago",
                },
                {
                  status: "healthy",
                  title: "Model Calibration Stable",
                  desc: "Prediction distribution matches validation set baseline (0.98 similarity).",
                  time: "2h ago",
                },
              ].map((alert, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-[24px] border flex gap-6 group transition-all cursor-pointer ${
                    alert.status === "critical"
                      ? "bg-red-50/30 border-red-100 dark:bg-red-950/10 dark:border-red-900/30 hover:bg-red-50"
                      : alert.status === "warning"
                        ? "bg-amber-50/30 border-amber-100 dark:bg-amber-950/10 dark:border-amber-900/30 hover:bg-amber-50"
                        : "bg-slate-50/30 border-slate-100 dark:bg-slate-900/10 dark:border-slate-800 hover:bg-slate-100/50"
                  }`}
                >
                  <div
                    className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      alert.status === "critical"
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                        : alert.status === "warning"
                          ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                          : "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    }`}
                  >
                    {alert.status === "critical" ? (
                      <AlertCircle className="h-6 w-6" />
                    ) : alert.status === "warning" ? (
                      <Bolt className="h-6 w-6" />
                    ) : (
                      <ShieldCheck className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-slate-900 dark:text-white leading-tight">
                        {alert.title}
                      </h4>
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      {alert.desc}
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <Button
                        variant="link"
                        className={`p-0 h-auto font-black text-[10px] uppercase tracking-widest ${
                          alert.status === "critical"
                            ? "text-red-600"
                            : alert.status === "warning"
                              ? "text-amber-600"
                              : "text-emerald-600"
                        }`}
                      >
                        Investigate Signal
                      </Button>
                      <div className="size-1 bg-slate-200 rounded-full" />
                      <Button
                        variant="link"
                        className="p-0 h-auto font-black text-[10px] uppercase tracking-widest text-slate-400"
                      >
                        Dimiss
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Infrastructure Health */}
          <div className="space-y-8">
            <Card className="border-slate-200 dark:border-slate-800 p-8 rounded-[32px] space-y-6 shadow-xl">
              <h3 className="text-xl font-black tracking-tight">Active Nodes</h3>
              <div className="space-y-4">
                {[
                  { name: "inference-node-01", type: "GPU", load: "78%", health: "Good" },
                  { name: "inference-node-02", type: "GPU", load: "42%", health: "Good" },
                  { name: "batch-node-01", type: "CPU", load: "94%", health: "High Load" },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`size-2 rounded-full ${node.health === "Good" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
                        />
                        <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                          {node.name}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-none text-[9px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-600"
                      >
                        {node.type}
                      </Badge>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>Utilization</span>
                        <span
                          className={parseInt(node.load) > 90 ? "text-red-500" : "text-slate-600"}
                        >
                          {node.load}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${parseInt(node.load) > 90 ? "bg-red-500" : "bg-blue-600"}`}
                          style={{ width: node.load }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="w-full h-14 border-slate-200 font-black rounded-2xl"
                variant="outline"
              >
                SCALE CLUSTER
              </Button>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 p-8 rounded-[32px] bg-blue-600 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 space-y-4">
                <div className="p-3 bg-white/20 w-fit rounded-2xl">
                  <Waves className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-black">Data Freshness</h4>
                <p className="text-blue-100 text-sm font-medium leading-relaxed">
                  Incoming stream data is processing with 1.2s lag (Well within 5s SLO).
                </p>
                <Button className="w-full h-12 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50">
                  VIEW PIPELINES
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
