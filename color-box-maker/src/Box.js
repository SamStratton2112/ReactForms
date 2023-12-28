const Box = ({id,color,height,width, removeBox})=>{
  // function will execute onClick 
  const remove = ()=>removeBox(id)
  return(
    <div>
      <div 
        className="BoxList-box"
        style={
          {
            backgroundColor: `${color}`, 
            width: `${width}px`, 
            height: `${height}px`
          }
        }>
      </div>
      <button onClick={remove}>x</button>
    </div>
  )
}

export default Box; 
