'use client'

import Image from 'next/image'
import notfoundImage from '/public/images/not_found.svg'
import { spicyRice } from '@/styles/fonts'
import HomeButton from '@/components/buttons/home_button'

/**
 * NOTE: This page is used only for development purposes.
 * On production environment, 404 file will be used by firebase hosting.
 */
const NotfoundPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-screen w-full flex-col items-center justify-center px-8 md:flex-row">
        <Image
          src={notfoundImage}
          alt="Notfound Image"
          className=" lg:w-/5 w-4/5 sm:w-3/5 md:w-2/6"
        />
        <div className="md:ps-18 flex flex-col items-center justify-center px-8 py-8 md:w-3/5 md:items-start md:ps-16 lg:w-2/5">
          <h1 className={`${spicyRice.className} text-3xl font-bold sm:text-4xl md:text-5xl`}>
            Uh-Oh!
          </h1>
          <p className="sm:text-md my-3 text-center text-base sm:w-3/5 sm:text-xl md:w-full md:text-start md:text-2xl">
            It looks like the page you were looking for is nowhere to be found. Please navigate back
            or visit our homepage to explore other content.
          </p>
          <HomeButton />
        </div>
      </div>
    </div>
  )
}
export default NotfoundPage
