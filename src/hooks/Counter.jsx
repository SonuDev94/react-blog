// COunter component use for sideEffect demo to handle side effect and rerender multiple time


//React Life cycle method: mounting, updating , unmountung

import { useEffect } from "react"


const Counter = ({ count, data }) => {

    useEffect(()=>{
        console.log("Mounting phase only")
    },[])

    function handleCounter() {
        console.log("handleCounter Count:", count)
    }
    useEffect(() => {
        console.log("update phase only")
        handleCounter()
    }, [count])


    function handleData() {
        console.log("handleData Data:", data)
    }
    useEffect(() => {
        console.log("update phase only")
        handleData()
    }, [data])

    useEffect(()=>{
        return ()=>{
            console.log("unmaout phase only")
        }
    },[])


    return <div style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}>
        <h4>Counter : {count}</h4>
        <h4>Data: {data}</h4>
    </div>
}

export default Counter;