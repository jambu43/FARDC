import {
  ChartNoAxesCombinedIcon,

  Users2,
 Briefcase
} from "lucide-react";
export const MOBILE_MENU = [
  {
    label: "Créer une campagne",
    href: "/campaigns/create",
  },
  {
    label: "Découvrir nos campaigns",
    href: "/campaigns",
  },
  {
    label: "Connexion",
    href: "/login",
  },
  {
    label: "Inscription",
    href: "/register",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];


export const adminMenu = [
  {
    title: "Campagnes",
    url: "#",
    icon: Briefcase,
    isActive: true,
    items: [
      {
        title: "Créer une campagne",
        url: "/dashboard/campagnes/create",
      },
      {
        title: "Mes campagnes",
        url: "/dashboard/campagnes",
      },
    ],
  },
  {
    title: "Donateurs",
    url: "#",
    icon: Users2,
    items: [
      {
        title: "Liste de donateurs",
        url: "/dashboard/formulaires/baseline-surveys",
      },
    ],
  },

  {
    title: "Rapports",
    url: "#",
    icon: ChartNoAxesCombinedIcon,
    items: [
      {
        title: "Rapports Globaux",
        url: "/dashboard/rapports/globaux",
      },

    ],
  },
];
