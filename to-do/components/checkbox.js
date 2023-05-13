import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function CheckBox({text}) {
  const [active, setActive] = useState(false)
  return (
    <main
      className={` ${inter.className} flex flex-row items-center justify-start space-x-2 text-gray-500 text-base pt-2 px-1`}
    >
        <button onClick={()=>{setActive(!active)}} className={` ${active ? "bg-green-500": "bg-gray-300 border-[1px] border-gray-400"} w-4 h-4 rounded-full`}></button>
        <div>{text}</div>
    </main>
  )
}
