
import React,{useState} from 'react'

function Hooks1(){
    //Hooks
    const[val,setVal]=useState(0)
    const[text,setText]=useState()
    const hc=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    const PressMe=(type)=>{
        console.log('PressMe',type)
        if(type==='increment'){
        setVal(val+1)
        }
        else if(type==='decrement'){
            setVal(val-1)
        }
       
    }
    return(
<div>
    <button type="button" 
    className="btn btn-outline-primary" 
        onClick={()=>PressMe('increment')}   
>
increment
    

    </button>
    <button type="button" 
    className="btn btn-outline-primary" 
        onClick={()=>PressMe('decrement')}   
>
decrement
</button>
    <h2>
        Number: {val}
    </h2>
    <input 
    type="email"
    class="form-control"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
onChange={(e)=> hc(e)}
/>     
<h2>
    name:{text}
</h2>
</div>
    )
}
export default Hooks1