"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Key,
  Plus,
  Copy,
  RefreshCcw,
  Shield,
  Globe,
  Lock,
  Eye,
  EyeOff,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";

const apiKeys = [
  {
    id: "key-1",
    name: "Production_Main_Server",
    key: "sk_live_51Px2...A4q1",
    created: "Feb 12, 2024",
    lastUsed: "2 mins ago",
    status: "Active",
  },
  {
    id: "key-2",
    name: "Staging_Testing_Env",
    key: "sk_test_21Za...B9x2",
    created: "Jan 05, 2024",
    lastUsed: "6 hours ago",
    status: "Active",
  },
];

export default function APIAccess() {
  const [showKey, setShowKey] = useState<string | null>(null);

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
              <Lock className="h-3 w-3" />
              Security & Authentication
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              API Access
            </h1>
            <p className="text-slate-500 font-medium">
              Manage Secret Keys and endpoint permissions for your deployments.
            </p>
          </div>
          <Button className="h-12 px-8 font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5">
            <Plus className="h-4 w-4 mr-2" />
            Create New Key
          </Button>
        </div>

        {/* Security Banner */}
        <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="bg-blue-600 size-16 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-black">Secure Your Endpoints</h3>
            <p className="text-slate-400 text-sm max-w-2xl font-medium leading-relaxed">
              API keys allow you to integrate ML Core models into your own applications. Never share
              your secret keys in public code repositories.
            </p>
          </div>
          <div className="md:ml-auto flex gap-4 shrink-0">
            <Button
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 h-10 font-bold px-6"
            >
              Security Docs
            </Button>
          </div>
        </div>

        {/* API Keys List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Active API Keys
            </h2>
            <Badge
              variant="outline"
              className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 border-none font-black text-[10px] uppercase px-3 py-1"
            >
              {apiKeys.length} ACTIVE KEYS
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {apiKeys.map((key) => (
              <Card
                key={key.id}
                className="border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-all duration-300 overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="p-6 flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-600/10 p-2 rounded-lg">
                            <Key className="h-4 w-4 text-blue-600" />
                          </div>
                          <h3 className="font-black text-slate-900 dark:text-white">{key.name}</h3>
                        </div>
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-black text-[9px] uppercase">
                          {key.status}
                        </Badge>
                      </div>

                      <div className="flex items-center group">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 flex-1 flex items-center justify-between">
                          <span className="font-mono text-sm text-slate-500">
                            {showKey === key.id
                              ? key.key
                              : key.key.replace(/./g, "•").substring(0, 16)}
                          </span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-400 hover:text-blue-600"
                              onClick={() => setShowKey(showKey === key.id ? null : key.id)}
                            >
                              {showKey === key.id ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-400 hover:text-blue-600"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-8 text-[10px] uppercase font-black text-slate-400 tracking-widest">
                        <span>Created: {key.created}</span>
                        <span>Last Used: {key.lastUsed}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 flex flex-row lg:flex-col items-center justify-center gap-3 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 shrink-0">
                      <Button
                        variant="outline"
                        className="w-full h-11 border-slate-200 dark:border-slate-700 font-bold px-6 text-xs uppercase hover:bg-white dark:hover:bg-slate-900"
                      >
                        <RefreshCcw className="h-3 w-3 mr-2" />
                        Roll Key
                      </Button>
                      <Button variant="ghost" size="icon" className="h-11 w-11 text-slate-400">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* API Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-slate-200 dark:border-slate-800 p-6 border-dashed bg-transparent">
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl">
                <Globe className="h-6 w-6 text-slate-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">
                  Public Endpoint
                </h4>
                <p className="text-sm font-mono text-blue-600">
                  https://api.mlcore.enterprise/v1/inference
                </p>
                <p className="text-[10px] font-medium text-slate-500 pt-2 leading-relaxed">
                  Global low-latency endpoint, automatically routed to nearest data center.
                </p>
              </div>
            </div>
          </Card>
          <Card className="border-slate-200 dark:border-slate-800 p-6 border-dashed bg-transparent">
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl">
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">
                  Usage Limits
                </h4>
                <p className="text-sm font-black text-slate-900 dark:text-white">
                  1,240 / 5,000 requests
                </p>
                <p className="text-[10px] font-medium text-slate-500 pt-2 leading-relaxed">
                  Enterprise plan includes unlimited testing environment requests.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
