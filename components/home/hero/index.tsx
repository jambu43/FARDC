'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

function Hero() {
    return (
        <section className="lg:min-h-[500px] container section">
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:items-center">
                <motion.div
                    className="lg:w-1/2 h-full flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="text-2xl lg:text-4xl font-extrabold mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Libérez votre créativité et lancez vos campagnes grâce au crowdfunding
                    </motion.h1>
                    <motion.p
                        className="text-thin text-sm leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Nous avons déjà aidé 30 080 projets culturels et entrepreneuriaux à voir le jour. Et si c'était votre tour ?
                    </motion.p>
                    <motion.div
                        className="flex flex-col md:flex-row lg:items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link href="/campagnes">
                            <Button className="bg-primary">Découvrir nos campagnes</Button>
                        </Link>
                        <Link href="/campagnes/create">
                            <Button className="bg-secondary">Lancer une campagne</Button>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="lg:w-1/2 mb-4 lg:mb-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={"/illustration.svg"} width={500} height={500} alt={"illustration"} />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero

