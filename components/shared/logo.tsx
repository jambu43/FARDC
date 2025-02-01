import Image from "next/image"

function Logo() {
    return (
        <div className="">
            <Image src="/logo.png" alt="logo" width={200} height={150} />
        </div>
    )
}

export default Logo