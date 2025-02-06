
import FormContact from "@/components/form/contact"

function ContactPage() {
    return (
        <div className="container section">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8">Contactez nous </h1>

            <div
                className={
                    "section content container flex flex-col items-center gap-8 lg:flex-row"
                }
            >
                <div className={"w-full lg:w-1/2"}>
                    <h3 className={"mb-8 text-3xl font-semibold text-primary"}>
                        Votre avis compte : <br />
                        Demandez, proposer, suggérer, critiquer, complimenter, etc.
                        <span className={"bg-blue mt-2 block  h-2 w-[50%]"} />
                    </h3>
                    <p>
                        Votre voix compte — Contactez-nous et ensemble, faisons résonner notre impact !
                    </p>
                    <div className={"grid grid-cols-1 gap-8 md:grid-cols-2"}>
                        <div className={""}>
                            <h4 className={"text-md my-2 font-semibold text-primary"}>
                                Pour informations générales
                            </h4>
                            <p>
                                <a href="mailto:infos@finances.gouv.cd">infos@Pamoja.cd</a>
                            </p>
                            <p>
                                <a href="tel:+243810000000">+243 (0) 810 000 000</a>
                            </p>
                            <div className={"mt-4 h-1 w-[80%] bg-primary"} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <FormContact />
                </div>
            </div>

        </div>
    )
}

export default ContactPage