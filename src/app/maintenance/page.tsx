import Image from 'next/image'
import maintenance from '/public/images/maintenance.png'
import { spicyRice } from '@/styles/fonts'

const MaintenancePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-8">
      <Image src={maintenance} alt="Maintenance Image" className="w-4/5" />
      <center>
        <div className="py-8">
          <h1 className={`${spicyRice.className} text-3xl`}>Oops!</h1>
          <h2 className="py-3 text-xl font-bold">We are under maintenance.</h2>
          <p className="w-64 text-sm">
            Apologies for the inconvenience, but we&apos;re sprucing things up
            on our website. We&apos;ll be back online shortly. Thank you for
            your patience!
          </p>
        </div>
      </center>
    </div>
  )
}

export default MaintenancePage
