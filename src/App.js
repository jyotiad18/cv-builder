import { useState } from "react";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isControlDisplay, setIsControlDisplay] = useState(false);

  return (
    <div className="font-PFont h-full space-y-1 relative">
       {isControlDisplay ? <Controls /> : null} 
       <Header onControlDisplayHandler = { () => { setIsControlDisplay(!isControlDisplay)  } }/>
       <Main />
    </div>
  );
}

export default App;