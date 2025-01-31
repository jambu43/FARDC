import Image from "next/image"

function Logo() {
    return (
        <div>
            <Image src="/logo.jpeg" alt="logo" width={200} height={150} />
        </div>
    )
}

export default Logo