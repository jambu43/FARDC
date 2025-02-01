'use client'
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Créer un nouveau compte</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Ou{" "}
                        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            connectez-vous à votre compte existant
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <Label htmlFor="name">Nom complet</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="mt-1"
                                placeholder="Nom complet"
                            />
                        </div>
                        <div>
                            <Label htmlFor="email-address">Adresse e-mail</Label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1"
                                placeholder="Adresse e-mail"
                            />
                        </div>
                        <div className="relative">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                required
                                className="mt-1"
                                placeholder="Mot de passe"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                            Créer un compte
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

