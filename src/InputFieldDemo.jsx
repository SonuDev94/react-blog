
//Get Input Field Value:
//Make Inout Field and define state
//Get input filed value in state
//Display value
//Clear input field value

import React, { useState } from "react";


function InputFieldDemo() {
    const [val, setVal]=useState("")
    
    return (
        <div>
            <h2>Get Input Value</h2>
            <input type="text" value={val} onChange={(event)=>{setVal(event.target.value)}} placeholder="Enter User name" />
        <h2>{val}</h2>
        <button onClick={()=>{setVal("")}}>Clear Value</button>
        </div>
    )
}

export default InputFieldDemo;