import Image from "next/image"

function Logo() {
    return (
        <div className="">
            <Image src="/logofadc.png" alt="logo" width={150} height={150} />
        </div>
    )
}

export default Logo