"use client"

import { TreeSidenav } from "@/components/sideBar/treeSidenav"
import { useState } from "react"
import { logout } from "@/actions/logout"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"


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
    path: "/campaigns",
    items: [
      {
        id: "campaigns",
        name: "Toutes les Campagnes",
        path: "/dashboard/organisations/campaigns/list",
      },
      {
        id: "create-campaigns",
        name: "Créer Campagnes",
        path: "/dashboard/organisations/campaigns/create",
      },
    ],
  },
  {
    id: "donateurs",
    name: "Donateurs",
    icon: "Users",
    path: "/dashboard/organisations/donateurs/list",
    items: [
      {
        id: "team-members",
        name: "Liste de donateurs",
        path: "/dashboard/organisations/donateurs/list",
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
    id: "parametres",
    name: "Paramètres",
    icon: "Settings",
    path: "/parametres",
    items: [
      {
        id: "account-settings",
        name: "Paramètres du compte",
        path: "/dashboard/organisations/parametres/compte",
      },
      {
        id: "notifications",
        name: "Notifications",
        path: "/dashboard/organisations/parametres/notifications",
      },

    ],
  },
]

export default function SideBar() {
  const [currentPath, setCurrentPath] = useState("/dashboard")

  return (
    <div className="section">
      <div className="">
        <TreeSidenav items={navStructure} currentPath={currentPath} />
        <form action={logout}>
          <Button className="w-full mt-4" type="submit">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </form>
      </div>
    </div>
  )
}

