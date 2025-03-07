import { ReactNode } from 'react'
import { ImageKitProvider, IKImage } from "imagekitio-next";


const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

function ImagesProvider() {
    return (
        <ImageKitProvider urlEndpoint={urlEndpoint}></ImageKitProvider>
    )
}

export default ImagesProvider