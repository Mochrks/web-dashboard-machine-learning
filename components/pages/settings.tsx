"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  User,
  Bell,
  Lock,
  Globe,
  Database,
  HardDrive,
  Save,
  RotateCcw,
  Smartphone,
  Mail,
  ShieldAlert,
  Key,
  Cpu,
  Cloud,
  Fingerprint,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "regional", label: "Regional", icon: Globe },
  { id: "infrastructure", label: "Infrastructure", icon: Database },
  { id: "storage", label: "Storage", icon: HardDrive },
];

export default function AppSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
                <CardTitle className="text-lg font-black tracking-tight">Public Profile</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Personal information and branding
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest">
                      Full Name
                    </label>
                    <Input defaultValue="Alex Chen" className="h-11 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest">
                      Display Handle
                    </label>
                    <Input defaultValue="@alexchen_ml" className="h-11 border-slate-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-500 tracking-widest">
                    Bio / Summary
                  </label>
                  <Input
                    defaultValue="Lead Data Scientist at ML Core Enterprise."
                    className="h-11 border-slate-200"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "notifications":
        return (
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
                <CardTitle className="text-lg font-black tracking-tight">
                  Notification Channels
                </CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Manage how you receive updates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Email Notifications
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        Daily summaries and model deployment alerts.
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                      <Smartphone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Push Notifications
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        Real-time alerts for critical infrastructure errors.
                      </p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "security":
        return (
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
                <CardTitle className="text-lg font-black tracking-tight">Access Control</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Secure your account and sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                      <Fingerprint className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Two-Factor Authentication
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        Add an extra layer of security to your workspace.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="font-bold border-slate-200 uppercase text-[10px] px-4"
                  >
                    Enable 2FA
                  </Button>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                      <ShieldAlert className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">Active Sessions</h4>
                      <p className="text-sm text-slate-500 font-medium">
                        Signed in on 3 devices: Windows, macOS, iPhone.
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-red-500 font-bold uppercase text-[10px]">
                    Log out all
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "regional":
        return (
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
                <CardTitle className="text-lg font-black tracking-tight">Localization</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Workspace language and time zone
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest">
                      Primary Language
                    </label>
                    <Select defaultValue="en">
                      <SelectTrigger className="h-11 border-slate-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English (US)</SelectItem>
                        <SelectItem value="id">Bahasa Indonesia</SelectItem>
                        <SelectItem value="jp">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-widest">
                      Time Zone
                    </label>
                    <Select defaultValue="utc+7">
                      <SelectTrigger className="h-11 border-slate-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc+7">(GMT+07:00) Jakarta</SelectItem>
                        <SelectItem value="utc-8">(GMT-08:00) Pacific Time</SelectItem>
                        <SelectItem value="utc+0">UTC Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "infrastructure":
        return (
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
                <CardTitle className="text-lg font-black tracking-tight">
                  Cluster Configuration
                </CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Advanced infrastructure orchestration
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                      <Cpu className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Auto-Scaling Nodes
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        Provision new GPU instances based on demand surge.
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <Cloud className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Multi-Cloud Bridge
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        Sync workloads across AWS, GCP, and Azure environments.
                      </p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "storage":
        return (
          <div className="space-y-6">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 p-6">
                <CardTitle className="text-lg font-black tracking-tight">Data Retention</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Backup and artifacts persistence policy
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest border-l-2 border-blue-600 pl-3">
                    Artifact Retention
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 italic">
                      Delete datasets unused for more than 90 days.
                    </p>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest border-l-2 border-emerald-600 pl-3">
                    Volume Backups
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 italic">
                      Automatic nightly snapshots of persistent storage volumes.
                    </p>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
              <Settings className="h-3 w-3" />
              Configuration
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              System Settings
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Control your platform defaults, security, and global configurations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full justify-start h-14 rounded-2xl font-black transition-all group px-6 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/30"
                    : "text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <tab.icon
                  className={`h-5 w-5 mr-4 transition-transform ${activeTab === tab.id ? "scale-110" : "group-hover:scale-110 opacity-50"}`}
                />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="ml-auto size-2 bg-white rounded-full animate-pulse" />
                )}
              </Button>
            ))}
          </aside>

          {/* Main Settings Content */}
          <div className="lg:col-span-3 space-y-8 min-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderContent()}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-8 border-t border-dashed border-slate-200 dark:border-slate-800 mt-12">
              <Button
                variant="outline"
                className="h-12 px-8 font-black border-slate-200 dark:border-slate-800 gap-2 transition-all hover:bg-white dark:hover:bg-slate-900"
              >
                <RotateCcw className="h-4 w-4" />
                DISCARD
              </Button>
              <Button className="h-12 px-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black shadow-2xl gap-2 transition-all hover:-translate-y-0.5 active:scale-95">
                <Save className="h-4 w-4" />
                SAVE CHANGES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
