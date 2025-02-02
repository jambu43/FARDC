'use client';
import Logo from '@/components/shared/logo';
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ForgotPasswordForm() {
    return (
        <form className={'flex flex-col justify-center items-center min-h-screen'}>
            <div className={'logo mb-4'}>
                <Logo />
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
                    <button
                        type="submit"
                        className="w-full mt-4 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-200"
                    >
                        Envoyer
                    </button>
                </div>
            </div>
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