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
    name: "campagnes",
    icon: "Briefcase",
    path: "/campagnes",
    items: [
      {
        id: "campagnes",
        name: "Toutes les Campagnes",
        path: "/compagne/all",
      },
      {
        id: "create-campagnes",
        name: "Créer Campagnes",
        path: "/dashboard/organisation/campagnes/create",
      },
      {
        id: "active-campagnes",
        name: "Campagnes Actives",
        path: "/campagnes/active",
      },
      {
        id: "archived-campagnes",
        name: "Campagnes Archivées",
        path: "/compagnes/archived",
      },
    ],
  },
  {
    id: "tasks",
    name: "Tasks",
    icon: "CheckSquare",
    path: "/tasks",
    items: [
      {
        id: "my-tasks",
        name: "My Tasks",
        path: "/tasks/my",
      },
      {
        id: "assigned-tasks",
        name: "Assigned Tasks",
        path: "/tasks/assigned",
      },
      {
        id: "completed-tasks",
        name: "Completed Tasks",
        path: "/tasks/completed",
      },
    ],
  },
  {
    id: "team",
    name: "Team",
    icon: "Users",
    path: "/team",
    items: [
      {
        id: "team-members",
        name: "Team Members",
        path: "/team/members",
      },
      {
        id: "roles",
        name: "Roles",
        path: "/team/roles",
      },
      {
        id: "permissions",
        name: "Permissions",
        path: "/team/permissions",
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

