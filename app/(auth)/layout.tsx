import { ReactNode } from "react"
import Image from "next/image"
type Props = {
    children: ReactNode
}

function AuthLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen ">
            <div className="illustration hidden md:flex relative min-h-screen w-1/2">
                <Image src={'/fardc.png'} fill className="object-cover" alt="image illustrative" />
            </div>
            <div className="form-content w-full md:w-1/2">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout