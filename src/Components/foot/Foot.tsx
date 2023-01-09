import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import Image from 'next/image';
import Link from 'next/link';

import nasaLogo from '../../assets/NasaLogo.png';

export function Foot() {
   
   return (
      <footer className="bg-blue-800 flex-wrap w-full p-2 gap-6 flex items-center px-4 sm:px-16 cel500:justify-center justify-between">
         <div className="flex gap-4 sm:gap-8 text-lg p-2 items-center justify-center">

            <div className='flex flex-col bg-blue-600 gap-2 text-lg p-2 items-center justify-center rounded-md shadow-boxSm text-shadow'>
               <text>Developed by:</text>
               <text>Gabriel Possas</text>
            </div>

            <Link href={'https://www.linkedin.com/in/gabriel-possas/'} rel='noreferrer' target='_blank'
               className="bg-blue-600 p-2 rounded-full text-white shadow-boxSm hover:shadow-boxMd
               hover:bg-gray-50 hover:text-blue-600 duration-500
            ">
               <IoLogoLinkedin size={36}/>
            </Link>

            <Link href={'https://github.com/Gabrielpossasb'} rel='noreferrer' target='_blank'
               className="bg-blue-600 p-2 rounded-full text-white shadow-boxSm hover:shadow-shadeMd
               hover:bg-gray-50 hover:text-blue-600 duration-500
            ">
               <IoLogoGithub size={36}/>
            </Link>

         </div>

         <Link href={'https://api.nasa.gov/#browseAPI'} rel='noreferrer' target='_blank' className='w-20 h-20 bg-blue-600 flex items-center justify-center shadow-boxLg rounded-full hover:bg-blue-800 duration-300 hover:brightness-75'>
            <Image alt='' src={nasaLogo} width={200} height={180}/>
         </Link>
      </footer>
   )
}