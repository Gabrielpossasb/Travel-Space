import { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImageDay } from '../../services/types'

import Image from 'next/image'
import { api } from '../../services/api';

export function ImageOfDay() { 
   const [ openImageDay, setOpenImageDay ] = useState(false)
   
   const [ imageDay, setImageDay ] = useState<ImageDay>({} as ImageDay)

   const [ today, setToday ] = useState('')

   const [ dayImage, setDayImage ] = useState('')
   const [ monthImage, setMonthImage ] = useState('')
   const [ yearImage, setYearImage ] = useState('')

   const [ loading, setLoading ] = useState(false)

   useEffect(() => {
      const date = new Date()
      var year = date.toLocaleString("default", { year: "numeric" });
      var month = date.toLocaleString("default", { month: "2-digit" });
      var day = date.toLocaleString("default", { day: "2-digit" });

      getImageDay(day, month, year)

      setToday(day)
      setDayImage(day)
      setMonthImage(month)
      setYearImage(year)
   }, [])

   async function getImageDay(day: string, month: string, year: string) {
      setLoading(true)

      var formattedDate = year + "-" + month + "-" + day;

      console.log(formattedDate)

      const response = await api.post(`/api/nasa`, {
         headers: {
            state: 'image_day',
            date: formattedDate
         }
      })

      setImageDay(response.data.data)

      setDayImage(day)
      setMonthImage(month)
      setYearImage(year)

      setLoading(false)
   }
 
   return (
      <div id='Image' className='flex flex-col mt-36 w-full relative text-white'>

         <div className='flex relative items-center justify-center'>
            <div className='absolute left-10 text-4xl flex gap-4 items-center pb-8'>
               <button className='p-2 rounded-xl hover:shadow-insetSm shadow-insetTitle hover:text-blue-300 duration-300' onClick={() => getImageDay(`${(
                     Number(dayImage) > 1 ? Number(dayImage) - 1 : dayImage
                  )}`, monthImage, yearImage)}>
                  <FiChevronLeft />
               </button>

               <text className='font-medium text-xl'>{yearImage + "-" + monthImage + "-" + dayImage}</text>

               <button  className='p-2 rounded-xl hover:shadow-insetSm shadow-insetTitle hover:text-blue-300 duration-300' onClick={() => getImageDay(`${
                  Number(dayImage) < Number(today) ? ( Number(dayImage) + 1 ) : dayImage}`, 
                  monthImage, 
                  yearImage
               )}>
                  <FiChevronRight/>
               </button>
            </div>

            <button onClick={() => setOpenImageDay(!openImageDay)} className={`self-center gap-2 shadow-boxMd flex px-10 w-80 rounded-t-2xl  font-semibold hover:bg-gray-600 duration-300 items-start justify-between ${openImageDay?'p-2 text-xl bg-gray-800 ' :'p-4 text-2xl bg-gray-700'}`}>

               <div className='w-full flex items-center justify-center'>
                  { (loading) ? (
                     <div className={`w-8 h-8 border-y-2 rounded-full duration-500 animate-rotate transition-all border-white`}></div>
                  ) : (
                     <text className={`${openImageDay?'translate-x-0 translate-y-0 ':'animate-selectMoviment' }`}>Image of The Day</text> 
                  )}
               </div>
               <FiChevronDown size={32} className={`duration-500 ${openImageDay?'rotate-0' :'rotate-180 animate-rotateSmooth'}`}/>

            </button>
         </div>
         
         <div className='relative overflow-hidden flex w-full h-[1000px] justify-center items-center shadow-box2xl-y'>

           
            <Image alt='' src={imageDay.hdurl} fill className={'object-contain max-w-[100vw] shadow-boxMd  max-h-[1200px]'}/>
          

            <div className='absolute top-0'>

               <div className={`flex flex-col h-[1000px] text-xl font-bold gap-4 sm:gap-10 px-4 sm:px-10 lg:px-20 py-10 pb-20 bg-black/60 transition-all font-[Mina] duration-1000 ${openImageDay?'-translate-y-[2000px] ' :'translate-y-0'}`}>

                  <text className='self-center text-start mdMax:text-2xl text-4xl text-blue-300'> {imageDay.title} </text>

                  <text className=' leading-[1.75rem] sm:leading-[2rem] lg:leading-[3rem] cel500:text-sm text-lg lg:text-2xl md:h-auto cel500:max-h-[200px] mdMax:h-[300px] mdMax:overflow-y-scroll font-normal'> {'"' + imageDay.explanation + '."'} </text>

                  <text className='text-xl'> 
                     <span className='text-blue-300 mr-4 text-3xl underline underline-offset-8'>{imageDay.date}</span> 
                     
                  </text>
               </div>
            </div>
         </div>
      </div>
   )
}