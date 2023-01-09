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
      <div className='flex flex-col -mt-20 w-full relative text-white'>

         <button onClick={() => setOpenImageDay(!openImageDay)} className={`self-center shadow-boxMd flex px-10 w-80 rounded-t-2xl  font-semibold hover:bg-gray-600 duration-300 items-start justify-between ${openImageDay?'p-2 text-xl bg-gray-800 ' :'p-4 text-2xl bg-gray-700'}`}>

            <text className={`${openImageDay?'translate-x-0 translate-y-0 ':'animate-selectMoviment' }`}>Image of The Day</text> 
            <FiChevronDown size={32} className={`duration-500 ${openImageDay?'rotate-0' :'rotate-180 animate-rotateSmooth'}`}/>

         </button>
         
         <div className='relative overflow-hidden flex w-full justify-center items-center shadow-box2xl-y'>

            <Image alt='' src={imageDay.hdurl} width={1400} height={1000} className={'bg-contain w-[100vw] max-h-[1000px] max-w-[100vw] h-auto'}/>
            
            <div className='absolute top-0'>

               <div className={`flex flex-col h-[1000px] text-xl font-bold gap-4 sm:gap-10 px-6 py-10 pb-20 rounded-b-2xl bg-black/70 transition-all font-[Mina] duration-1000 ${openImageDay?'-translate-y-[2000px] ' :'translate-y-0'}`}>

                  <text className='self-center text-start mdMax:text-2xl text-4xl text-blue-300'> {imageDay.title} </text>

                  <text className='leading-[1.75rem] sm:leading-[2rem] lg:leading-[3rem] cel500:text-sm text-lg lg:text-2xl md:h-auto cel500:max-h-[200px] mdMax:h-[300px] mdMax:overflow-y-scroll font-normal'> {'" ' + imageDay.explanation + ' "'} </text>

                  <text className='text-xl'> 
                     <span className='text-blue-300 mr-4'> By: </span> 
                     {imageDay.copyright}
                  </text>
               </div>
            </div>
         </div>
      </div>
   )
}