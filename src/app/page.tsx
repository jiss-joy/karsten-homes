import { redirect } from 'next/navigation'
import { Routes } from '@/routes/routes'

/**
 * Redirected to the maintenance page.
 * TODO: Remove after phase 1.
 */
const HomePage = () => {
  redirect(Routes.maintenance)
}

export default HomePage
