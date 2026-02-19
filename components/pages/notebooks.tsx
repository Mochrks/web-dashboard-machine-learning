"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Plus,
  Github,
  HardDrive,
  Cpu,
  Users,
  ExternalLink,
  Terminal,
  Search,
  Code2,
  Play,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const notebookSessions = [
  {
    id: "nb-101",
    name: "EDA_Transactions_Analysis.ipynb",
    kernel: "Python 3.10 (ML Core)",
    status: "Active",
    uptime: "1h 22m",
    memory: "4.2 GB / 16 GB",
    sharedBy: "Alex Chen",
  },
  {
    id: "nb-102",
    name: "Model_V42_Prototype.ipynb",
    kernel: "PyTorch 2.1 (GPU)",
    status: "Idling",
    uptime: "4h 05m",
    memory: "1.1 GB / 32 GB",
    sharedBy: "Sarah Smith",
  },
];

export default function Notebooks() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
              <Terminal className="h-3 w-3" />
              Interactive Environments
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Jupyter Notebooks
            </h1>
            <p className="text-slate-500 font-medium">
              Develop, experiment, and share your data science workflows.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-12 px-6 font-bold border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:bg-slate-50"
            >
              <Github className="h-4 w-4 mr-2" />
              Sync Repos
            </Button>
            <Button className="h-12 px-8 font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5">
              <Plus className="h-4 w-4 mr-2" />
              Create Workspace
            </Button>
          </div>
        </div>

        {/* Resource Monitors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Active Kernels", value: "12", icon: Cpu, total: "/ 50 Limit" },
            { label: "Workspace Storage", value: "24.5 GB", icon: HardDrive, total: "/ 100 GB" },
            { label: "Collaborators", value: "8", icon: Users, total: "Online Now" },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-black text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-bold text-slate-500">{stat.total}</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                  <stat.icon className="h-6 w-6 text-slate-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sessions List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Active Sessions
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Filter sessions..."
                  className="pl-10 h-10 w-[240px] border-slate-200"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {notebookSessions.map((session) => (
              <Card
                key={session.id}
                className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="size-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="h-7 w-7" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-black text-lg text-slate-900 dark:text-white leading-none">
                          {session.name}
                        </h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                          {session.kernel}
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <Badge
                            variant="outline"
                            className={`border-none px-2 py-0.5 rounded text-[10px] font-black uppercase ${session.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}
                          >
                            {session.status}
                          </Badge>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Uptime: {session.uptime}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest tracking-tighter">
                            Memory: {session.memory}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 lg:pl-8 shrink-0">
                      <div className="text-right mr-4 hidden sm:block">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Shared By
                        </p>
                        <p className="text-xs font-black text-slate-900 dark:text-white">
                          {session.sharedBy}
                        </p>
                      </div>
                      <Button className="bg-slate-900 hover:bg-black text-white font-black px-6 h-11 rounded-xl shadow-xl transition-all hover:-translate-y-0.5">
                        <Play className="h-4 w-4 mr-2 fill-current" />
                        OPEN LAB
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-11 w-11 rounded-xl border-slate-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 dark:border-slate-800">
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Quickstart Templates
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {["Data Cleaning", "NLP Pipeline", "Computer Vision", "XGBoost Baseline"].map(
                (template) => (
                  <Button
                    key={template}
                    variant="outline"
                    className="h-14 justify-start font-bold border-slate-200 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-xs uppercase tracking-widest"
                  >
                    <FileText className="h-4 w-4 mr-3 opacity-50" />
                    {template}
                  </Button>
                )
              )}
            </div>
          </div>
          <Card className="bg-slate-950 border-slate-800 p-8 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            <h3 className="text-white font-black text-xl z-10">Need Custom Infrastructure?</h3>
            <p className="text-slate-400 text-sm max-w-sm z-10 font-medium">
              Provision dedicated instances with custom GPU clusters and persistent volumes.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 h-12 rounded-xl z-10 shadow-2xl shadow-blue-500/20">
              CONTACT ARCHITECT
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
