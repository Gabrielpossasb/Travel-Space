import Image from 'next/image'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'

import nasaLogo from '../../assets/NasaLogo.png'
import { IoMdRocket } from 'react-icons/io'

interface HeaderProps {
   title: string
}

export function Header({title}: HeaderProps) {

   const {asPath, push} = useRouter()

   const [ openNav, setOpenNav ] = useState(false)

   return (
      <header className='flex shadow-nav fixed z-50 h-10 hover:h-24 bg-gray-800 items-center justify-between text-white text-3xl duration-200 p-2 font-semibold w-full sm:px-10 '>
   
         {  asPath.split('?')[0] === '/rover-images' ? (

            <div className='flex items-center gap-4'>

               <button onClick={() => push('/')} className='p-2 rounded-full hover:shadow-boxSm hover:bg-gray-600 duration-300'>
                  <FiArrowLeft size={36}/>
               </button>

               <text className='shadow-insetTitle text-center font-[Mina] p-4 sm:px-10 rounded-xl'>
                  {title}
               </text>

            </div>
         ) : (
            <div className='relative flex w-16 h-16 z-40'>

               <div className={`flex  bg-gray-800/90 overflow-hidden absolute rounded-md duration-700 transition-all  ${openNav?'animate-openNav shadow-nav ' :'shadow-boxSm hover:shadow-boxLg'}`}>

                  <button onClick={() => setOpenNav(!openNav)} className={`w-16 h-16 flex items-center justify-center rounded-md transition-all duration-700 ${openNav?'  text-blue-300 shadow-boxSmBlack ' :''}`}>
                     <IoMdRocket size={52} className={`duration-700 ${openNav?'rotate-[340deg]  ' :'hover:rotate-12'}`}/>
                  </button>

                  <div className='absolute w-[420px] flex text-xl flex-col gap-8 left-10 text-white top-24'>

                     <Link href={'#Image'} className='w-full border-b-2 text-start border-black/60 p-2 hover:bg-black/10 duration-300'>Image of the Day</Link>

                     <Link href={'#Rovers'} className='w-full border-b-2 text-start border-black/60 p-2 hover:bg-black/10 duration-300'>Rovers</Link>

                     <Link href={'#Nearby'} className='w-full border-b-2 text-start border-black/60 p-2 hover:bg-black/10 duration-300'>Nearcy Objects</Link>

                  </div>

               </div>
            </div>
         )}
            
            

         
         <Link href={'https://api.nasa.gov/#browseAPI'} rel='noreferrer' target='_blank' className='w-20 h-20 invisible sm:visible bg-blue-600 flex items-center justify-center shadow-boxLg rounded-full hover:bg-blue-800 duration-300 hover:brightness-75'>
            
            <Image alt='' src={nasaLogo} width={200} height={180}/>

         </Link>
      </header>
   )
}