import Image from 'next/image'
import nasaLogo from '../../assets/NasaLogo.png'

export function Header() {

   return (
      <header className='flex relative items-center justify-center text-white text-3xl p-4 font-semibold w-full px-10 shadow-topMd'>
         
         <div className='w-40 h-20 absolute left-20 bg-blue-400 rounded-md shadow-boxLg'></div>

         <text className='shadow-insetTitle font-[Mina] p-4 px-10 rounded-xl'>
            Home
         </text>

         
         <div className='w-20 h-20 absolute bg-blue-400 flex items-center justify-center right-20 shadow-boxLg rounded-full'>
            <Image alt='' src={nasaLogo} width={200} height={180}/>
         </div>
      </header>
   )
}