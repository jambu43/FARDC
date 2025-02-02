import * as z from 'zod';

export const ContactSchema = z.object({
    nom: z.string().min(3,{
        message: 'Le nom doit avoir au moins 3 caractères'
    }).max(50, {
        message: 'Le nom doit être compris entre 3 et 50 caractères'
    }),
    prenom: z.string().min(3, {
        message: 'Le prénom doit avoir au moins 3 caractères'
    }).max(50, {
        message: 'Le prénom doit être compris entre 3 et 50 caractères'
    }),
    email: z.string().email({
        message: 'L\'email n\'est pas valide'
    }),
    message: z.string().min(3, {
        message: 'Le message doit avoir au moins 3 caractères'
    }).max(500, {
        message: 'Le message doit être compris entre 3 et 500 caractères'
    }),
})

export const NewsLetterSchema = z.object({
    email:z.string().email({
        message:'L\'email n\'est pas valide'
    })
})