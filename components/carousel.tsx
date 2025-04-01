"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const carouselImages = [
  { src: "/marine.jpg", alt: "Topi marine" },
  { src: "/bounce.jpg", alt: "Gambar bounceman" },
  { src: "/panjang.jpg", alt: "Gambar Baju" },
  { src: "/Celana.jpg", alt: "Gambar Celana" },
  { src: "/sepatu.jpg", alt: "Gambar Sepatu" },
]

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? carouselImages.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % carouselImages.length)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="min-w-full">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-500/70 hover:bg-blue-500 rounded-full p-2 text-white"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500/70 hover:bg-blue-500 rounded-full p-2 text-white"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

