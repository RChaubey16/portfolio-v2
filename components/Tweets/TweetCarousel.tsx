'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import TweetEmbed from './TweetEmbed'

// Import Swiper styles
import 'swiper/css'
import { useEffect, useState } from 'react'

const TweetCarousel = () => {
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
  const slidesPerView = isMobile ? 1 : 2

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <TweetEmbed tweetId="1905986468385812510" />
        </SwiperSlide>
        <SwiperSlide>
          <TweetEmbed tweetId="1905897441913979325" />
        </SwiperSlide>
        <SwiperSlide>
          <TweetEmbed tweetId="1846226385909518636" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TweetCarousel
