
function HeaderRight( { onControlDisplayHandler }) {                     
  return (
    <div className="flex flex-1 justify-end">
        <div className="cursor-pointer" onClick={ onControlDisplayHandler }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
    </div>
  )
}

export default HeaderRight;
