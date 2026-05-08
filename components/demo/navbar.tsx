"use client";

import { Bell, Search, Menu, MessageSquare, Plus, User, Check, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "./mode-toggle";

interface NavbarProps {
  onMenuButtonClick: () => void;
  isDesktop: boolean;
}

export default function Navbar({ onMenuButtonClick, isDesktop }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-8 shrink-0">
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        {!isDesktop && (
          <Button variant="ghost" size="icon" className="mr-2" onClick={onMenuButtonClick}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        )}
        <div className="relative w-full max-w-sm hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search models, datasets, or sessions..."
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
              <DropdownMenuLabel className="p-4 font-bold border-b">
                Notifications
              </DropdownMenuLabel>
              <div className="max-h-80 overflow-y-auto">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-4 border-b last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <div className="flex gap-3">
                      <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shrink-0">
                        <Check className="size-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Model Training Complete</p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Your experiment "BERT-Large-FineTune" has finished training with 98.2%
                          accuracy.
                        </p>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                          <Clock className="size-3" />
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="ghost"
                className="w-full rounded-none border-t text-xs text-blue-600 hover:text-blue-700"
              >
                View all notifications
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
              <DropdownMenuLabel className="p-4 font-bold border-b">Messages</DropdownMenuLabel>
              <div className="max-h-80 overflow-y-auto">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="p-4 border-b last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <div className="flex gap-3">
                      <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                        <User className="size-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">Sarah Jenkins</p>
                          <span className="text-[10px] text-slate-400">12:45 PM</span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          Hey Alex, can you review the latest dataset version?
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="ghost"
                className="w-full rounded-none border-t text-xs text-blue-600 hover:text-blue-700"
              >
                Go to Messenger
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

        <Button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
          <Plus className="h-4 w-4" />
          <span>New Experiment</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-9 w-9 rounded-full ml-2 p-0 flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Alex Chen</p>
                <p className="text-xs leading-none text-muted-foreground">Lead Data Scientist</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </header>
  );
}
