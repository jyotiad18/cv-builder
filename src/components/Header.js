import HeaderRight from "./HeaderRight";

function Header( { onControlDisplayHandler }) {                     
  return (
    <div className="flex w-[100%] space-x-10 border-b-2 border-gray-400
                 shadow-sm h-16 items-center px-6 justify-between pr-11 top-0">
      <h4 className="text-3xl font-bold">CV-Builder</h4>  
      <HeaderRight onControlDisplayHandler = { onControlDisplayHandler }/>    
    </div>
  )
}

export default Header;
