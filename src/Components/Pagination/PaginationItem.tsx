interface PaginationItemProps {
   isCurrent?: boolean;
   number: number;
   onPageChange: (page: number) => void;
}

export function PaginationItem({number, isCurrent = false, onPageChange}: PaginationItemProps) {
   if (isCurrent) {
      return (
         <button className="w-10 text-gray-50 p-1 px-4 bg-blue-400 border-2 border-blue-400 flex justify-center rounded-full">
            {number}     
         </button>
      )
   }

   return (
      <button className="w-10 p-1 px-4 bg-gray-50 border-2 hover:bg-blue-400 duration-500 hover:text-gray-50 border-blue-400 justify-center flex rounded-full"
         onClick={() => onPageChange(number)}
      >
         {number} 
      </button>
   )
     
}