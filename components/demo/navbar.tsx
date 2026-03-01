"use client";

import { Bell, Search, Menu, MessageSquare, Plus } from "lucide-react";
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
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

        <Button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
          <Plus className="h-4 w-4" />
          <span>New Experiment</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full ml-2">
              <Avatar className="h-9 w-9 border border-slate-200 dark:border-slate-800">
                <AvatarImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXT4ju-bqdPgSbUdjrX9bTqhWhyhvkJgxyNAxMumGeddukG0QsUfWWlgxlNh2efMMFrt5_4V6b6ijHysHCUU9bHhbiM7_njxagcl6qNfVvrtdL5b6NxHSsKdsWjHMk6CcEiO1MudOx5vw4pAjQYRVoY2W9OpTiUbjZWfsRk8WIHNUxSBI8W0qtVzY3YDRAm_9_Ynda4UYjNVVRZdbF7QjCQ9J4SZ2lX-hsMw2kzUCKq4nzpndt63TKi7Qmu1LPoNKkB7utDIYK7Y4"
                  alt="@alexchen"
                />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
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
