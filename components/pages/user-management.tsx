"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  UserPlus,
  Mail,
  Shield,
  Search,
  Filter,
  ShieldCheck,
  Clock,
  UserCheck,
  ArrowUpRight,
  Settings,
  MoreVertical,
  Activity,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const teamMembers = [
  {
    id: "u1",
    name: "Alex Chen",
    email: "alex.chen@mlcore.io",
    role: "System Owner",
    status: "Active",
    lastActive: "Just now",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    dept: "Engineering",
  },
  {
    id: "u2",
    name: "Sarah Smith",
    email: "sarah.s@mlcore.io",
    role: "Lead Scientist",
    status: "Active",
    lastActive: "2 hours ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    dept: "Research",
  },
  {
    id: "u3",
    name: "Michael Ross",
    email: "m.ross@mlcore.io",
    role: "MLOps Engineer",
    status: "Away",
    lastActive: "5 hours ago",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100",
    dept: "Infrastructure",
  },
  {
    id: "u4",
    name: "Elena Vance",
    email: "elena.v@mlcore.io",
    role: "Data Architect",
    status: "Pending",
    lastActive: "Invited 1d ago",
    avatar: "",
    dept: "Data",
  },
];

const roleStats = [
  {
    label: "Active Members",
    value: "24",
    sub: "84% Utilization",
    icon: UserCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Pending Invites",
    value: "4",
    sub: "Expires in 48h",
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Role Requests",
    value: "12",
    sub: "Needs Review",
    icon: ShieldCheck,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export default function UserManagement() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Visual Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
              <Users className="h-3 w-3" />
              Identity & Access
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              User Management
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
              Orchestrate team access and permissions across your ML infrastructure. Manage
              invitations, role-based access control, and organization-wide security policies.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-14 px-8 font-black border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl"
            >
              EXPORT DIR
            </Button>
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-[0_10px_30px_rgba(37,99,235,0.3)] rounded-2xl gap-3 transition-all hover:-translate-y-1">
              <UserPlus className="h-5 w-5" />
              INVITE NEW MEMBER
            </Button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleStats.map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 shadow-sm group hover:shadow-xl transition-all duration-500 rounded-[32px] overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`size-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-slate-50 dark:bg-slate-900 border-none text-[9px] font-black tracking-widest px-3 py-1"
                  >
                    LIVE METRIC
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 italic">{stat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table View */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden bg-white dark:bg-slate-950">
          <CardHeader className="p-10 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-1">
                <CardTitle className="text-2xl font-black tracking-tight">
                  Active Directory
                </CardTitle>
                <CardDescription className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">
                  Total 42 members registered
                </CardDescription>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search identity..."
                    className="pl-12 h-14 w-[320px] bg-slate-50/50 border-slate-200 rounded-[20px] font-medium"
                  />
                </div>
                <Button variant="outline" className="h-14 w-14 rounded-[20px] border-slate-200">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-6 rounded-[20px] border-slate-200 font-black text-xs gap-2"
                >
                  <Settings className="h-4 w-4" />
                  ROLES
                </Button>
              </div>
            </div>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
              <TableRow className="border-slate-100 dark:border-slate-800">
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Member Platform Identity
                </TableHead>
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Permission Role
                </TableHead>
                <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Security Status
                </TableHead>
                <TableHead className="px-10 py-6 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow
                  key={member.id}
                  className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/40 dark:hover:bg-slate-900/40 transition-colors group"
                >
                  <TableCell className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <Avatar className="h-14 w-14 ring-4 ring-transparent group-hover:ring-blue-600/10 transition-all rounded-[20px] overflow-hidden">
                        <AvatarImage src={member.avatar} className="object-cover" />
                        <AvatarFallback className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg">
                          {member.name.substring(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 dark:text-white text-lg leading-tight">
                          {member.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold text-slate-500">{member.email}</span>
                          <div className="size-1 bg-slate-300 rounded-full" />
                          <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">
                            {member.dept}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                        <Shield className="h-4 w-4 text-slate-400" />
                      </div>
                      <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                        {member.role}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8">
                    <div className="space-y-2">
                      <Badge
                        className={`
                                                border-none px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider
                                                ${member.status === "Active" ? "bg-emerald-100 text-emerald-600" : ""}
                                                ${member.status === "Away" ? "bg-amber-100 text-amber-600" : ""}
                                                ${member.status === "Pending" ? "bg-slate-100 text-slate-500 italic" : ""}
                                            `}
                      >
                        {member.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <Clock className="h-3 w-3" />
                        {member.lastActive}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 py-8 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-200"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-xl text-slate-400"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Bottom Access Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-10 border-slate-200 dark:border-slate-800 rounded-[40px] flex items-center gap-8 group cursor-pointer hover:border-blue-600/30 transition-all">
            <div className="size-20 rounded-[28px] bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-2xl shadow-blue-600/20 group-hover:rotate-6 transition-transform">
              <Lock className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black tracking-tight">Security Policies</h4>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                Configure SSO, MFA, and IP-based access restrictions for your entire organization.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto font-black text-blue-600 text-xs uppercase tracking-widest gap-2"
              >
                {" "}
                Manage Security <ChevronRight className="h-3 w-3" />{" "}
              </Button>
            </div>
          </Card>

          <Card className="p-10 border-slate-200 dark:border-slate-800 rounded-[40px] flex items-center gap-8 group cursor-pointer hover:border-emerald-600/30 transition-all">
            <div className="size-20 rounded-[28px] bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-2xl shadow-emerald-600/20 group-hover:rotate-6 transition-transform">
              <Activity className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black tracking-tight">Audit Trail</h4>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                View detailed logs of all user actions, system modifications, and access attempts.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto font-black text-emerald-600 text-xs uppercase tracking-widest gap-2"
              >
                {" "}
                View Audit Logs <ChevronRight className="h-3 w-3" />{" "}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
