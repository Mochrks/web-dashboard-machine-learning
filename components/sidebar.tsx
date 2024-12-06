import Link from "next/link"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { AlertTriangleIcon, BrainCircuitIcon, ChartBarIcon, CodeIcon, DatabaseIcon, LayoutDashboard, ServerIcon, SettingsIcon, TrendingUpIcon, Workflow, XIcon } from 'lucide-react'

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    href: "/"
  },
  {
    icon: ChartBarIcon,
    label: "Model Performance",
    href: "/models"
  },
  {
    icon: DatabaseIcon,
    label: "Dataset Management",
    href: "/datasets"
  },
  {
    icon: BrainCircuitIcon,
    label: "Training Runs",
    href: "/training"
  },
  {
    icon: TrendingUpIcon,
    label: "Predictions",
    href: "/predictions"
  },
  {
    icon: AlertTriangleIcon,
    label: "Model Monitoring",
    href: "/monitoring"
  },
  {
    icon: Workflow,
    label: "Experiment Tracking",
    href: "/experiments"
  },
  {
    icon: CodeIcon,
    label: "Feature Engineering",
    href: "/features"
  },
  {
    icon: ServerIcon,
    label: "Inference Endpoints",
    href: "/endpoints"
  },
  {
    icon: SettingsIcon,
    label: "Configuration",
    href: "/settings"
  }
]

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  isDesktop: boolean
}

export default function Sidebar({ open, setOpen, isDesktop }: SidebarProps) {
  return (
    <>
      <aside className={`
        ${isDesktop ? 'w-64' : 'w-64 fixed inset-y-0 left-0 z-50 md:z-30'}
        ${!isDesktop && !open ? '-translate-x-full' : 'translate-x-0'}
        bg-background transition-transform duration-300 ease-in-out border-r
      `}>
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <span className="text-lg font-semibold">Machine Learning</span>
          {!isDesktop && (
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <XIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
        <ScrollArea className="h-[calc(100vh-3.5rem)]">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href} onClick={() => !isDesktop && setOpen(false)}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </aside>
      {!isDesktop && open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

