'use client';
import { useActionState, useState } from 'react';
import {
    AtSign,
    KeyIcon,
    AlertCircle,
    EyeIcon,
    EyeOffIcon,
} from 'lucide-react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { authenticate } from '@/actions';
import Logo from '@/components/shared/logo';
import Link from 'next/link'

export default function LoginForm() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form action={dispatch} className="space-y-3 ">
            <div className="flex-1 flex flex-col justify-center items-center  rounded-lg bg-gray-50 min-h-screen px-8 lg:px-24 pb-4 pt-8">
                <div>
                    <div className={'mb-4 flex justify-center'}>
                        <Logo />
                    </div>
                    <h1 className="text-2xl font-bold text-primary text-center">
                        Connexion
                    </h1>

                    <p className="text-sm text-gray-500 text-center">
                        Connectez-vous à votre compte
                    </p>
                </div>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email ou Username
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="text"
                                name="identifier"
                                placeholder=" votre  email ou votre nom d'utilisateur"
                                required
                            />
                            <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4 relative">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Mot de passe
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="votre mot de passe"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </div>
                </div>
                <LoginButton />
                <div className="flex items-center gap-4 flex-wrap">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:underline"
                    >
                        <p>
                            Mot de passe oublié ?
                        </p>

                    </Link>
                    <p className="text-sm text-gray-500 text-center">
                        Si vous n'avez pas de compte, <Link href="/register" className="text-primary hover:underline">Inscrivez-vous</Link>
                    </p>
                </div>

                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <>
                            <AlertCircle className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full bg-primary flex items-center justify-between mb-4" >
            Se connecter {pending ? <div>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
            </div> : <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />}
        </Button>
    );
}
