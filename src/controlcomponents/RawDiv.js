function RawDiv({ children }) {                 
  return (
      <div className="flex flex-raw justify-between items-center 
             w-full border-2 border-black ">
            {children}
      </div>
  )
}

export default RawDiv;
