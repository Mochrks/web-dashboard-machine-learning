"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BookOpen,
  MessageCircle,
  FileText,
  Github,
  PlayCircle,
  ArrowRight,
  Terminal,
  ExternalLink,
  LifeBuoy,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HelpCenter() {
  return (
    <div className="p-8">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Hero Search Section */}
        <div className="text-center space-y-8 py-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] -z-10 rounded-full"></div>
          <div className="space-y-4">
            <Badge className="bg-blue-600/10 text-blue-600 border-none font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              How can we <span className="text-blue-600">help?</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              Search our extensive documentation, watch tutorials, or connect with our specialized
              support team.
            </p>
          </div>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 transition-colors group-focus-within:text-blue-600" />
            <Input
              placeholder="Search articles, guides, or API references..."
              className="h-16 pl-16 pr-6 text-lg font-medium border-slate-200 shadow-2xl shadow-blue-500/5 rounded-3xl transition-all focus-visible:ring-offset-0 focus-visible:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Documentation",
              desc: "In-depth guides on architecture, models, and data pipelines.",
              icon: BookOpen,
              color: "text-blue-600",
              bg: "bg-blue-600/10",
            },
            {
              title: "Video Tutorials",
              desc: "Step-by-step visual lessons from zero to production deployment.",
              icon: PlayCircle,
              color: "text-indigo-600",
              bg: "bg-indigo-600/10",
            },
            {
              title: "API Reference",
              desc: "Technical specifications for our RESTful and gRPC endpoints.",
              icon: Terminal,
              color: "text-slate-900 dark:text-white",
              bg: "bg-slate-900/10 dark:bg-white/10",
            },
          ].map((cat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-slate-800 p-8 hover:shadow-2xl transition-all group cursor-pointer"
            >
              <CardContent className="p-0 space-y-6">
                <div
                  className={`p-4 rounded-2xl w-fit ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-500`}
                >
                  <cat.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black">{cat.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{cat.desc}</p>
                </div>
                <Button variant="link" className="p-0 text-blue-600 font-bold gap-2">
                  Browse Section <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Articles & Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tight">Trending Topics</h2>
            <div className="space-y-4">
              {[
                "Deploying LLMs to edge devices with ML Core",
                "Optimizing training costs for multi-GPU clusters",
                "Advanced feature engineering in Feature Store",
                "Secure API authentication strategies",
              ].map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-2 bg-blue-600 rounded-full"></div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{topic}</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tight">Direct Support</h2>
            <Card className="bg-slate-900 border-slate-800 p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/30 blur-3xl -z-0"></div>
              <CardContent className="p-0 relative z-10 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 size-14 rounded-2xl flex items-center justify-center shrink-0">
                    <LifeBuoy className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black">24/7 Priority Concierge</h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                      Enterprise customers gain direct access to our core architecture team for
                      mission-critical issues.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1 h-14 bg-white text-slate-900 hover:bg-slate-100 font-black rounded-2xl shadow-2xl">
                    OPEN SUPPORT TICKET
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-14 border-slate-700 font-bold rounded-2xl text-white hover:bg-slate-800"
                  >
                    SCHEDULE CALL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Section */}
        <div className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
          <p className="text-slate-500 font-bold text-sm">
            Need more? Join our public developer community.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-slate-200">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-slate-200">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-slate-200">
              <FileText className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
