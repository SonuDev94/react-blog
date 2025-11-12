import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'
// import Demo from './Demo.jsx'
import ToDo from './ToDo.jsx'
import StateHanding from './StateHandling.jsx'
import PropsDemo from './PropsDemo.jsx'
import InputFieldDemo from './InputFieldDemo.jsx'
import InterviewQuestion from './InterviewQuestion.jsx'
import ControlledComponent from './ControlledComponent.jsx'
import LoopMap from './LoopMap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Demo/> */}
    {/* <ToDo/> */}
    {/* <StateHanding/> */}
    {/* <PropsDemo /> */}
    {/* <InputFieldDemo /> */}
    {/* <ControlledComponent /> */}
  
    {/* <InterviewQuestion /> */}
    <LoopMap />
  </StrictMode>,
)
