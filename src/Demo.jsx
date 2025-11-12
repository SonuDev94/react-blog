import { useState } from 'react'
import Header from './Header'
import Login,{Profile, Setting, UserKey} from './UserComponent'

function Hello() {
    const [count, counter]= useState(0)
    return <div>
        <Header/>
        <h1>Hello React</h1>
        <h2>Learning JS</h2>
        <h2>Counter is {count}</h2>
        <button onClick={()=> counter(count+1)}>Increase Count</button>
        <SecondCompo />
        <Login/>
        <Profile />
        <Setting />
        <h2>User Key: {UserKey}</h2>
        </div>
        
    
}

function SecondCompo(){
    return <h2>Second Component in same file</h2>
}

export default Hello