"use client"

import { TreeSidenav } from "@/components/sideBar/treeSidenav"
import { useState } from "react"

const navStructure = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: "LayoutDashboard",
    path: "/dashboard",
  },
  {
    id: "Campagnes",
    name: "Campagnes",
    icon: "Briefcase",
    path: "/campagnes",
    items: [
      {
        id: "campagnes",
        name: "Toutes les Campagnes",
        path: "/dashboard/organisation/campagnes/list",
      },
      {
        id: "create-campagnes",
        name: "Créer Campagnes",
        path: "/dashboard/organisation/campagnes/create",
      },
    ],
  },
  {
    id: "donateurs",
    name: "Donateurs",
    icon: "Users",
    path: "/dashboard/organisation/donors/list",
    items: [
      {
        id: "team-members",
        name: "Liste de donateurs",
        path: "/dashboard/organisation/donors/list",
      },
    ],
  },
  {
    id: "reports",
    name: "Reports",
    icon: "BarChart",
    path: "/reports",
  },
  {
    id: "settings",
    name: "Settings",
    icon: "Settings",
    path: "/settings",
    items: [
      {
        id: "account-settings",
        name: "Account Settings",
        path: "/settings/account",
      },
      {
        id: "notifications",
        name: "Notifications",
        path: "/settings/notifications",
      },
      {
        id: "integrations",
        name: "Integrations",
        path: "/settings/integrations",
      },
    ],
  },
]

export default function SideBar() {
  const [currentPath, setCurrentPath] = useState("/dashboard")

  return (
    <div className="p-8">
      <div className="">
        <TreeSidenav items={navStructure} currentPath={currentPath} />
        <select
          value={currentPath}
          onChange={(e) => setCurrentPath(e.target.value)}
          className="mt-4 p-2 border rounded"
        >
          <option value="/dashboard">Dashboard</option>
          <option value="/projects">Projects</option>
          <option value="/projects/all">All Projects</option>
          <option value="/projects/active">Active Projects</option>
          <option value="/projects/archived">Archived Projects</option>
          <option value="/tasks">Tasks</option>
          <option value="/tasks/my">My Tasks</option>
          <option value="/tasks/assigned">Assigned Tasks</option>
          <option value="/tasks/completed">Completed Tasks</option>
          <option value="/team">Team</option>
          <option value="/team/members">Team Members</option>
          <option value="/team/roles">Roles</option>
          <option value="/team/permissions">Permissions</option>
          <option value="/reports">Reports</option>
          <option value="/settings">Settings</option>
          <option value="/settings/account">Account Settings</option>
          <option value="/settings/notifications">Notifications</option>
          <option value="/settings/integrations">Integrations</option>
        </select>
      </div>
    </div>
  )
}

