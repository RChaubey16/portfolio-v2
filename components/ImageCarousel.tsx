'use client'

import { useState, useEffect } from 'react'
import Image from './Image'

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentBatch, setCurrentBatch] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const desktopBatches = Math.ceil(images.length / 4)
  const mobileBatches = Math.ceil(images.length / 2)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const totalBatches = isMobile ? mobileBatches : desktopBatches

  const goToPrevious = () => {
    setCurrentBatch((prev) => (prev - 1 + totalBatches) % totalBatches)
  }

  const goToNext = () => {
    setCurrentBatch((prev) => (prev + 1) % totalBatches)
  }

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        {/* Mobile view - 2 images per batch */}
        <div
          className="flex transition-transform duration-500 ease-in-out md:hidden"
          style={{
            transform: `translateX(-${currentBatch * 100}%)`,
          }}
        >
          {Array.from({ length: mobileBatches }).map((_, batchIndex) => (
            <div key={batchIndex} className="grid w-full flex-none grid-cols-1 gap-4 p-4">
              {images.slice(batchIndex * 2, batchIndex * 2 + 2).map((image, imageIndex) => (
                <div key={imageIndex} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src={image.src} alt={image.alt} className="object-cover" fill />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop view - 4 images per batch */}
        <div
          className="hidden transition-transform duration-500 ease-in-out md:flex"
          style={{
            transform: `translateX(-${currentBatch * 100}%)`,
          }}
        >
          {Array.from({ length: desktopBatches }).map((_, batchIndex) => (
            <div key={batchIndex} className="grid w-full flex-none grid-cols-2 gap-4 p-4">
              {images.slice(batchIndex * 4, batchIndex * 4 + 4).map((image, imageIndex) => (
                <div key={imageIndex} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src={image.src} alt={image.alt} className="object-cover" fill />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          aria-label="Previous batch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalBatches }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentBatch === index
                  ? 'bg-primary-500'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
              }`}
              onClick={() => setCurrentBatch(index)}
              aria-label={`Go to image batch ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          aria-label="Next batch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}
