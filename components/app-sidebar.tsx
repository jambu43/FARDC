"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    ChartNoAxesColumnDecreasingIcon,
    ChartNoAxesCombinedIcon,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    ScanEyeIcon,
    Settings2,
    SquareLibraryIcon,
    SquareTerminal,
    Users2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { adminMenu} from "@/lib/constants"



type Props = {
    user: any
}

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & Props) {

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher user={user} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={adminMenu} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
