// Hooks : use additional feature(like state, life cycle..) in functional component by using hooks;
// Before Rect 16.8 class component is using and hooks was not, from 16.8 are using hooks. also we can use class component
// userState, useEffect...
// u

import { useEffect, useState } from "react";
import Counter from "./Counter";

function Hooks() {

    //useEffect are use for remove side effect. remove rerending many times
    /*Syntax:
    useEffect(() => {
        // Side effect code
    }, [dependencies]);

    // Types:
    useEffect(() => {
        // Call every time
    })

    useEffect(() => {
        // Call only once
    }, [])

    useEffect(() => {
        // call on changing single state1
    }, [state1])

    useEffect(() => {
        // call on changing both state
    }, [state1, state2])

    useEffect(() => {
        // call on changes props
    }, [props1, props2])


    */

    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const [displa, setDisplay] = useState(true)

    function callOnce() {
        console.log("callOnce Called")
    }

    useEffect(() => {
        callOnce()
    }, [])

    function showCountLog() {
        console.log("Counter: ", count)
    }
    // showCountLog() // Call multiple time when rerender state
    useEffect(() => {
        showCountLog()
    }, [count]) // call only when count value update

    function showDataLog() {
        console.log("Data:", data)
    }
    //showDataLog()
    useEffect(() => {
        showDataLog()
    }, [data])// Call when data value changed

    // useEffect(() => {
    //     console.log("Counter:", count, "Data:", data)
    // }, [count, data]) // call when count and data changed



    return (

        < div >
            <h4>useEffect Hooks</h4>
            <button onClick={() => setCount(count + 1)}>Counter {count}</button>
            <button onClick={() => setData(data + 1)}>Data {data}</button>
            <button onClick={() => setDisplay(!displa)}>Toggle Counter Module</button>
            {
                displa ? < Counter count={count} data={data} /> : null
            }
        </div >
    )
}

export default Hooks;