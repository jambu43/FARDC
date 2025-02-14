"use client"

import { useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"


const slides = [
  {
    image: "/fardc.png",
    text: "",
    buttonText: "En savoir plus",
  },
  {
    image: "/slide2.jpg",
    text: "",
    buttonText: "Découvrir",
  },
  {
    image: "/slide3.jpg",
    text: "Honorer Ceux Qui Soutiennent Nos Héros",
    buttonText: "Explorer",
  },
]

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      // You can call emblaApi.scrollTo() here if you need to
    }
  }, [emblaApi])

  return (
    <main className="min-h-screen">
      <Carousel ref={emblaRef} className="w-full h-[900px]">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[900px]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white p-4">
                  <h2 className="text-4xl font-bold mb-4 text-center">{slide.text}</h2>
                  {/* <p className="text-xl mb-8 text-center max-w-2xl">{slide.text}</p> */}
                  {/* <Button
                    variant="outline"
                    size="lg"
                    className="text-black border-white hover:bg-white hover:text-black transition-colors"
                  >
                    {slide.buttonText}
                  </Button> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </main>
  )
}

