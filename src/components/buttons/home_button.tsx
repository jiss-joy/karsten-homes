'use client'

import { Routes } from '@/routes/routes'
import { useRouter } from 'next/navigation'

const HomeButton = () => {
  const router = useRouter()

  const onClickHandler = () => {
    router.push(Routes.home)
  }
  return (
    <button
      className="my-6 h-10 w-44 rounded bg-blue-500 text-base font-bold text-white sm:h-14 sm:w-72  sm:text-xl md:self-center md:text-2xl"
      onClick={onClickHandler}
    >
      Home
    </button>
  )
}
export default HomeButton
