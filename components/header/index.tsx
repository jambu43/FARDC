

import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "../shared/logo"
import ProfileButton from "../shared/profile"
import Mobile from "./mobile"
import {auth} from "@/auth"

const MarketingMenu = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const DashboardMenu = [
  {
    label: "Accueil",
    href: "/dashboard/home",
  },
  {
    label: "Campagnes",
    href: "/dashboard/campaigns",
  },
  {
    label: "Contact",
    href: "/dashboard/contact",
  },
];

export default async function Header() {

    const session = await auth()
    const Menu = session ? DashboardMenu : MarketingMenu

  return (
    <header className="border-b shadow">
      <div className="hidden md:flex items-center justify-between h-16 px-4 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              {Menu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm  text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="bg-primary">
            <Link href={"/campagnes"}>Découvrir nos campagnes</Link>
          </Button>
        </div>
      </div>
      <Mobile />
    </header>
  );
}
