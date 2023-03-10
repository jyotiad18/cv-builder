import { controlflows } from '../utils/data';

function Controls( { Draggable}) {                 
  return (
        <div className="absolute flex flex-col min-h-[70%] w-[15%] 
            right-1 top-[8%] z-30 bg-gray-300 rounded-lg">  
         {
            controlflows.map((controlflow, index) => (
               <Draggable key={controlflow.name} draggableId= {controlflow.name} index= {index}>
                {(provided) => (
                    <div className='flex flex-row p-2 items-center justify-center cursor-grabbing
                      gap-2 hover:bg-black hover:text-white first:rounded-tl-lg first:rounded-tr-lg'
                      ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                      onClick={() => { alert('test')}}
                      >
                      {controlflow.name}
                      {controlflow.svg}
                    </div>
                  )
                }
               </Draggable>
            ))
         }     
      </div>
  )
}

export default Controls;
