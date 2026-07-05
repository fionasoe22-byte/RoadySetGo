"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Crown } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-cyan-500/10 bg-slate-950">

      {/* ========================================= */}
      {/* Logo */}
      {/* ========================================= */}

      <SidebarHeader className="border-b border-cyan-500/10 px-5 py-5">

        <div className="flex flex-col items-center">

          <Image
            src="/logo.png"
            alt="RoadySetGo Logo"
            width={200}
            height={200}
            priority
            className="object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          />

          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
            AI Driving Mentor
          </p>

        </div>

      </SidebarHeader>

      {/* ========================================= */}
      {/* Navigation */}
      {/* ========================================= */}

      <SidebarContent className="px-4 py-4">

        <SidebarMenu>

          {navigation.map((item) => (

            <SidebarMenuItem key={item.title}>

              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="
                  h-13
                  rounded-2xl
                  transition-all
                  duration-300
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                  data-[active=true]:bg-cyan-500/15
                  data-[active=true]:text-cyan-400
                "
              >

                <Link href={item.href}>

                  <item.icon className="h-5 w-5" />

                  <span className="text-[15px] font-medium">
                    {item.title}
                  </span>

                </Link>

              </SidebarMenuButton>

            </SidebarMenuItem>

          ))}

        </SidebarMenu>

      </SidebarContent>

      {/* ========================================= */}
      {/* Driver Card */}
      {/* ========================================= */}

      <SidebarFooter className="border-t border-cyan-500/10 p-4">

        <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/10 p-4 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30">

              <Crown className="h-5 w-5 text-white" />

            </div>

            <div>

              <p className="font-semibold text-white">
                Fiona Soe
              </p>

              <p className="text-xs text-slate-400">
                Confident Driver
              </p>

            </div>

          </div>

        </div>

      </SidebarFooter>

    </Sidebar>
  );
}