import Image from 'next/image'

const IntroAvatar = () => {
  return (
    <div className="relative flex max-w-[700px] justify-center md:hidden lg:flex lg:h-[400px] lg:w-[700px]">
      <div className="bg-primary-700 dark:bg-primary-500 absolute top-10 left-20 h-20 w-20 animate-pulse rounded-[300px] blur-3xl lg:left-24" />

      <Image
        src={'/static/images/my-ghibli.png'}
        alt={'My ghibli version avatar'}
        className="z-10 object-contain lg:w-42 xl:w-52"
        width={100}
        height={100}
        quality={100}
      />
      <div className="bg-primary-700 dark:bg-primary-500 absolute right-30 bottom-10 h-20 w-10 animate-pulse rounded-[300px] blur-3xl lg:right-24 lg:bottom-0 lg:w-20" />
    </div>
  )
}

export default IntroAvatar
