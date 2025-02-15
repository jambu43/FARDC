import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import FormContact from "@/components/form/contact"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 mb-28">
      {/* Contact Info Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden shadow-lg hover:bg-primary hover:text-white rounded-2xl">
          <CardContent className="px-6 py-14">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Mail className="h-9 w-9 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Adresse Email</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <Link href={"mailto:contact100fardc@.com"}>contact100fardc@.com</Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg hover:bg-primary hover:text-white rounded-2xl">
          <CardContent className="p-6 py-14">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Phone className="h-9 w-9 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Téléphone</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>+243 00 0 000 000</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg hover:bg-primary hover:text-white rounded-2xl">
          <CardContent className="p-6 py-14">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <MapPin className="h-9 w-9 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Adresse</h3>
            <p className="text-sm text-muted-foreground">
            Kinshasa, République Démocratique du Congo
              <br />
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form Section */}
      <div className="grid gap-8 lg:grid-cols-2 mt-28">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-full">
          <Image
            src="/slide2.jpg"
            alt="Customer service representative"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <p className="mb-2 text-sm font-medium text-primary">Restons en Contact</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Prenez contact avec nous</h2>
          </div>

          <FormContact />
        </div>
      </div>
    </div>
  )
}

