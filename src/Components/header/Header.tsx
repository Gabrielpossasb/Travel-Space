import Image from 'next/image'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

import nasaLogo from '../../assets/NasaLogo.png'

interface HeaderProps {
   title: string
}

export function Header({title}: HeaderProps) {

   const {asPath, push} = useRouter()

   return (
      <header className='flex relative items-center justify-between text-white text-3xl p-4 font-semibold w-full sm:px-10 shadow-topMd'>
   
         <div className='flex items-center gap-4'>
            {  asPath.split('?')[0] === '/rover-images' && (
               <button onClick={() => push('/')} className='p-2 rounded-full hover:shadow-boxSm hover:bg-gray-600 duration-300'>
                  <FiArrowLeft size={36}/>
               </button>
            )}
            
            <text className='shadow-insetTitle font-[Mina] p-4 px-10 rounded-xl'>
               {title}
            </text>
         </div>

         
         <Link href={'https://api.nasa.gov/#browseAPI'} rel='noreferrer' target='_blank' className='w-20 h-20 invisible sm:visible bg-blue-600 flex items-center justify-center shadow-boxLg rounded-full hover:bg-blue-800 duration-300 hover:brightness-75'>
            <Image alt='' src={nasaLogo} width={200} height={180}/>
         </Link>
      </header>
   )
}