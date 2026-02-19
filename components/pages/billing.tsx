"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Zap,
  CheckCircle2,
  ReceiptText,
  PieChart,
  Calendar,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  Globe,
  Lock,
  Wallet,
} from "lucide-react";

export default function Billing() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Visual Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
              <Wallet className="h-3 w-3" />
              Financial Operations
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Billing & Plans
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
              Scale your machine learning infrastructure with predictable enterprise pricing. Manage
              subscriptions, resource quotas, and detailed financial reporting.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-14 px-8 font-black border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl gap-2"
            >
              <ReceiptText className="h-5 w-5" />
              INVOICE HISTORY
            </Button>
          </div>
        </div>

        {/* Main Billing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan Card - Hero Style */}
          <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 bg-slate-950 text-white rounded-[40px] overflow-hidden relative group shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] pointer-events-none group-hover:bg-blue-600/30 transition-colors duration-700"></div>
            <CardContent className="p-12 relative z-10 flex flex-col md:flex-row justify-between gap-12">
              <div className="space-y-8 flex-1">
                <div className="space-y-4">
                  <Badge className="bg-blue-600/90 hover:bg-blue-600 text-white border-none font-black px-5 py-1.5 uppercase tracking-widest rounded-full text-[10px] shadow-lg shadow-blue-500/20">
                    <Sparkles className="h-3 w-3 mr-2 fill-current" />
                    CURRENT ACTIVE: PRO ENTERPRISE
                  </Badge>
                  <h2 className="text-6xl font-black tracking-tighter">
                    $420<span className="text-2xl text-slate-500 font-bold ml-2">/mo</span>
                  </h2>
                  <p className="text-slate-400 font-medium text-lg flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Next billing cycle: Dec 12, 2024
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-white/5">
                  {[
                    "Unlimited Model Endpoints",
                    "500GB Managed Feature Store",
                    "High-Priority GPU Queue",
                    "Dedicated Success Manager",
                    "Multi-cloud Failover Support",
                    "SOC2 Type II Compliance",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-300"
                    >
                      <div className="size-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 min-w-[280px] justify-center">
                <Button className="h-16 bg-white text-slate-900 hover:bg-slate-100 font-black text-xl rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-transform hover:-translate-y-1">
                  UPGRADE SCALING
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-400 hover:text-white font-black uppercase tracking-widest text-[11px] h-12 gap-2"
                >
                  VIEW QUOTA LIMITS <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment & Security Card */}
          <div className="space-y-8">
            <Card className="border-slate-200 dark:border-slate-800 p-8 rounded-[40px] shadow-xl space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-2xl tracking-tight">Payment</h3>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                  <CreditCard className="h-6 w-6 text-slate-400" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-3xl" />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="bg-white size-12 rounded-[14px] flex items-center justify-center shadow-lg">
                        <Shield className="h-7 w-7 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-black text-lg text-white leading-none tracking-tighter">
                          •••• 4242
                        </p>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2">
                          MARCUS AUERLIUS • 12/26
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-[10px] font-black text-blue-400 hover:text-blue-300 uppercase tracking-widest"
                    >
                      EDIT
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">
                    Auto-pay Enabled
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-14 rounded-[20px] border-slate-200 font-black uppercase tracking-[0.1em] text-xs"
              >
                ADD BACKUP METHOD
              </Button>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 p-8 rounded-[40px] bg-slate-50 dark:bg-slate-900 border-none shadow-inner flex items-center gap-5">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
                <Lock className="h-6 w-6 text-slate-400" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-black text-sm tracking-tight">Encrypted Storage</h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  Financial data is stored using AES-256 bank-grade encryption.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Usage Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {[
            {
              label: "Vector Storage",
              value: "42.8 GB",
              limit: "100 GB",
              percentage: 42,
              icon: PieChart,
              color: "text-blue-600",
              bg: "bg-blue-600/10",
            },
            {
              label: "GPU Compute Credits",
              value: "840h",
              limit: "2,000h",
              percentage: 42,
              icon: Zap,
              color: "text-amber-500",
              bg: "bg-amber-500/10",
            },
            {
              label: "Regional Gateway traffic",
              value: "1.2 TB",
              limit: "5 TB",
              percentage: 24,
              icon: Globe,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
            },
          ].map((usage, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 p-8 rounded-[32px] shadow-lg group hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`p-4 rounded-2xl ${usage.bg} ${usage.color} group-hover:scale-110 transition-transform`}
                >
                  <usage.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Utilization
                  </p>
                  <p className={`text-sm font-black ${usage.color}`}>{usage.percentage}%</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">
                      {usage.label}
                    </h4>
                    <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                      {usage.value}
                    </p>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400">{usage.limit} Max</p>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full ${usage.color.replace("text", "bg")} rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(37,99,235,0.2)]`}
                    style={{ width: `${usage.percentage}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
