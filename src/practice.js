import React from 'react'
import Pr1 from './pr1'

function practice(props){
    const{n}=props
    return(
    <div>
        <div>
        IS practice of {n}
    </div>
    <div>
       <Pr1 name={n}/>
    </div>
    </div>
)}
export default practice