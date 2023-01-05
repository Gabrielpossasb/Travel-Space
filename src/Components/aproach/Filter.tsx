import { FiChevronDown } from "react-icons/fi";

interface FilterProps {
   filter: (arg:number) => void;
   label: string;
   options: string[];
}

export function Filter({filter,label, options}: FilterProps) {

   return (
      <div className="flex flex-col gap-2 items-center">
         <label form="vel" className="text-2xl">{label}</label>

         <select id="vel" name={'Vel. Max'} onChange={(e) => filter(Number(e.target.value))} className={'p-4 flex items-center px-4 rounded-xl shadow-boxSm hover:shadow-boxSmBlue bg-transparent text-xl hover:bg-blue-600 duration-300 w-48 font-semibold justify-center hover:cursor-pointer'}>
            
            {  options.map((val, index) => (
               <option key={index} value={val} className="text-2xl font-semibold text-blue-300 bg-gray-800 focus:bg-blue-400 selection:bg-slate-500 hover:border-none duration-300 border-b-2 border-gray-700">
                  {`> ${val}`}
               </option>
            ))}       

         </select>
      </div>
   )
}