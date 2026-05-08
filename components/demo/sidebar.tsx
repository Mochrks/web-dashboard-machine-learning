import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  LayoutDashboard,
  Database,
  Brain,
  CheckCircle,
  CloudUpload,
  Activity,
  Package,
  History,
  Cpu,
  FileText,
  Key,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  XIcon,
  ChevronRight,
  User,
} from "lucide-react";

const sidebarItems = [
  {
    group: "Main",
    items: [
      { icon: LayoutDashboard, label: "Overview", href: "/" },
      { icon: Database, label: "Data Management", href: "/data" },
      { icon: Brain, label: "Model Training", href: "/training" },
      { icon: CheckCircle, label: "Model Evaluation", href: "/evaluation" },
      { icon: CloudUpload, label: "Deployment", href: "/deployment" },
      { icon: Activity, label: "Monitoring", href: "/monitoring" },
      { icon: Package, label: "Feature Store", href: "/features" },
      { icon: History, label: "Experiment Tracking", href: "/experiments" },
      { icon: Cpu, label: "AutoML", href: "/automl" },
      { icon: FileText, label: "Notebooks", href: "/notebooks" },
    ],
  },
  {
    group: "System",
    items: [
      { icon: Key, label: "API Access", href: "/api" },
      { icon: Users, label: "User Management", href: "/users" },
      { icon: CreditCard, label: "Billing", href: "/billing" },
      { icon: Settings, label: "Settings", href: "/settings" },
      { icon: HelpCircle, label: "Help", href: "/help" },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isDesktop: boolean;
}

export default function Sidebar({ open, setOpen, isDesktop }: SidebarProps) {
  return (
    <>
      <aside
        className={`
        ${isDesktop ? "w-64" : "fixed inset-y-0 left-0 z-50 w-64"}
        ${!isDesktop && !open ? "-translate-x-full" : "translate-x-0"}
        flex flex-col bg-slate-950 text-slate-300 transition-transform duration-300 ease-in-out border-r border-slate-800
      `}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 size-10 rounded-lg flex items-center justify-center text-white shrink-0">
            <Activity className="h-6 w-6" />
          </div>
          <div className="overflow-hidden">
            <h1 className="font-bold text-lg leading-tight text-white truncate">ML Core</h1>
            <p className="text-xs text-slate-500 font-medium truncate">Enterprise Edition</p>
          </div>
          {!isDesktop && (
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-slate-400"
              onClick={() => setOpen(false)}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          )}
        </div>

        <ScrollArea className="flex-1">
          <nav className="px-4 py-2 space-y-6">
            {sidebarItems.map((group, idx) => (
              <div key={idx} className="space-y-1">
                <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
                  {group.group}
                </p>
                {group.items.map((item, itemIdx) => (
                  <Button
                    key={itemIdx}
                    variant="ghost"
                    className="w-full justify-start text-sm font-medium hover:bg-slate-900 hover:text-white group"
                    asChild
                  >
                    <Link href={item.href} onClick={() => !isDesktop && setOpen(false)}>
                      <item.icon className="mr-3 h-4 w-4 text-slate-500 group-hover:text-blue-500" />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-slate-800 mt-auto">
          <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
            <div className="h-8 w-8 rounded-full ring-2 ring-slate-800 flex items-center justify-center bg-slate-800 text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">Alex Chen</p>
              <p className="text-[10px] text-slate-500 truncate">Lead Data Scientist</p>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-500" />
          </div>
        </div>
      </aside>
      {!isDesktop && open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
