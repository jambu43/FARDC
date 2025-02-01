"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react"
import Logo from "../shared/logo"

interface FooterSection {
  title: string
  links: Array<{ label: string; href: string }>
}

export function Footer() {
  // State for mobile accordion
  const [openSection, setOpenSection] = useState<string | null>(null)

  const footerSections: FooterSection[] = [
    {
      title: "Trouvez un projet",
      links: [
        { label: "Comment mener une campagne réussie", href: "#" },
        { label: "Nos caractéristiques", href: "#" },
        { label: "Crowdfunding", href: "#" },
        { label: "Campagne", href: "#" },
        { label: "Inscription", href: "#" },
        { label: "Blog", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Partenariats",
      links: [
        { label: "Devenir partenair", href: "#" },
        { label: "Opérations des partenaires", href: "#" },
        { label: "Autorités locales", href: "#" },
      ],
    },
    {
      title: "A props",
      links: [
        { label: "Nos services", href: "#" },
        { label: "Our manifesto", href: "#" },
        { label: "Our values", href: "#" },
        { label: "StatKisstics", href: "#" },
        { label: "Our record projects", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Press", href: "#" },
        { label: "Newsletters", href: "#" },
      ],
    },
    {
      title: "Nos engagements",
      links: [
        { label: "Santé et handicap", href: "#" },
        { label: "Indépendants", href: "#" },
        { label: "Guerre", href: "#" },
      ],
    },
  ]

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title)
  }

  return (
    <footer className="w-full bg-zinc-950 text-white">
      {/* Main footer content */}
      <div className="container px-4 py-8">
        {/* Top section with logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-2">
            <Link href="/" className="flex items-center">
              <Logo/>
            </Link>
            <p className="text-zinc-400 text-sm">Nous vous aidons à créer vos projets</p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <Link key={label} href="#" className="hover:text-zinc-400 transition-colors" aria-label={label}>
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation sections - Accordion on mobile, Grid on desktop */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b lg:border-none border-zinc-800">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-4 lg:py-0 lg:mb-4 lg:cursor-default"
              >
                <h2 className="font-semibold text-sm">{section.title}</h2>
                <ChevronDown
                  className={`h-5 w-5 lg:hidden transition-transform ${
                    openSection === section.title ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`
                ${openSection === section.title ? "max-h-96" : "max-h-0 lg:max-h-full"} 
                overflow-hidden transition-all duration-300 ease-in-out lg:block
              `}
              >
                <ul className="space-y-2 pb-4 lg:pb-0">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors block py-1 text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="text-sm text-zinc-400 space-y-2">
              <p className="text-sm">
              Pamoja est une plateforme de crowdfunding
              </p>
              <p className="text-sm">
              Adresse du siège social : 10 rue de Penthièvre 75008 Paris. Adresse électronique du contact :
              contact@Pamoja.com
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Image src="/placeholder.svg" alt="logo paiement" width={120} height={40} className="h-8 w-auto" />
              <span className="text-sm text-zinc-400">Paiements sécurisés avec les services de paiement MANGOPAY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legal footer */}
      <div className="border-t border-zinc-800">
        <div className="container px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* <select
              className="bg-transparent text-zinc-400 border border-zinc-700 rounded px-2 py-1 w-full sm:w-auto"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select> */}

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-zinc-400">
              {["Conditions d'utilisation", "Avis juridique", "Données personnelles", "Cookies", "Réclamations"].map((item) => (
                <Link key={item} href="#" className="hover:text-white transition-colors text-sm">
                  {item}
                </Link>
              ))}
            </div>

            <div className="text-sm text-zinc-400 order-last sm:order-none">© 2025 CCC</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

