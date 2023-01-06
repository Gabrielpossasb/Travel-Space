import Image from 'next/image'
import nasaLogo from '../../assets/NasaLogo.png'

export function Header() {

   return (
      <header className='flex relative items-center justify-between text-white text-3xl p-4 font-semibold w-full px-10 shadow-topMd'>
   
         <text className='shadow-insetTitle font-[Mina] p-4 px-10 rounded-xl'>
            Home
         </text>

         
         <div className='w-20 h-20 bg-blue-400 flex items-center justify-center shadow-boxLg rounded-full'>
            <Image alt='' src={nasaLogo} width={200} height={180}/>
         </div>
      </header>
   )
}