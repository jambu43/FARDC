'use client'
import { useState } from 'react'
import Drawer from './drawer'
import { Search, X } from 'lucide-react'
import Logo from '../shared/logo'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'

function Mobile() {
    const [isSearchActive, setIsSearchActive] = useState(false)
    return (

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
                    <Button variant="ghost" size="icon" onClick={() => setIsSearchActive(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close search</span>
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Mobile