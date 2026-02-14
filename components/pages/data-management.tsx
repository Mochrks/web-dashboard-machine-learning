"use client";

import { useState } from "react";
import Sidebar from "../demo/sidebar";
import Navbar from "../demo/navbar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  HardDrive,
  Database,
  RefreshCcw,
  ShieldCheck,
  CloudDownload,
  Upload,
  Filter,
  ArrowUpDown,
  Eye,
  Wrench,
  MoreVertical,
  ChevronRight,
  FileText,
  Binary,
  FolderArchive,
  AlertTriangle,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Use specific Lucide icons that exist
// ShieldCheck instead of HealthAndSafety
// Database instead of TableChart
// RefreshCcw instead of Sync
// CloudDownload instead of CloudSync

const stats = [
  {
    id: "storage",
    title: "Total Storage",
    value: "1.24 TB",
    icon: HardDrive,
    change: "+12%",
    changeColor: "text-emerald-500",
  },
  {
    id: "datasets",
    title: "Dataset Count",
    value: "48",
    icon: Database,
    change: "+4",
    changeColor: "text-emerald-500",
  },
  {
    id: "jobs",
    title: "Active Jobs",
    value: "3 Tasks",
    icon: RefreshCcw,
    change: "In Progress",
    changeColor: "text-amber-500",
  },
  {
    id: "integrity",
    title: "Data Integrity",
    value: "99.4%",
    icon: ShieldCheck,
    change: "Healthy",
    changeColor: "text-emerald-500",
  },
];

const datasets = [
  {
    id: "ds1",
    name: "customer_churn_v2.csv",
    type: "CSV",
    size: "142.5 MB",
    source: "AWS S3",
    sourceBg: "bg-blue-50 text-blue-600",
    health: 94,
    icon: FileText,
    iconColor: "text-amber-500",
  },
  {
    id: "ds2",
    name: "training_logs_parquet",
    type: "Parquet",
    size: "2.1 GB",
    source: "Local",
    sourceBg: "bg-purple-50 text-purple-600",
    health: 68,
    icon: Binary,
    iconColor: "text-blue-500",
  },
  {
    id: "ds3",
    name: "image_classification_coco",
    type: "JSON/ZIP",
    size: "18.4 GB",
    source: "GCP Bucket",
    sourceBg: "bg-emerald-50 text-emerald-600",
    health: 100,
    icon: FolderArchive,
    iconColor: "text-slate-500",
  },
];

export default function DataManagement() {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Breadcrumbs & Title */}
        {/* Breadcrumbs & Title */}
        <div className="flex items-end justify-between">
          <div>
            <nav className="flex text-xs font-medium text-slate-400 mb-2 gap-2">
              <a className="hover:text-blue-600" href="#">
                Home
              </a>
              <span>/</span>
              <span className="text-slate-600 dark:text-slate-300">Data Management</span>
            </nav>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Dataset Browser
            </h2>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-slate-200 dark:border-slate-800"
            >
              <CloudDownload className="h-4 w-4" />
              Sync Cloud Sources
            </Button>
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Upload className="h-4 w-4" />
              Upload New Dataset
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-bold flex items-center gap-1 ${stat.changeColor}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-medium">{stat.title}</p>
                <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table Section */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-slate-500">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-500">
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-xs font-bold text-slate-600 h-8">
                Export CSV
              </Button>
              <Button
                variant="ghost"
                className="text-xs font-bold text-red-600 hover:bg-red-50 h-8"
              >
                Bulk Delete
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
              <TableRow>
                <TableHead className="w-10 px-6">
                  <Checkbox />
                </TableHead>
                <TableHead className="px-6 py-4 font-semibold text-slate-500">
                  Dataset Name
                </TableHead>
                <TableHead className="px-6 py-4 font-semibold text-slate-500">Type</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-slate-500">Size</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-slate-500">Source</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-slate-500">Health</TableHead>
                <TableHead className="px-6 py-4 font-semibold text-slate-500 text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-100 dark:divide-slate-800">
              {datasets.map((ds) => (
                <TableRow
                  key={ds.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors border-none"
                >
                  <TableCell className="px-6">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <ds.icon className={`h-4 w-4 ${ds.iconColor}`} />
                      <span className="font-medium text-sm">{ds.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-slate-500 text-sm">{ds.type}</TableCell>
                  <TableCell className="px-6 py-4 text-slate-500 text-sm">{ds.size}</TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge className={`${ds.sourceBg} border-none text-[10px] uppercase font-bold`}>
                      {ds.source}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div
                          className={`${ds.health > 80 ? "bg-emerald-500" : "bg-amber-500"} h-full`}
                          style={{ width: `${ds.health}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-[10px] font-bold ${ds.health > 80 ? "text-emerald-600" : "text-amber-600"}`}
                      >
                        {ds.health}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-blue-600"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-blue-600"
                      >
                        <Wrench className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
            <p className="text-xs text-slate-500">Showing 1 to 3 of 48 datasets</p>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="text-xs border-slate-200" disabled>
                Previous
              </Button>
              <Button size="sm" className="text-xs bg-blue-600 text-white">
                1
              </Button>
              <Button variant="outline" size="sm" className="text-xs border-slate-200">
                2
              </Button>
              <Button variant="outline" size="sm" className="text-xs border-slate-200">
                Next
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transformations */}
          <Card className="lg:col-span-1 border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-600" />
                Quick Transformations
              </CardTitle>
            </CardHeader>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-between h-auto p-4 border-slate-100 hover:border-blue-500/30 hover:bg-blue-50/50 group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <p className="text-sm font-semibold">Handle Missing Values</p>
                    <p className="text-[10px] text-slate-500">Mean, median or custom imputation</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </Button>
              {/* More buttons... */}
            </div>
          </Card>

          {/* Data Preview */}
          <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <CardTitle className="text-lg font-bold">Preview: customer_churn_v2.csv</CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  Showing first 5 of 45,210 rows
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1">
              <div className="overflow-x-auto">
                <Table className="text-[12px]">
                  <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
                    <TableRow>
                      <TableHead className="font-bold border-r">CustomerID</TableHead>
                      <TableHead className="font-bold border-r">Age</TableHead>
                      <TableHead className="font-bold border-r">Subscription</TableHead>
                      <TableHead className="font-bold border-r">Tenure</TableHead>
                      <TableHead className="font-bold border-r">Usage_GB</TableHead>
                      <TableHead className="font-bold">Churn</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="border-r">8829-XJ</TableCell>
                      <TableCell className="border-r">34</TableCell>
                      <TableCell className="border-r text-blue-600 font-medium">Premium</TableCell>
                      <TableCell className="border-r">24 mo</TableCell>
                      <TableCell className="border-r">450.2</TableCell>
                      <TableCell className="text-emerald-500 font-bold">No</TableCell>
                    </TableRow>
                    {/* More rows... */}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex-1 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <p className="text-[11px] font-medium text-slate-600 flex-1">
                    Column 'Age' contains missing values (NaN). Recommended: Mean Imputation.
                  </p>
                </div>
                <Button size="sm" className="bg-blue-600 text-white text-[10px] h-8 px-4">
                  Apply Quick Fix
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
