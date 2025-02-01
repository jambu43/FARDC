'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordForm() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Réinitialiser votre mot de passe</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <Label htmlFor="email-address">Adresse e-mail</Label>
                            <Input id="email-address" name="email" type="email" autoComplete="email" required className="mt-1" placeholder="Adresse e-mail" />
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full">
                            Envoyer le lien de réinitialisation
                        </Button>
                    </div>
                </form>
                <div className="text-center">
                    <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Retour à la connexion
                    </Link>
                </div>
            </div>
        </div>
    )
}
