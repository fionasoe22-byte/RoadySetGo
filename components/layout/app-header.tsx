"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Driver Intelligence Platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search..."
            className="pl-9"
          />
        </div>

        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <Button variant="ghost" className="gap-2">
          <UserCircle2 className="h-5 w-5" />
          Fiona
        </Button>
      </div>
    </header>
  );
}