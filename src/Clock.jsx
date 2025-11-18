import { useEffect, useState } from "react";

const Clock = () => {
    const [cColor, setCColor] = useState("black")
    return <div>
        <h2>Digital Clock in React JS</h2>
        <select name="" id="color" defaultValue={cColor} onChange={(event)=>{setCColor(event.target.value)}}>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
        </select>
        <h3>{cColor}</h3>
        < MyClock color={cColor} />
    </div>
}

const MyClock = ({color="black"}) => {
    const [time, setTime] = useState("0")
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)
    }, [])
    return <div>
        <h2 style={{ color: color, background: "Yellow", width: "120px", padding: "10px", borderRadius: "8px" }}>{time}</h2>
    </div>
}

export default Clock;