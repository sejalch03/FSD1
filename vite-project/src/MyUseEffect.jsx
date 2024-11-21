import React, { useEffect,useState } from  'react'
function MyUseEffect(){
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(20);
    useEffect(()=>{
        console.log("updated count"+count);
        console.log("updated pointer"+pointer);
    },{count},{pointer})
    function doIncreament(){
        setCount(count+30)
    }
    function doPointer(){
        setPointer(pointer+100)
    }
    return(
        <div>
            <h2>Counter:{count}</h2><br></br>
            <h2>Pointer:{pointer}</h2>
            
            <h2>MyUseEffect</h2>
            <h2>{count}</h2>
            <button onClick={doIncreament}>Increament</button>
            <button onClick={doPointer}>Pointer</button>
        </div>
    )
}
export default MyUseEffect
