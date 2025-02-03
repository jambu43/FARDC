

import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "../shared/logo"
import ProfileButton from "../shared/profile"
import Mobile from "./mobile"


export default function Header() {



    return (
        <header className="border-b shadow">

            <div className="hidden md:flex items-center justify-between h-16 px-4 max-w-[1400px] mx-auto">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex-shrink-0">
                        <Logo />
                    </Link>
                    <nav>
                        <ul className="flex items-center gap-8">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/campagnes"
                                    className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Campagnes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div className="flex items-center gap-4 flex-1 max-w-xl mx-8 ">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Rechercher une campagne" className="w-full pl-10 bg-muted/50" />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <ProfileButton />
                    <Button className="bg-primary">
                        <Link href={"/campagnes/create"}>
                            Créer une campagne
                        </Link>
                    </Button>
                </div>
            </div>
            <Mobile />


        </header>
    )
}

