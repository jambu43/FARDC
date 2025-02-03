'use client';
import { useActionState } from 'react';
import Logo from '@/components/shared/logo';
import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { forgotPasswordUser } from "@/actions";
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

function ForgotPasswordForm() {
    const [errorMessage, dispatch] = useActionState(forgotPasswordUser, undefined);
    const { error, message } = errorMessage || {};

    return (
        <form action={dispatch} className={'flex flex-col justify-center items-center min-h-screen'}>
            <div className={'logo mb-4'}>
                <Link href={'/'}>
                    <Logo />
                </Link>
            </div>
            <h1 className="text-2xl font-bold text-primary text-center mb-4">
                Mot de passe oublié
            </h1>
            <p className="text-sm text-gray-500 text-center mb-4">
                Entrez votre adresse email pour réinitialiser votre mot de passe
            </p>
            <div className="w-full px-8 lg:px-24">
                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="votre email"
                            required
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div>
                    <LoginButton />
                </div>
            </div>
            {message && (
                <div className="mt-4 text-center text-green-500">
                    {message}
                </div>
            )}
            {error && (
                <div className="mt-4 text-center text-red-500">
                    {error}
                </div>
            )}
            <div>
                <p className="text-sm text-gray-500 text-center mt-4">
                    Vous avez déjà un compte ?{' '}
                    <Link
                        href="/login"
                        className="text-primary hover:text-primary-dark transition-all duration-200"
                    >
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </form>
    );
}

export default ForgotPasswordForm;

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full bg-primary flex items-center justify-between mb-4" >
            Envoyer {pending ? <div>
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