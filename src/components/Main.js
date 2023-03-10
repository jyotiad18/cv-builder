function Main({ provided }) 
{                     
  return (
    <div className="max-w-full min-h-screen border-4 border-dotted border-black"
      {...provided.droppableProps} ref={provided.innerRef}
    > 
      { provided.placeholder }
    </div>
  )
}

export default Main;