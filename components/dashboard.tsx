"use client"

import { useState, useEffect } from "react"
import Sidebar from "./sidebar"
import Navbar from "./navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ModelPerformanceChart from './model-performance-chart'
import ModelComparisonTable from './model-comparison-table'
import PredictiveAnalyticsPanel from './predictive-analytics-panel'
import DataExplorationWidget from './data-exploration-widget'
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [selectedModels, setSelectedModels] = useState<string[]>([])

  useEffect(() => {
    setSelectedModels(['model1', 'model2']);
    setSidebarOpen(isDesktop)
  }, [isDesktop])



  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} isDesktop={isDesktop} />
      <div className="flex-1 overflow-auto">
        <Navbar onMenuButtonClick={() => setSidebarOpen(!sidebarOpen)} isDesktop={isDesktop} />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-6"> Model  Dashboard</h1>
          <Tabs defaultValue="performance" className="w-full">
            <TabsList>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
              <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
              <TabsTrigger value="exploration">Data Exploration</TabsTrigger>
            </TabsList>
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Model Performance Tracker</CardTitle>
                  <CardDescription>Compare the performance of selected models over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ModelPerformanceChart selectedModels={selectedModels} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comparison">
              <Card>
                <CardHeader>
                  <CardTitle>Model Comparison</CardTitle>
                  <CardDescription>Detailed comparison of selected models</CardDescription>
                </CardHeader>
                <CardContent>
                  <ModelComparisonTable selectedModels={selectedModels} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="predictive">
              <Card>
                <CardHeader>
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>Future performance predictions based on historical data</CardDescription>
                </CardHeader>
                <CardContent>
                  <PredictiveAnalyticsPanel selectedModels={selectedModels} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="exploration">
              <Card>
                <CardHeader>
                  <CardTitle>Data Exploration</CardTitle>
                  <CardDescription>Interactive widget for exploring model data</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataExplorationWidget selectedModels={selectedModels} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

