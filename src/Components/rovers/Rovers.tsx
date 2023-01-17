import { FiArrowRight } from 'react-icons/fi'
import { RoversType } from '../../services/types'

import Image from 'next/image'
import Link from 'next/link'

import Perseverance from '../../assets/Rovers/Perseverance.gif'
import Curiosity from '../../assets/Rovers/Curiosity.gif'
import Opportunity from '../../assets/Rovers/Opportunity.gif'

interface RoversProps {
   rovers: RoversType[]
}

export function Rovers({rovers}: RoversProps) {

   return (
      <div id='Rovers'  className='flex flex-col w-full max-w-[1400px] items-center justify-center gap-16'>
         
         <text className='shadow-insetTitle p-4 px-10 text-4xl rounded-xl'>
            Rovers
         </text>

         <div className='grid grid-cols-1 lg:grid-cols-2 font-[Mohave] items-center justify-center w-full gap-24'>
            { rovers.map((val) => { return (
               
               <div key={val.id} className='flex flex-col place-self-center items-center sm:min-w-[460px] gap-10'>
                  
                  <Image alt='' width={600} height={400} className={'rounded-xl cel500:max-w-[95vw] max-w-[450px] flex border-8 border-blue-400/20 shadow-boxLg'} src={
                     (val.name === 'Curiosity') ? Curiosity 
                     : (val.name === 'Perseverance') ? Perseverance  
                     : (val.name === 'Spirit' ? Opportunity
                     :  Opportunity)
                  }/>
                  
                  <div className='grid grid-cols-2 cel500:items-center justify-center items-start gap-6 text-xl text-shadow'>
                     <text className='flex gap-2 cel500:text-center items-center cel500:flex-col'>
                        Name: <span className='text-blue-300 text-2xl'> {val.name} </span>
                     </text>

                     <text className='flex gap-2 cel500:text-center items-center cel500:flex-col'>
                        Launching Date: <span className='text-blue-300 text-xl'>{val.launch_date}</span>
                     </text>

                     <text className='flex gap-2 cel500:text-center items-center cel500:flex-col'>
                        Max. Date: <span className='text-blue-300 text-xl'>{val.max_date}</span>
                     </text>

                     <text className='flex gap-2 cel500:text-center items-center cel500:flex-col'>
                        Status: <span className='text-blue-300 text-2xl'>{val.status}</span>
                     </text>

                     <text className='flex gap-2 cel500:text-center items-center cel500:flex-col'>
                        Total Photos: <span className='text-blue-300 text-2xl'>{val.total_photos}</span>
                     </text>

                     <text className='flex gap-2 cel500:text-center items-center cel500:flex-col'>
                        Total Cameras: <span className='text-blue-300 text-2xl'>{val.cameras.length}</span>
                     </text>

                  </div>

                  <Link  href={{
                     pathname:"rover-images",
                     query: { roverID: val.id },   
                  }} className='hover:underline text-2xl items-center underline-offset-8 flex gap-2'>
                     <text className='font-[Mina] font-normal '>See Images</text>
                     <FiArrowRight size={28}/>
                  </Link>

                  <div className='flex w-full h-3 bg-gray-600 rounded-full shadow-insetSm'/>
               </div>
            )})}
         </div>
      </div>
   )
}