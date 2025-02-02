'use client'
import { useState, useCallback, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactSchema } from "@/schemas";
import { submitContact } from "@/actions/contact";
import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";



const FormContact = () => {
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            nom: '',
            prenom: '',
            email: '',
            message: '',
        }
    })


    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [captcha, setCaptcha] = useState('')


    const handleSubmit = async (values: z.infer<typeof ContactSchema>): Promise<void> => {
        startTransition(async () => {
            setLoading(true)

            const { success, message } = await submitContact(values)
            if (success) {
                setSuccess(true)
                setLoading(false)
                setMessage(message)
                form.reset()
            } else {
                setSuccess(false)
                setLoading(false)
                setErrorMessage(message)
            }
        })



    }

    return (
        <div className='text-sm'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'}>
                        <FormField
                            control={form.control}
                            name={'nom'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom de famille</FormLabel>
                                    <FormControl>
                                        <Input type={'text'} {...field} className={'py-4 px-4 h-12 rounded-2xl'} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.nom && form.formState.errors.nom.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={'prenom'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input type={'text'} {...field} className={'py-4 px-4 h-12 rounded-2xl'} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.prenom && form.formState.errors.prenom.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />


                    </div>
                    <div className={'mb-8'}>
                        <FormField
                            control={form.control}
                            name={'email'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Adresse electronique</FormLabel>
                                    <FormControl>
                                        <Input type={'email'} {...field} className={'py-4 px-4 h-12 rounded-2xl'} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.email && form.formState.errors.email.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name={'message'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <textarea {...field} rows={5} cols={30}
                                            className={'py-4 px-4 h-32 rounded-2xl w-full block border-2 border-neutral-100'}></textarea>
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.message && form.formState.errors.message.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={'mt-4'}>
                        <FormError message={errorMessage} />
                        <FormSuccess message={message} />
                    </div>
                    <div className="recaptcha block my-4">

                    </div>
                    <div className={'mt-8'}>
                        <Button type={'submit'} size={'lg'} className={'py-4 px-8 bg-primary rounded-2xl'}>
                            {loading ? 'Envoi en cours ...' : 'Envoyer votre message'}
                        </Button>
                    </div>

                </form>


            </Form>

        </div>
    )
}

export default FormContact