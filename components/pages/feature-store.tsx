"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Search,
  Plus,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Zap,
  Filter,
  Layers,
  Clock,
  Activity,
  Lock,
  User,
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

const features = [
  {
    id: "f1",
    name: "avg_transaction_val",
    type: "Float64",
    entity: "Customer",
    latency: "2.1ms",
    status: "Production",
    uptime: "99.99%",
    owner: "Data Team",
  },
  {
    id: "f2",
    name: "user_login_frequency",
    type: "Int32",
    entity: "User",
    latency: "4.8ms",
    status: "Staging",
    uptime: "98.5%",
    owner: "ML Ops",
  },
  {
    id: "f3",
    name: "is_high_risk_region",
    type: "Boolean",
    entity: "Location",
    latency: "0.8ms",
    status: "Production",
    uptime: "100%",
    owner: "Security",
  },
  {
    id: "f4",
    name: "last_purchase_timestamp",
    type: "DateTime",
    entity: "Customer",
    latency: "1.5ms",
    status: "Production",
    uptime: "99.9%",
    owner: "Data Team",
  },
];

export default function FeatureStore() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Visual Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
              <Layers className="h-3 w-3" />
              Core Infrastructure
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Feature Store
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
              A centralized hub for discoverable, reusable, and governed machine learning features.
              Synchronized for both low-latency online serving and large-scale offline training.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-12 px-6 font-bold border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
            >
              Explore Catalog
            </Button>
            <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-2xl shadow-blue-500/20 rounded-xl gap-2 transition-all hover:-translate-y-0.5">
              <Plus className="h-4 w-4" />
              REGISTER FEATURE
            </Button>
          </div>
        </div>

        {/* Performance Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Online Latency",
              value: "1.4ms",
              sub: "Avg. P99 Latency",
              icon: Zap,
              color: "text-blue-500",
            },
            {
              label: "Compute Efficiency",
              value: "94%",
              sub: "Cluster Utilization",
              icon: Cpu,
              color: "text-indigo-500",
            },
            {
              label: "Active Features",
              value: "248",
              sub: "Production Ready",
              icon: Database,
              color: "text-emerald-500",
            },
            {
              label: "Uptime (SLO)",
              value: "99.98%",
              sub: "Past 30 Days",
              icon: ShieldCheck,
              color: "text-slate-900 dark:text-white",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm group hover:shadow-xl transition-all duration-500"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`size-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-slate-100 dark:bg-slate-800 border-none text-[9px] font-bold"
                  >
                    LIVE
                  </Badge>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500 italic">{stat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registry View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden rounded-[24px]">
            <CardHeader className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <CardTitle className="text-xl font-black">Feature Registry</CardTitle>
                  <CardDescription className="font-bold text-xs uppercase tracking-widest text-slate-400 mt-1">
                    Managing 248 production feature definitions
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                    <Input
                      placeholder="Filter by name, tags..."
                      className="pl-10 h-11 w-[280px] border-slate-200 rounded-xl bg-slate-50/50"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 rounded-xl border-slate-200"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Table>
              <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
                <TableRow className="border-slate-100 dark:border-slate-800">
                  <TableHead className="px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em]">
                    Feature Name
                  </TableHead>
                  <TableHead className="px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em]">
                    Metadata
                  </TableHead>
                  <TableHead className="px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em]">
                    Status
                  </TableHead>
                  <TableHead className="px-8 py-4"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                  <TableRow
                    key={feature.id}
                    className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors group cursor-pointer"
                  >
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xs">
                          {feature.type.substring(0, 1)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-black text-slate-900 dark:text-white">
                            {feature.name}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            {feature.entity} • {feature.latency}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-slate-400" />
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                            {feature.uptime} uptime
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3 text-slate-400" />
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                            {feature.owner}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <Badge
                        className={`
                                                border-none px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest
                                                ${feature.status === "Production" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}
                                            `}
                      >
                        {feature.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-8 py-6 text-right">
                      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 text-blue-600 bg-blue-600/5 hover:bg-blue-600 hover:text-white rounded-xl"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <div className="space-y-8">
            {/* Health Monitoring Card */}
            <Card className="border-slate-200 dark:border-slate-800 p-8 bg-slate-900 text-white rounded-[32px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] pointer-events-none"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-600 rounded-2xl">
                    <Activity className="h-6 w-6" />
                  </div>
                  <Badge className="bg-emerald-500 text-white border-none font-black text-[9px] px-3">
                    OPTIMAL
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">System Health</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    All features are serving correctly. No concept drift detected in production
                    pipelines.
                  </p>
                </div>
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-slate-500">
                    <span>Serving Latency (P95)</span>
                    <span className="text-blue-500">2.4ms</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[85%] rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                  </div>
                </div>
                <Button className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 font-black rounded-2xl shadow-xl mt-4">
                  VIEW ANALYTICS
                </Button>
              </div>
            </Card>

            {/* Security Card */}
            <Card className="border-slate-200 dark:border-slate-800 p-8 rounded-[32px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                  <Lock className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </div>
                <h4 className="font-black text-lg tracking-tight">Access Policies</h4>
              </div>
              <p className="text-slate-500 font-medium text-sm">
                Manage feature-level permissions and data governance policies.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { label: "Public Discovery", enabled: true },
                  { label: "Restricted Training", enabled: false },
                  { label: "Encrypted Serving", enabled: true },
                ].map((policy, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800"
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">
                      {policy.label}
                    </span>
                    <div
                      className={`size-2 rounded-full ${policy.enabled ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-slate-300"}`}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
