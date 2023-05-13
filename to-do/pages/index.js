import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/button'
import { useState } from 'react'
import CheckBox from '@/components/checkbox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [current_task, set_current_task] = useState("")
  const [list,setList] = useState([
    "Get up at 3am.",
    "Workout till 4am.",
  ])

  function update_list(){
    const warning = document.getElementById("warning");
    console.log(current_task);
    if(current_task.length>0){
      setList([...list,current_task])
      set_current_task("")
      warning.style.display = "";
    }else{    
      warning.style.display = "block";
    }
  }
  function removee(index){
    const updatedItems = [...list.slice(0, index), ...list.slice(index + 1)];
    setList(updatedItems)
  }
  
  return (
    <main
      className={` ${inter.className} flex flex-col min-h-screen w-full items-center justify-center bgred-500`}
    >
     <div className={` rounded-t w-3/12 bg-gray-50 text-gray-900 p-5 `}>
      <h1 className='text-2xl tracking-wide font-light'>ToDo</h1>
      <div className=''>
        {list.length>0 ? list.map((i,index)=>(
          <div key={i} className='group flex flex-row items-center justify-between '>
           <CheckBox text={i}></CheckBox>
           <div onClick={()=>removee(index)} className='group-hover:visible invisible'> <Button  text={'✖'}></Button> </div>
          </div>
        )) : <p className='my-2 text-gray-500 text-sm pl-2'>No work found.</p>}
      </div>
     </div>
     <div className='w-3/12 bg-gray-50 text-gray-400 p-2 rounded-b border-t border-gray-300 flex flex-row items-center justify-between'>
        <input value={current_task} onChange={(e)=>{set_current_task(e.target.value)}} type='text' className='capitalize bg-gray-100 text-gray-400 rounded outline-[1px] py-2 px-4 outline-gray-300' placeholder='Add task here...'></input>
        <Button onclick={update_list} text={'Add'}></Button>
      </div>
      <p id="warning" className={`text-red-500 hidden`}>Please enter a task</p>

    </main>
  )
}
