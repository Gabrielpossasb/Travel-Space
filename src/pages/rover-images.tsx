import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { api } from "../services/api"
import { DataRover, RoversType } from "../services/types"

import Image from 'next/image'
import { Pagination } from "../Components/Pagination/Pagination"
import { Header } from "../Components/header/Header"
import { Foot } from "../Components/foot/Foot"


export default function RoverImages() {

   const {push, query} = useRouter()
   
   const [ dataRover, setDataRover ] = useState<DataRover[]>([])

   const [ rover, setRover ] = useState<RoversType>({} as RoversType);

   const [cameraSelect, setCameraSelect ] = useState('')

   const [ loading, setLoading ] = useState(false)

   const [pagination, setPagination ] = useState(1)

   const [ imageSelect, setImageSelect ] = useState('')

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
      setPagination(1)
      setImageSelect('')
      setCameraSelect(camera)
      const response = await api.post(`/api/nasa`, {
         headers: {
            state: 'data_hover',
            hover: rover.name.toLowerCase(),
            maxDate: rover.max_date,
            camera: camera.toLowerCase(),
            page: 1
         }
      })

      setDataRover(response.data.data)
      setLoading(false)
   }

   return (
      <div className="flex flex-col items-center justify-between h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto font-[Mohave] gap-14">
         <Header title={rover.name + ' Images'}/>
         
         <text className="text-4xl font-semibold text-center text-blue-400 text-shadow-md font-[Mina]">Switch between cameras</text>

         <div className="flex  mb-8  gap-4 text-2xl p-4 border-b-4 py-8 pb-16 max-h-[400px] border-gray-600 w-full max-w-[1200px] overflow-x-auto overflow-y-hidden items-center justify-start">
            

            { rover?.cameras?.map((camera) => (
               <button disabled={loading} onClick={() => getDataHover(camera.name)} className={`flex p-3 px-4 rounded-xl duration-500 hover:bg-blue-600/50 hover:cursor-pointer items-center justify-center text-center ${cameraSelect===camera.name?'shadow-boxSm bg-blue-600' :'bg-blue-600/0'} ${(loading && cameraSelect===camera.name)&&'min-w-[150px]'}`}>
                  { (loading && cameraSelect===camera.name) ? (
                     <div className={`w-8 h-8 border-y-2 rounded-full duration-500 animate-rotate transition-all border-white`}></div>
                  ) : (
                     <text className="flex">{camera.name}</text>
                  )} 
                  
               </button>
            ))}
         </div>

         <Pagination totalCountOfRegisters={dataRover.length} currentPage={pagination} onPageChange={(e) => setPagination(e)} registersPerPage={20}/>

         <text className="font-medium text-lg -mt-8 text-gray-500 text-shadow">CLICK the images to expand.</text>

         <div className='flex w-full flex-col items-center justify-center gap-20 cel:p-4 px-10 lg:px-20 relative'>

            {  imageSelect !== '' && (
               <div className="flex w-full px-8 sm:px-20 max-w-[1200px] justify-center duration-500 transition-all rounded-md ">
                  <Image alt="" src={imageSelect} width={800} height={600} className='w-full max-w-[800px] h-auto transition-all rounded-md  duration-500 shadow-card'/>
               </div>
            )}

            <div className="flex w-full flex-wrap items-start gap-8 sm:gap-20 justify-center">
               { dataRover.map((val, index) => { return ( index < pagination * 20 && (index >= (pagination *20) - 20)) && (
                  <div key={index} onClick={() => setImageSelect(val.img_src)} className={`w-[120px] sm:w-[150px] h-[150px] flex items-center bg-gray-800 rounded-md shadow-boxMd hover:duration-300 hover:cursor-pointer  transition-all border-4 border-blue-600 ${val.img_src === imageSelect ?'translate-x-4 -translate-y-2 border-blue-300' :'hover:animate-selectMoviment hover:-translate-y-3'}`}>
                     <Image alt='' src={val.img_src} width={600} height={400} className={'w-full  duration-500 h-auto rounded-md'}/>
                     
                  </div>
               )})}
            </div>
         </div>

         <Foot/>
      </div>
   )
}