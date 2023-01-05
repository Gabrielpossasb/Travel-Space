import { RoversType } from '../../services/types'

import Image from 'next/image'

import Curiosity from '../../assets/rovers/RoverCuriosity.jpg'
import Perseverance from '../../assets/rovers/RoverPerseverance.jpg'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

interface RoversProps {
   rovers: RoversType[]
}

export function Rovers({rovers}: RoversProps) {

   return (
      <div className='flex flex-col w-full items-center gap-16 px-8 lg:px-16'>
         
         <text className='shadow-insetTitle p-4 px-10 text-4xl rounded-xl'>
            Rovers
         </text>

         <div className='flex font-[Mohave] flex-col items-center justify-center w-full gap-32'>
            { rovers.map((val) => { return (
               
               <div key={val.id} className='flex flex-col xl:flex-row items-center w-full max-w-6xl xl:justify-between gap-20 xl:gap-40'>
                  
                  <Image alt='' src={Curiosity} width={600} height={400} className={'rounded-xl flex border-8 border-blue-400/20 shadow-boxLg'}/>
                  
                  <div className='flex flex-col items-start gap-8 text-2xl text-shadow'>
                     <text className=''>
                        Name: <span className='text-blue-300 text-2xl'> {val.name} </span>
                     </text>

                     <text className=''>
                        Launching Date: <span className='text-blue-300 text-2xl'>{val.launch_date}</span>
                     </text>

                     <text className=''>
                        Max. Date: <span className='text-blue-300 text-2xl'>{val.max_date}</span>
                     </text>

                     <text className=''>
                        Status: <span className='text-blue-300 text-2xl'>{val.status}</span>
                     </text>

                     <text className=''>
                        Total Photos: <span className='text-blue-300 text-2xl'>{val.total_photos}</span>
                     </text>

                     <text className=''>
                        Total Cameras: <span className='text-blue-300 text-2xl'>{val.cameras.length}</span>
                     </text>

                     <Link href={'/RoverImages'} className='hover:underline items-center underline-offset-8 flex gap-2'>
                        <text className='font-[Mina] font-normal '>See Images</text>
                        <FiArrowRight size={28}/>
                     </Link>
                  </div>
               </div>
            )})}
         </div>
      </div>
   )
}