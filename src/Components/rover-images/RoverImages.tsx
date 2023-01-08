export function RoverImages() {

   async function getDataHover() {
      const response = await api.post(`/api/nasa`, {
         headers: {
         state: 'data_hover',
         maxDate: dataManifestHover.max_date,
         camera: 'NAVCAM',
         page: 1
         }
      })

      setDataRover(response.data.data)
   }
   
   return (
      <div>
         <button onClick={() => getDataHover()} className='p-4 px-10 bg-blue-600 text-white '>
            Request
         </button>

         <div className='grid grid-cols-2 gap-20'>
            { dataRover.map((val) => (
               <div key={val.id} className=''>
                  <Image alt='' src={val.img_src} width={600} height={300} className={'max-w-[500px] max-h-[500px] rounded-xl shadow-boxPurple'}/>
               
                  <div className='flex justify-between items-center p-6 text-white bg-blue-800 rounded-2xl -mt-2'>
                     <text>{val.earth_date}</text>
                     <text>{val.rover.name}</text>
                     <text>{val.camera.full_name}</text>
                  </div>
               </div>
               ))
            }
         </div>
      </div>
   )
}