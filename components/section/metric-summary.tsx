import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Rocket, Database, Target, Server } from "lucide-react";

const metrics = [
  {
    id: "active-models",
    title: "Active Models",
    value: "24",
    change: "+2 from last week",
    icon: Rocket,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-600/10",
  },
  {
    id: "data-processed",
    title: "Data Processed",
    value: "1.2 TB",
    change: "+15.2% this month",
    icon: Database,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-600/10",
  },
  {
    id: "avg-accuracy",
    title: "Avg. Accuracy",
    value: "94.2%",
    change: "+0.5% optimization",
    icon: Target,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-600/10",
  },
  {
    id: "system-health",
    title: "System Health",
    value: "99.9%",
    change: "Status: Operational",
    status: "online",
    icon: Server,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-600/10",
  },
];

export default function MetricSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric) => (
        <Card
          key={metric.id}
          className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group hover:border-blue-500/50 transition-all"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {metric.title}
              </p>
              <div className={`p-2 rounded-lg ${metric.iconBg} ${metric.iconColor}`}>
                <metric.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{metric.value}</h3>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-500">
              {metric.status === "online" && (
                <span className="size-2 bg-emerald-500 rounded-full animate-pulse mr-1"></span>
              )}
              {metric.id === "system-health" ? (
                <span className="text-slate-500">{metric.change}</span>
              ) : (
                <>
                  <TrendingUp className="h-3 w-3" />
                  <span>{metric.change}</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
