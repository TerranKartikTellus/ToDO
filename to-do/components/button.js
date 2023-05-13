
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Button({text,onclick}) {
  return (
    <button onClick={onclick}
      className={` ${inter.className} ${text.length == 1 ? " p-2 " : "px-5 py-2" } hover:contrast-75 rounded-lg text-gray-100 w-full font-light bg-green-600 mx-2`}
    >
    {text}
    </button>
  )
}
