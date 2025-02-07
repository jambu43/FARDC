'use client'
import { useState, useLayoutEffect, useActionState, useEffect, } from "react"
import { useFormStatus } from "react-dom"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { Label } from "../../ui/label"
import { Button } from "../../ui/button"
import Form from 'next/form'
import { createOrganisationWithForm } from '@/actions/strapi/api/organisations/create'
import { ArrowRightIcon } from "lucide-react"



type Props = {
    organisation: any,
    userId: any
}

function Onboarding({ organisation, userId }: Props) {
    const [open, setOpen] = useState(false)
    const [errorMessage, dispatch] = useActionState(createOrganisationWithForm, undefined);

    useLayoutEffect(() => {
        if (!organisation) {
            setOpen(true)
        }

    }, [organisation])

    useEffect(() => {
        if (errorMessage?.statut) {
            setOpen(false)
        }
    }, [errorMessage])


    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="sr-only">
                        Onboarding
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-primary mb-2">Veuillez renseigner les informations de votre organisation</DialogTitle>
                        <DialogDescription>
                            Renseignez les informations de votre organisation pour pouvoir participer au crowdfunding.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="max-w-2xl">
                        <Form action={dispatch} className="grid grid-cols-1  gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nom de l&apos;organisation</Label>
                                <Input id="name" name="nom" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description de l&apos;organisation</Label>
                                <Textarea id="description" name="description" />
                            </div>
                            <Input readOnly type="hidden" name="users_permissions_user" value={userId} />
                            <div className=" flex justify-start">
                                <SaveButton />
                            </div>

                        </Form>

                    </div>


                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Onboarding

function SaveButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full bg-primary flex items-center justify-between mb-4" >
            Enregistrer {pending ? <div>
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
