'use client'

import { useState, useEffect } from 'react'
import Image from './Image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SwiperCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function SwiperCarousel({ images }: SwiperCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate number of slides per view based on screen size
  const slidesPerView = isMobile ? 2 : 3
  const slidesPerGroup = isMobile ? 2 : 3

  return (
    <div className="flex w-full flex-col">
      <div className="mb-12 w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          navigation={{
            prevEl: '.swiper-custom-prev',
            nextEl: '.swiper-custom-next',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-custom-pagination',
          }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={image.src} alt={image.alt} className="object-cover" fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          className="swiper-custom-prev rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          aria-label="Previous"
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
        {/* <div className="swiper-custom-pagination"></div> */}
        <button
          className="swiper-custom-next rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          aria-label="Next"
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
