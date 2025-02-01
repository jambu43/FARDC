"use client"

import { useState } from "react"
import Drawer from "./drawer"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "../shared/logo"

export default function Header() {
    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <header className="border-b">

            <div className="hidden md:flex items-center justify-between h-16 px-4 max-w-[1400px] mx-auto">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex-shrink-0">
                        <Logo />
                    </Link>
                    <Link
                        href="/campagnes"
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Découvrir nos campagnes
                    </Link>
                </div>

                <div className="flex items-center gap-4 flex-1 max-w-xl mx-8 ">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Rechercher une campagne" className="w-full pl-10 bg-muted/50" />
                    </div>
                </div>

                <div className="flex items-center gap-4">

                    <Button variant="ghost">
                        <Link href={"/login"}>
                            Se connecter
                        </Link>
                    </Button>
                    <Button className="bg-primary">Créer une campagne</Button>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between h-16 px-4">
                {!isSearchActive ? (
                    <>
                        <Drawer />

                        <Link href="/" className="flex-shrink-0">
                            <Logo />
                        </Link>

                        <Button variant="ghost" size="icon" className="shrink-0" onClick={() => setIsSearchActive(true)}>
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                    </>
                ) : (
                    <div className="flex items-center gap-2 w-full px-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Rechercher une campagne" className="w-full pl-10" autoFocus />
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsSearchActive(false)}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close search</span>
                        </Button>
                    </div>
                )}
            </div>
        </header>
    )
}

