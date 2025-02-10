import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function NewsArticle() {
  const article = {
    title: "Inondations au Congo : la situation humanitaire s'aggrave",
    author: "Marie Dubois",
    date: "9 février 2025",
    readTime: "5 min de lecture",
    image:
      "/soutenir.jpeg",
    tags: ["Congo", "Inondations", "Aide humanitaire"],
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-4 text-md font-bold leading-tight md:text-md lg:text-xl">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          
          <time dateTime="2025-02-09">{article.date}</time>
          <span>{article.readTime}</span>
        </div>
      </header>

      <figure className="mb-8">
        <Image
          src={article.image || "/placeholder.svg"}
          alt="Vue aérienne des inondations au Congo"
          className="w-full rounded-lg object-cover"
          width={200}
          height={150}
        />
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          Les inondations ont touché de vastes zones du Congo, laissant des milliers de personnes sans abri.
        </figcaption>
      </figure>

      <div className="prose prose-lg mx-auto max-w-3xl">
        <p>
          Les fortes pluies qui s'abattent sur le Congo depuis plusieurs semaines ont provoqué des inondations
          dévastatrices, aggravant une situation humanitaire déjà précaire. Selon les derniers rapports, plus de 100 000
          personnes ont été déplacées, et les besoins en nourriture, eau potable et abris d'urgence ne cessent
          d'augmenter.
        </p>

        <h2>Une crise humanitaire qui s'amplifie</h2>
        <p>
          Les autorités locales, débordées par l'ampleur de la catastrophe, ont lancé un appel à l'aide internationale.
          Les organisations humanitaires sur place signalent des difficultés croissantes pour atteindre les zones les
          plus touchées, en raison de routes coupées et de ponts effondrés.
        </p>

        <blockquote>
          "Nous n'avons jamais vu des inondations d'une telle ampleur. Des villages entiers sont sous l'eau, et les gens
          ont tout perdu," témoigne Jean Mukoko, coordinateur local d'une ONG.
        </blockquote>

        <h2>Mobilisation internationale</h2>
        <p>
          Face à cette situation critique, plusieurs pays et organisations internationales ont annoncé l'envoi d'aide
          d'urgence. L'ONU a débloqué des fonds pour soutenir les opérations de secours, tandis que l'Union Européenne
          prépare l'acheminement de matériel médical et de kits d'hygiène.
        </p>

        <p>
          Cependant, les experts avertissent que l'aide actuelle reste insuffisante face à l'ampleur des besoins. Ils
          appellent à une mobilisation accrue de la communauté internationale pour éviter une aggravation de la crise
          humanitaire dans les semaines à venir.
        </p>
      </div>

      <Separator className="my-8" />

      <footer className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <Button variant="outline" size="sm">
            <Facebook className="mr-2 h-4 w-4" />
            Partager
          </Button>
          <Button variant="outline" size="sm">
            <Twitter className="mr-2 h-4 w-4" />
            Tweeter
          </Button>
          <Button variant="outline" size="sm">
            <Linkedin className="mr-2 h-4 w-4" />
            Partager
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Articles connexes</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h4 className="mb-2 font-semibold">
                  Le changement climatique intensifie les catastrophes naturelles en Afrique
                </h4>
                <p className="text-sm text-gray-600">Publié le 7 février 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="mb-2 font-semibold">Les défis de l'aide humanitaire dans les zones de conflit</h4>
                <p className="text-sm text-gray-600">Publié le 5 février 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        <div>
          <h3 className="mb-4 text-xl font-semibold">Commentaires</h3>
          <Button className="mb-4">
            <MessageCircle className="mr-2 h-4 w-4" />
            Ajouter un commentaire
          </Button>
          {/* Ici, vous pouvez ajouter une liste de commentaires si nécessaire */}
        </div>
      </footer>
    </article>
  )
}

