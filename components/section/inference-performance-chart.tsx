import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InferencePerformanceChart() {
  return (
    <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-8">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div>
          <CardTitle className="text-lg font-bold">Inference Latency vs. Throughput</CardTitle>
          <CardDescription className="text-sm text-slate-500">
            Real-time performance across production clusters
          </CardDescription>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <Button
            variant="ghost"
            size="sm"
            className="px-3 h-8 text-xs font-bold bg-white dark:bg-slate-700 shadow-sm"
          >
            Latency
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-3 h-8 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
          >
            Throughput
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full flex flex-col gap-4">
          <svg className="w-full h-full" viewBox="0 0 800 200">
            {/* Chart Grid Lines */}
            <line
              className="stroke-slate-100 dark:stroke-slate-800"
              strokeDasharray="4 4"
              x1="0"
              x2="800"
              y1="40"
              y2="40"
            ></line>
            <line
              className="stroke-slate-100 dark:stroke-slate-800"
              strokeDasharray="4 4"
              x1="0"
              x2="800"
              y1="80"
              y2="80"
            ></line>
            <line
              className="stroke-slate-100 dark:stroke-slate-800"
              strokeDasharray="4 4"
              x1="0"
              x2="800"
              y1="120"
              y2="120"
            ></line>
            <line
              className="stroke-slate-100 dark:stroke-slate-800"
              strokeDasharray="4 4"
              x1="0"
              x2="800"
              y1="160"
              y2="160"
            ></line>

            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0"></stop>
              </linearGradient>
            </defs>

            {/* Area Path */}
            <path
              d="M0,180 L40,160 L80,170 L120,130 L160,140 L200,100 L240,110 L280,70 L320,90 L360,50 L400,60 L440,30 L480,45 L520,25 L560,35 L600,15 L640,25 L680,10 L720,20 L760,15 L800,5 L800,200 L0,200 Z"
              fill="url(#chartGradient)"
            ></path>

            {/* Main Line */}
            <path
              d="M0,180 L40,160 L80,170 L120,130 L160,140 L200,100 L240,110 L280,70 L320,90 L360,50 L400,60 L440,30 L480,45 L520,25 L560,35 L600,15 L640,25 L680,10 L720,20 L760,15 L800,5"
              fill="none"
              stroke="#2563eb"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></path>
          </svg>
          <div className="flex justify-between px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>23:59</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
