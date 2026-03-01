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
      </div>
    </div>
  );
}
