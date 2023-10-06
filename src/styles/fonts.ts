import { Candal, Space_Grotesk, Spicy_Rice } from 'next/font/google'

// Heading
const candal = Candal({ weight: '400', subsets: ['latin'] })
const spicyRice = Spicy_Rice({ weight: '400', subsets: ['latin'] })

// Subheadings + Body
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export { candal, spaceGrotesk, spicyRice }
