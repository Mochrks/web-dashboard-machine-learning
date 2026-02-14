import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Brain, MessageSquare, Zap, Cpu } from "lucide-react";

const sessions = [
  {
    id: "s1",
    name: "ResNet-50 Classifier",
    version: "v2.4.1",
    duration: "4h 12m",
    accuracy: 96.8,
    status: "Success",
    icon: Brain,
  },
  {
    id: "s2",
    name: "BERT Transformer",
    version: "v1.2.0-beta",
    duration: "12h 45m",
    accuracy: null,
    status: "Running",
    icon: MessageSquare,
  },
  {
    id: "s3",
    name: "XGBoost Ranker",
    version: "v4.0.0",
    duration: "22m",
    accuracy: 42.1,
    status: "Failed",
    icon: Zap,
  },
  {
    id: "s4",
    name: "GPT-Neo Distilled",
    version: "v1.1.0",
    duration: "48h 00m",
    accuracy: 91.2,
    status: "Success",
    icon: Cpu,
  },
];

export default function RecentTrainingSessions() {
  return (
    <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardTitle className="text-lg font-bold">Recent Model Training Sessions</CardTitle>
        <Button variant="link" className="text-blue-600 text-sm font-bold p-0">
          View All Sessions
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
            <TableRow>
              <TableHead className="px-6 py-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Model Name
              </TableHead>
              <TableHead className="px-6 py-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Version
              </TableHead>
              <TableHead className="px-6 py-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Duration
              </TableHead>
              <TableHead className="px-6 py-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Accuracy
              </TableHead>
              <TableHead className="px-6 py-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Status
              </TableHead>
              <TableHead className="px-6 py-3 text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-slate-100 dark:divide-slate-800">
            {sessions.map((session) => (
              <TableRow
                key={session.id}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all border-none"
              >
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-blue-600/10 flex items-center justify-center text-blue-600">
                      <session.icon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-sm">{session.name}</span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 text-sm font-medium">{session.version}</TableCell>
                <TableCell className="px-6 py-4 text-sm text-slate-500">
                  {session.duration}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {session.accuracy !== null ? (
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${session.accuracy > 90 ? "bg-emerald-500" : "bg-red-500"}`}
                          style={{ width: `${session.accuracy}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-xs font-bold ${session.accuracy > 90 ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {session.accuracy}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs italic text-slate-400">Calculating...</span>
                  )}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={`
                      px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wide border-none
                      ${
                        session.status === "Success"
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : session.status === "Running"
                            ? "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
                            : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                      }
                    `}
                  >
                    {session.status === "Running" && (
                      <span className="mr-1.5 size-1.5 bg-amber-500 rounded-full animate-pulse inline-block"></span>
                    )}
                    {session.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-blue-600"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
