"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function PlaceholderPage({ title, description, icon: Icon }: PlaceholderPageProps) {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[90vh] p-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        <div className="relative inline-block group">
          <div className="absolute inset-0 bg-blue-600 blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 size-24 rounded-[32px] flex items-center justify-center text-blue-600 mx-auto shadow-2xl transition-transform group-hover:scale-105 duration-500">
            <Icon className="h-10 w-10" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-slate-500 font-semibold text-lg max-w-lg mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <Card className="border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl border-dashed relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <CardContent className="p-10 relative">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="size-16 rounded-full border-[6px] border-slate-100 dark:border-slate-800 border-t-blue-600 animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-2 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-black text-xl text-slate-900 dark:text-white uppercase tracking-widest">
                  Under Construction
                </p>
                <p className="text-sm text-slate-500 font-medium max-w-[300px]">
                  Our architects are currently fine-tuning this module for hyper-scale performance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black h-12 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5">
                  NOTIFY WHEN READY
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 font-black h-12 rounded-xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
                >
                  VIEW ROADMAP
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-4">
          ESTIMATED COMPLETION: Q2 2026 • v4.8 BUNDLE
        </p>
      </div>
    </div>
  );
}
