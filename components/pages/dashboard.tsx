"use client";

import MetricSummary from "../section/metric-summary";
import InferencePerformanceChart from "../section/inference-performance-chart";
import RecentTrainingSessions from "../section/recent-training-sessions";
import ComprehensiveCharts from "../section/comprehensive-charts";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Intelligence Overview
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Monitoring enterprise ML assets and model lifecycle performance.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 flex gap-1">
              <button className="px-3 py-1.5 text-xs font-bold bg-blue-600 text-white rounded-md shadow-sm">
                Real-time
              </button>
              <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">
                Historical
              </button>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <MetricSummary />

        {/* Main Data Section */}
        <div className="space-y-8">
          <ComprehensiveCharts />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <RecentTrainingSessions />
            </div>
            <div className="xl:col-span-1">
              <InferencePerformanceChart />
            </div>
          </div>
        </div>

        <footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
            <p className="font-medium">
              © {new Date().getFullYear()} ML Core v4.2 Enterprise. Built for high-scale
              intelligence.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-blue-600 transition-colors font-semibold">
                Documentation
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors font-semibold">
                Security
              </a>
              <a
                href="https://github.com/Mochrks"
                className="group flex items-center gap-2 font-bold text-slate-900 dark:text-white"
              >
                <span className="p-1 px-2 bg-blue-600/10 text-blue-600 rounded">OSS</span>
                <span className="group-hover:underline underline-offset-4">@mochrks</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
