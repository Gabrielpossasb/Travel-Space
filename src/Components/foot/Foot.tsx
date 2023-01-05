import Image from 'next/image'
import nasaLogo from '../../assets/NasaLogo.png'

export function Foot() {
   
   return (
      <footer className="bg-blue-800 w-full p-2 flex items-center px-16 justify-between">
         <div className="flex flex-col bg-blue-600 gap-2 text-lg p-2 items-center justify-center rounded-md shadow-lg text-shadow">

            <text>Developed by:</text>
            <text>Gabriel Possas</text>

         </div>

         <div className='w-20 h-20 absolute bg-blue-600 flex items-center justify-center right-20 shadow-boxLg rounded-full'>
            <Image alt='' src={nasaLogo} width={200} height={180}/>
         </div>
      </footer>
   )
}