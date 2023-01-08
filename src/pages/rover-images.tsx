import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { api } from "../services/api"
import { DataRover, RoversType } from "../services/types"

import Image from 'next/image'
import { Pagination } from "../Components/Pagination/Pagination"
import { Header } from "../Components/header/Header"
import { FiSearch } from "react-icons/fi"
import { Foot } from "../Components/foot/Foot"

export default function RoverImages() {

   const {push, query} = useRouter()
   
   const [ dataRover, setDataRover ] = useState<DataRover[]>([])

   const [ rover, setRover ] = useState<RoversType>({} as RoversType);

   const [cameraSelect, setCameraSelect ] = useState('')

   const [ loading, setLoading ] = useState(false)

   const [pagination, setPagination ] = useState(1)

   useEffect( () => {

      const apiRe = async () => {
         const response = await api.post('/api/nasa', {
            headers: {
               state: 'hovers',
               rover: query.roverID
            }
         })
         const dataRover = response.data.data.filter((val:RoversType) => { return val.id === Number(query.roverID) })
         setRover(dataRover[0])
      }
   
      if (query.roverID !== undefined) {
         apiRe().catch(console.error)
      }
   }, [query])
   
   async function getDataHover(camera: string) {
      setLoading(true)
      const response = await api.post(`/api/nasa`, {
         headers: {
            state: 'data_hover',
            hover: rover.name.toLowerCase(),
            maxDate: rover.max_date,
            camera: camera.toLowerCase(),
         }
      })

      setDataRover(response.data.data)
      setLoading(false)
   }

   return (
      <div className="flex flex-col items-center font-[Mohave] gap-14">
         <Header title={rover.name + ' Images'}/>
         
         <text className="text-4xl font-semibold text-blue-400 text-shadow-md font-[Mina]">Switch between cameras</text>

         <div className="flex gap-4 text-2xl p-4 border-b-4 border-gray-600 w-full max-w-[1200px] overflow-x-auto items-center justify-start">
            { rover?.cameras?.map((camera) => (
               <div onClick={() => setCameraSelect(camera.name)} className={` p-3 px-6 rounded-xl duration-500 hover:bg-blue-600/50 hover:cursor-pointer ${cameraSelect===camera.name?'shadow-boxSm bg-blue-600' :'bg-transparent'}`}>
                  {camera.name}
               </div>
            ))}
         </div>

         <button disabled={cameraSelect===''?true:false} onClick={() => getDataHover(cameraSelect)} className='p-4 px-10 bg-blue-600 text-white shadow-boxSm rounded-md hover:shadow-boxSmBlue duration-300'>
            
               <text className="flex gap-4 items-center text-xl"> Search Images 
                  { loading ? (
                     <div className={`w-8 h-8 border-y-2 rounded-full duration-500 animate-rotate transition-all border-white`}></div>
                  ) : (
                     <FiSearch size={32} className='hover:animate-rotate'/>
                  )} 
               </text>

         </button>

         <Pagination totalCountOfRegisters={dataRover.length} currentPage={pagination} onPageChange={(e) => setPagination(e)} registersPerPage={10}/>

         <div className='grid grid-cols-2 gap-20'>
         { dataRover.map((val, index) => { return ( index < pagination * 10 && (index >= (pagination * 10) - 10)) && (
            <div key={val.id} className='max-w-[600px] flex flex-col shadow-boxMd bg-transparent rounded-lg'>
               <Image alt='' src={val.img_src} width={600} height={400} className={'w-full h-auto rounded-xl shadow-boxPurple'}/>
            
               <div className='flex justify-between h-full text-xl font-normal items-start p-6 text-white bg-blue-800 rounded-b-2xl -mt-2'>
                  <text>{val.earth_date}</text>
                  <text className="text-2xl font-semibold">{val.rover.name}</text>
                  <text className="w-32">{val.camera.full_name}</text>
               </div>
            </div>
            )})
         }
         </div>

         <Foot/>
      </div>
   )
}