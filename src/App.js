import { useState } from "react";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Main from "./components/Main";
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
  const [isControlDisplay, setIsControlDisplay] = useState(false);

  const onDragEndHandle = (result) => {
    console.log(result);
  }

  return (
    <div className="font-PFont h-full space-y-1 relative">
       
       <Header onControlDisplayHandler = { () => { setIsControlDisplay(!isControlDisplay)  } }/>
       <DragDropContext onDragEnd={onDragEndHandle}>                        
            <Droppable droppableId="dropId">
                {(provided) => (       
                        <>                        
                         <Main provided = {provided} />
                         { isControlDisplay ? <Controls Draggable = {Draggable} /> : null }
                        </>
                )}
            </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;