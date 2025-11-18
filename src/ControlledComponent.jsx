//Controlled Component
//What ic controll component
//How to identify this is a controll component
//Error if we donot use controlled value properly.

import { useState } from "react";


//A controlled component is a form whose input field value controlled by React's state
//Here's how it work
//Store input field value in state
//Use Change handler with input field
//Value attribute attached with state

//Benefit
//Single Source of Truth
//Validation and Manipulation before submit
//Dynamic updates value


// Handle Checkbox
//Define state for checkbox
//Get checkbox value in state
//remove checkbox value in state
//

function ControlledComponent() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [skills, setSkills] = useState([])
    const [gender, setGender] = useState("Male") 
    const [city, setCity] = useState("Delhi")

    const handleSkill = (event) => {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills([...skills.filter((item) => item != event.target.value)])
            // setSkills(skills.filter((item) => item != event.target.value))
        }
    }
    return (
        <div>
            {/* <form action="" method="get"> */}
            <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} placeholder="Enter Username" />
            <br /><br />
            <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="Enter Password" />
            <br /><br />
            <input type="text" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="Enter Email" />

            <h3>Select your skills</h3>
            <input type="checkbox" onChange={handleSkill} id="java" value="Java" /><label htmlFor="java">Java</label> <br />
            <input type="checkbox" onChange={handleSkill} id="kotlin" value="Kotlin" /> <label htmlFor="kotlin">Kotlin</label><br />
            <input type="checkbox" onChange={handleSkill} id="js" value="JS" /><label htmlFor="js">Javascript</label><br />
            <input type="checkbox" onChange={handleSkill} name="" id="flutter" value="Flutter" /><label htmlFor="flutter">Flutter</label>

            <h3>Select Gender</h3>
            <input type="radio" onChange={(event) => { setGender(event.target.value) }} name="gender" id="male" value="Male" checked={gender == 'Male'} /> <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="female" value="Female" checked={gender == 'Female'} /><label htmlFor="female">Female</label>

            <h3>Select City</h3>
            <select name="ciry" id="city" defaultValue={"Delhi"} onChange={(event)=> setCity(event.target.value)}>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Delhi">Delhi</option>
                <option value="Ghaziabad">Ghaziabad</option>
            </select>

            <br />
            <br />
            <button>Submit</button>
            <button onClick={() => {
                setName("")
                setPassword("")
                setEmail("")
                setSkills([])
            }}>Clear</button>

            <h3>Name: {name}</h3>
            <h3>Password: {password}</h3>
            <h3>Email: {email}</h3>
            <h3>Skills: {skills.toString()}</h3>
            <h3>Selected Gender: {gender}</h3>
            <h3>Selected City: {city}</h3>
            {/* </form> */}
        </div>
    )
}

export default ControlledComponent;