"use client";

import { useState, useEffect } from "react";
import Sidebar from "../demo/sidebar";
import Navbar from "../demo/navbar";
import Footer from "./footer";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Sync sidebar state with screen size
  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} isDesktop={isDesktop} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar onMenuButtonClick={() => setSidebarOpen(!sidebarOpen)} isDesktop={isDesktop} />

        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
