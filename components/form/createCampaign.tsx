"use client"

import { useState, useTransition, useActionState } from "react"
import { motion, AnimatePresence } from "motion/react"
import type { DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AnimatedDropzone } from "@/components/form/fileUpload"
import { DateRangePicker } from "@/components/form/data-range-picker"
import { MultiSelect } from "./multi-select"
import { createCampaign } from "@/actions/strapi/api/campaigns/create"
import { uploadFile } from "@/actions/supabase/storage"
import { fi } from "date-fns/locale"


type Props = {
    categories: any
}

export default function AddCampaignForm({ categories }: Props) {
    const [state, formAction] = useActionState(createCampaign, null)
    const [bannerPreview, setBannerPreview] = useState<string | null>(null)
    const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null)
    const [dateRange, setDateRange] = useState<DateRange | undefined>()
    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [isPending, startTransition] = useTransition()
    const [featuredImage, setFeaturedImage] = useState<File | null>(null)
    const [banner, setBanner] = useState<File | null>(null)

    const handleBannerAccepted = (file: File) => {
        setBannerPreview(URL.createObjectURL(file))
    }

    const handleFeaturedImageAccepted = (file: File) => {
        setFeaturedImagePreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (formData: FormData) => {
        if (dateRange?.from && dateRange?.to) {
            formData.set("startDate", dateRange.from.toISOString())
            formData.set("endDate", dateRange.to.toISOString())

        }

        // @ts-ignore
        formData.set("categories", JSON.stringify(categoriesSelected))
        if (!banner || !featuredImage) {
            return
        }
        const bannerData = await uploadFile(banner)
        const featuredImageData = await uploadFile(featuredImage)

        if (!bannerData || !featuredImageData) {
            return
        }

        formData.set("banner", bannerData.path)
        formData.set("featuredImage", featuredImageData.path)
        startTransition(() => {
            formAction(formData)
        })
    }

    return (
        <Card className="w-full ">
            <CardHeader>
                <CardTitle>Ajouter une nouvelle campagne</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Titre de la campagne</Label>
                            <Input id="title" name="title" required />
                        </div>

                        <div>
                            <Label>Categories</Label>
                            <MultiSelect
                                options={categories}
                                // @ts-ignore
                                onValueChange={setCategoriesSelected}
                                defaultValue={categoriesSelected}
                                placeholder="Select frameworks"
                                variant="default"
                                animation={2}
                                maxCount={5}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Période de la campagne</Label>
                            <DateRangePicker onDateRangeChange={setDateRange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="goal">Montant à atteindre en (USD)</Label>
                            <Input id="goal" name="goal" type="number" required />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" rows={10} required />
                        </div>
                        <div>
                            <Label>Photo de couverture</Label>
                            <AnimatedDropzone
                                onFileAccepted={handleBannerAccepted}
                                label="Déposez une image de bannière ici, ou cliquez pour sélectionner un fichier"
                                name="banner"
                                previewUrl={bannerPreview}
                                onRemove={() => setBannerPreview(null)}
                                onChange={(file) => setBanner(file)}

                            />
                        </div>
                        <div>
                            <Label>Image mise en avant</Label>
                            <AnimatedDropzone
                                onFileAccepted={handleFeaturedImageAccepted}
                                label="Déposez l'image mise en avant ici, ou cliquez pour sélectionner un fichier"
                                name="featuredImage"
                                previewUrl={featuredImagePreview}
                                onRemove={() => setFeaturedImagePreview(null)}
                                onChange={(file) => setFeaturedImage(file)}

                            />
                        </div>

                    </div>




                    <Button type="submit" disabled={isPending} className="bg-primary">
                        {isPending ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full"
                            />
                        ) : (
                            "Ajouter la campagne"
                        )}
                    </Button>
                </form>

                <AnimatePresence>
                    {state?.error && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Alert variant="destructive" className="mt-4">
                                <AlertDescription>{state.error}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}

                    {state?.success && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Alert className="mt-4">
                                <AlertDescription>La campagne a été ajoutée avec succès!</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    )
}

