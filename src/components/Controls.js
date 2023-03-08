import { controlflows } from '../utils/data';

function Controls() {                 
  return (
    <div className="absolute flex flex-col min-h-[70%] w-[15%] 
            right-1 top-[8%] z-30 bg-gray-300 rounded-lg">  
         {
            controlflows.map((controlflow) => (
                <div className='flex flex-row p-2 items-center justify-center cursor-pointer
                        gap-2 hover:bg-black hover:text-white first:rounded-tl-lg first:rounded-tr-lg'>
                    {controlflow.name}
                    {controlflow.svg}
                </div>
            ))
         }     
    </div>
  )
}

export default Controls;
