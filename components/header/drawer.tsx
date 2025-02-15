"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { MOBILE_MENU } from "@/lib/constants";
import Link from "next/link";
import Logo from "../shared/logo";

function Drawer() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0">
          <Menu className="h-16 w-16" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
        </SheetHeader>
        <nav className="flex flex-col py-4 gap-4">
          {MOBILE_MENU.map((item: { label: string; href: string }) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-sm text-neutral-950 hover:bg-primary hover:text-white dark:text-neutral-50 dark:hover:bg-neutral-800 rounded-md"
            >
              <span onClick={() => setOpen(false)}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default Drawer;
