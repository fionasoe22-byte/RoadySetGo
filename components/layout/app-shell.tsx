"use client";

import { ReactNode } from "react";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";

interface Props {
  children: ReactNode;
}

export function AppShell({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        <main className="flex-1 p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}