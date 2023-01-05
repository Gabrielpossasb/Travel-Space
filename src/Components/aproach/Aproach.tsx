import { useEffect, useState } from "react";
import { NearbyType } from "../../services/types"
import { Filter } from "./Filter";


interface NearbyObjectsProps {
   nearbyObjects: NearbyType[]
}

export function Aproach({nearbyObjects}: NearbyObjectsProps) {

   const [ filtredNearbyObjects, setFiltredNearbyObjects ] = useState<NearbyType[]>([])
   
   useEffect(() => {
      handleFiltred()
   }, [nearbyObjects])

   function handleFiltred() {
      setFiltredNearbyObjects(nearbyObjects)
   }

   function handleVelocityMaxFiltred(velocityMax: number) {
      const filter = nearbyObjects.filter((val) => {
         return parseFloat(val.v_inf) >= velocityMax
      })
      setFiltredNearbyObjects(filter)
   }
   
   function handleDiameterFiltred(diameter: number) {
      const filter = nearbyObjects.filter((val) => {
         return (parseFloat(val.diameter) * 1000) >= diameter
      })
      setFiltredNearbyObjects(filter)
   }

   function handlePossibleImpactsFiltred(n_imp: number) {
      const filter = nearbyObjects.filter((val) => {
         return val.n_imp >= n_imp
      })
      setFiltredNearbyObjects(filter)
   }

   return (
      <div className="flex flex-col gap-14 items-center">

         <text className='shadow-insetTitle p-4 px-10 text-4xl rounded-xl font-[Montserrat Subrayada]'>
            Nearby Objects
         </text>

         <div className="text-lg flex font-medium gap-8 items-end font-[Krub]">

            <button className={'p-4 mr-8 flex items-center px-4 rounded-xl shadow-boxSm duration-300 w-48 justify-center'}>
               Year - 2023 / 2022
            </button>

            <Filter filter={(e) => handleVelocityMaxFiltred(e)} label={'Vel. Max'} options={['0', '10', '20']}/>    

            <Filter filter={(e) => handleDiameterFiltred(e)} label={'Diameter'} options={['0', '20', '40', '60']}/>

            <Filter filter={(e) => handlePossibleImpactsFiltred(e)} label={'Possible Impacts'} options={['0', '20', '40', '60', '80']}/>            

         </div>

         <div className="scrollbar">

         <div className="flex font-[Mohave] w-full max-w-[100vw] md:max-w-[90vw] gap-20 overflow-x-scroll p-10 px-20 rounded-xl scroll-smooth shadow-boxMd">
            { filtredNearbyObjects.map((val) => { return (
               
               <div key={val.id}  className={'flex flex-col items-center text-center gap-6 min-w-[250px] p-4 px-6 bg-gradient-to-b from-blue-400 to-blue-800 rounded-md shadow-card'}>

                  <text className="text-3xl"> 
                     <span className="ml-2 text-blue-100 text-shadow">{val.des}</span>
                  </text>

                  <text className="text-center"> 
                     <text>Maximum Speed: </text><br/>
                     <span className="ml-2 text-blue-300">{parseFloat(val.v_inf).toFixed(2) } Km/s</span>
                  </text>

                  <text className=""> 
                     <text>Diameter: </text><br/>
                     <span className="ml-2 text-blue-300">{(Number(val.diameter) * 1000).toFixed(2)} m</span>
                  </text>

                  <text className=""> 
                     <text>Possible Impacts: </text><br/>
                     <span className="ml-2 text-blue-300">{val.n_imp}</span>
                  </text>

                  <text className=""> 
                     <text>Last Observation: </text><br/>
                     <span className="ml-2 text-blue-300">{val.last_obs}</span>
                  </text>

               </div>

            )})}
         </div>

         </div>
      </div>
   )
}