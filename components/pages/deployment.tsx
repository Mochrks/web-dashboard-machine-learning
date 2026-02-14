"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CloudUpload,
  Server,
  Activity,
  Shield,
  Globe,
  Cpu,
  ArrowUpRight,
  Search,
  Filter,
  MoreVertical,
  Clock,
  Box,
  CheckCircle2,
  AlertCircle,
  Zap,
  Network,
  Lock,
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

export default function Deployment() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Visual Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
              <Network className="h-3 w-3" />
              Production Gateway
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                Endpoint Fleet
              </h1>
              <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
                Orchestrate containerized model deployments across multi-region kubernetes clusters.
                Manage scaling policies and secure API gateways.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-14 px-8 font-black border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl gap-2 shadow-sm"
            >
              <Box className="h-5 w-5" />
              REGISTRY
            </Button>
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-[0_10px_30px_rgba(37,99,235,0.3)] rounded-2xl gap-2 transition-all hover:-translate-y-1">
              <CloudUpload className="h-5 w-5" />
              DEPLOY NEW MODEL
            </Button>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Active Endpoints",
              value: "12",
              sub: "Operational",
              icon: Server,
              color: "text-blue-500",
              bg: "bg-blue-500/10",
            },
            {
              label: "Total Request Volume",
              value: "8.4M",
              sub: "Past 24 Hours",
              icon: Activity,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
            },
            {
              label: "Avg Error Rate",
              value: "0.002%",
              sub: "Well within SLO",
              icon: Shield,
              color: "text-indigo-500",
              bg: "bg-indigo-500/10",
            },
            {
              label: "Fleet Health",
              value: "99.99%",
              sub: "Global Uptime",
              icon: Globe,
              color: "text-amber-500",
              bg: "bg-amber-500/10",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-slate-50 dark:bg-slate-900 border-none text-[9px] font-black tracking-widest px-3 py-1"
                  >
                    REAL-TIME
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-2 italic">{stat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Endpoints Table */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden bg-white dark:bg-slate-950">
          <CardHeader className="p-10 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-1">
                <CardTitle className="text-2xl font-black tracking-tight">
                  Active Gateways
                </CardTitle>
                <CardDescription className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">
                  Monitoring 12 production clusters
                </CardDescription>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search endpoints..."
                    className="pl-12 h-14 w-[320px] bg-slate-50/50 border-slate-200 rounded-[24px] font-medium focus:bg-white"
                  />
                </div>
                <Button variant="outline" className="h-14 w-14 rounded-[24px] border-slate-200">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
              <TableRow className="border-slate-100 dark:border-slate-800">
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Service Identity
                </TableHead>
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Compute Load
                </TableHead>
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Live Status
                </TableHead>
                <TableHead className="px-10 py-6 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "fraud-detect-v2",
                  type: "HTTPS REST",
                  version: "2.1.4",
                  load: "64%",
                  status: "Healthy",
                  latency: "42ms",
                  clusters: "us-east, eu-west",
                },
                {
                  name: "recommendation-engine",
                  type: "gRPC Stream",
                  version: "4.0.1",
                  load: "12%",
                  status: "Scaling",
                  latency: "18ms",
                  clusters: "asia-south",
                },
                {
                  name: "image-classifier-pro",
                  type: "HTTPS REST",
                  version: "1.2.0",
                  load: "92%",
                  status: "High Load",
                  latency: "240ms",
                  clusters: "global",
                },
              ].map((row, i) => (
                <TableRow
                  key={i}
                  className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/40 transition-colors group"
                >
                  <TableCell className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <div className="size-14 rounded-[22px] bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 shadow-lg group-hover:rotate-6 transition-transform">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 dark:text-white text-lg leading-tight">
                          {row.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">
                            {row.type}
                          </span>
                          <div className="size-1 bg-slate-300 rounded-full" />
                          <span className="text-xs font-bold text-slate-500">v{row.version}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8">
                    <div className="space-y-2 max-w-[120px]">
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        <span>Utilization</span>
                        <span
                          className={parseInt(row.load) > 90 ? "text-red-500" : "text-slate-600"}
                        >
                          {row.load}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${parseInt(row.load) > 90 ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]" : "bg-blue-600"}`}
                          style={{ width: row.load }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8">
                    <div className="space-y-1.5">
                      <Badge
                        variant="outline"
                        className={`
                                                border-none px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider
                                                ${row.status === "Healthy" ? "bg-emerald-100 text-emerald-600" : row.status === "Scaling" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"}
                                            `}
                      >
                        {row.status}
                      </Badge>
                      <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
                        <Globe className="h-3 w-3" />
                        {row.clusters}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-200"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-xl text-slate-400"
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

        {/* Infrastructure Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-10 border-slate-200 dark:border-slate-800 rounded-[40px] shadow-xl relative overflow-hidden group border-none bg-slate-950 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="size-24 rounded-[32px] bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-2xl shadow-emerald-500/20 group-hover:-rotate-3 transition-transform">
                <Activity className="h-10 w-10" />
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-black tracking-tight leading-none">
                  Auto-scaling Policy
                </h4>
                <p className="text-slate-400 font-medium text-lg leading-relaxed">
                  Current clusters are configured to scale horizontally based on{" "}
                  <span className="text-white font-bold">P99 Latency & CPU Load</span> targets.
                </p>
                <Button className="h-14 px-8 bg-white text-slate-950 font-black rounded-2xl shadow-2xl transition-transform hover:-translate-y-1">
                  CONFIGURE SCALING
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-10 border-slate-200 dark:border-slate-800 rounded-[40px] shadow-xl relative overflow-hidden flex flex-col justify-center space-y-8 bg-white dark:bg-slate-950">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl">
                  <Lock className="h-6 w-6 text-slate-400" />
                </div>
                <h4 className="text-2xl font-black tracking-tight">Access Control</h4>
              </div>
              <Badge className="bg-blue-600 text-white border-none font-black text-[9px] px-3 py-1">
                ENFORCED
              </Badge>
            </div>
            <div className="space-y-3">
              {[
                { label: "TLS 1.3 Encryption", enabled: true },
                { label: "RBAC Authorization", enabled: true },
                { label: "IP Whitelisting", enabled: false },
              ].map((policy, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                    {policy.label}
                  </span>
                  <div
                    className={`size-2.5 rounded-full ${policy.enabled ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-slate-300"}`}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
