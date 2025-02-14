"use client"

import * as React from "react"
import Logo from "./shared/logo"

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

type Props = {
    user: any
}

export function TeamSwitcher({
                                 user,
                             }: Props) {

    const role = user?.role === 'Authenticated' && 'Organisation'
    return (
        <SidebarMenu className=" rounded-lg p-1 bg-primary text-white">
            <SidebarMenuItem>
                <Link href={"/dashboard"}>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >

                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                            <Logo />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                100% FARDC
              </span>
                            <span className="truncate text-xs">{role}</span>
                        </div>

                    </SidebarMenuButton>

                </Link>

            </SidebarMenuItem>
        </SidebarMenu>
    )
}
