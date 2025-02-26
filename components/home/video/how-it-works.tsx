"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



interface Content {
  image: string
}


const content: Content[] = [
  {
    image:
      "/soutenir.jpeg",
  },
]



export default function HowItWorks() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
console.log(content[0].image)
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-36">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-2xl font-semibold">Comment ça fonctionne ?</h2>
          {/* <Link href="" className="inline-flex items-center px-4 py-2 rounded border border-gray-300 hover:border-gray-400 transition-colors text-sm text-primary">
            En savoir plus
          </Link> */}
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-[#e6f3f7] h-[700px] cursor-pointer">
          <Image
            src="/videos-cover.jpg"
            alt="cover de la vidéo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            onClick={() => setIsVideoOpen(true)}
          />

          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-white transition-colors"
            onClick={() => setIsVideoOpen(true)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            </svg>
            <span className="text-sm md:text-base font-medium">Lire la vidéo</span>
          </button>
        </div>
      </section>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://res.cloudinary.com/dxq5qufow/video/upload/v1740062641/hjzjspftqa3beegn6wzi.mp4"
              title="Comment fonctionne "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

