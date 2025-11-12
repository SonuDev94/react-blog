// State in React
//State is container to store data like variable
//This is mutable and dynamic
//We have to import it when we want to use it. (State import with hooks)
//It re-render component automatically so that data can visible on UI

import { useState } from "react";

//What is hooks-> Hooks are special feature for function component. Hooks let you use different React features from your component likes: State, Life Cycle Methods, Side Effects

function StateHanding() {
    // let fruit = "Banana"
    // return (
    //     <div>
    //         <h1>Fruit Name: {fruit}</h1>
    // <button onClick={fruit="Apple"}>Change Fruit Name</button>
    //     </div>
    // )
    // Above variable fruit will not update ui until forcly update screen. So we have use state
    const [fruit, setFruit] = useState("Apple")
    const changeFruitName = () => {
        setFruit("Banana")
    }

    const [visible, setVisibility] = useState(true)
    const [count, setCount] = useState(0)



    return (
        <>
            <h2>Fruit Name: {fruit}</h2>
            <button onClick={changeFruitName}>Change Fruit Name</button> <br />
            {
                visible ? <img src="res/bulb-on.png" height="50" width="50" /> : <img src="res/bulb-off.png" height="50" width="50"></img>
            }
            <br />
            <button onClick={() => { setVisibility(!visible) }}>Toggle Bulb {visible ? "Off" : "On"}</button>
            <h3>Multi Cases like if else if</h3>
            <h4>{count}</h4>
            <button onClick={()=>{setCount(count+1)}}>Increase Count</button> <br/>
            {
                count==0 ? "Condition 0" :count==1? <h4>Condition 1</h4>
                :count==2? <h4>Condition 2</h4>
                :count==3? "Condition 3"
                : "Other Condition" 
            }
            
        </>
    )
}




export default StateHanding;