import { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { ImageDay } from '../../services/types'

import Image from 'next/image'

interface imageOfDayProps {
   imageDay: ImageDay
}

export function ImageOfDay({imageDay}: imageOfDayProps) {
   
   const [ openImageDay, setOpenImageDay ] = useState(false)
   
   return (
      <div className='flex flex-col  w-full relative text-white'>

         <button onClick={() => setOpenImageDay(!openImageDay)} className={`self-center shadow-boxMd flex px-10 w-80 rounded-t-2xl  font-semibold hover:bg-gray-600 duration-300 items-start justify-between ${openImageDay?'p-2 text-xl bg-gray-800 ' :'p-4 text-2xl bg-gray-700'}`}>

            <text className={`${openImageDay?'translate-x-0 translate-y-0 ':'animate-selectMoviment' }`}>Image of The Day</text> 
            <FiChevronDown size={32} className={`duration-500 ${openImageDay?'rotate-0' :'rotate-180 animate-rotateSmooth'}`}/>

         </button>
         
         <div className='relative overflow-hidden max-h-[800px] flex w-full justify-center items-center shadow-box2xl-y'>

            <Image alt='' src={imageDay.hdurl} width={1600} height={1200} className={'bg-contain '}/>
            
            <div className='absolute top-0'>

               <div className={`flex flex-col text-2xl font-bold gap-10 px-10 py-10 pb-20 rounded-b-2xl bg-black/70 transition-all font-[Mina] duration-700 ${openImageDay?'-translate-y-[1000px] ' :'translate-y-0'}`}>

                  <text className='self-center text-4xl text-blue-300'> {imageDay.title} </text>

                  <text className='leading-[3rem] text-xl font-normal'> {'" ' + imageDay.explanation + ' "'} </text>

                  <text className='text-2xl'> 
                     <span className='text-blue-300 mr-4'> By: </span> 
                     {imageDay.copyright}
                  </text>
               </div>
            </div>
         </div>
      </div>
   )
}