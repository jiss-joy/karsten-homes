import Image from 'next/image'
import notfoundImage from '/public/images/not_found.png'
import { spicyRice } from '@/styles/fonts'
import Link from 'next/link'

const NotfoundPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-screen w-full flex-col items-center justify-center px-8 md:flex-row">
        <h1 className="text-6xl sm:text-7xl font-bold text-slate-300 md:hidden md:flex-col">
          404
        </h1>

        <Image
          src={notfoundImage}
          alt="Notfound Image"
          className=" sm:w-3/5 w-4/5 md:w-2/6 lg:w-2/5"
        />
        <div className="md:ps-18 flex flex-col items-center justify-center px-8 py-8 md:w-3/5 md:items-start md:ps-16 lg:w-2/5">
          <h1 className=" = hidden text-8xl font-bold text-slate-300 md:flex">
            404
          </h1>
          <h1
            className={`${spicyRice.className} text-3xl font-bold sm:text-4xl md:text-5xl`}
          >
            Uh-Oh!
          </h1>
          <p className="sm:text-md my-3 text-center text-base sm:w-3/5 sm:text-xl md:text-2xl md:w-full md:text-start">
            It looks like the page you were looking for is nowhere to be found.
            Please navigate back or visit our homepage to explore other content.
          </p>
          <button className="text-md my-6 w-48 rounded bg-blue-500 py-2 font-bold text-white md:self-center">
            <Link href={''}>Home</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
export default NotfoundPage
