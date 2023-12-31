import Image from 'next/image'
import { Inter } from 'next/font/google'
import Game from '../components/Game'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex justify-center items-center h-full w-full">
        <Game />
      </div>
    </main>
  )
}