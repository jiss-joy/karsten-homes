import Image from 'next/image'
import maintenance from '/public/images/maintenance.png'
import { spicyRice } from '@/styles/fonts'

const MaintenancePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-6 md:flex-row">
      <Image
        src={maintenance}
        alt="Maintenance Image"
        className="w-4/5 sm:w-3/5 md:w-2/6 lg:w-2/6"
      />
      <div className="flex flex-col items-center px-3 py-8 md:w-3/5 md:items-start md:ps-16  lg:w-2/5">
        <h1 className={`${spicyRice.className} text-3xl sm:text-4xl md:text-5xl`}>Oops!</h1>
        <h2 className="pb-2 pt-4 text-base font-bold sm:text-xl">We are under maintenance.</h2>
        <p className="text-center text-base sm:w-5/6 sm:text-xl md:w-full md:text-start">
          Apologies for the inconvenience, but we&apos;re sprucing things up on our website.
          We&apos;ll be back online shortly. Thank you for your patience!
        </p>
      </div>
    </div>
  )
}

export default MaintenancePage
