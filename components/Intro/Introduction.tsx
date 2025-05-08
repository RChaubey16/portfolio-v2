import SwiperCarousel from '../SwiperCarousel'
import carouselData from '@/data/carouselData'
import IntroAvatar from './IntroAvatar'
import IntroDetails from './IntroDetails'

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <IntroDetails />
        <IntroAvatar />
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Featured
          </h1>
        </div> */}
        <div className="py-12">
          <SwiperCarousel images={carouselData} />
        </div>
      </div>
    </>
  )
}

export default Introduction
