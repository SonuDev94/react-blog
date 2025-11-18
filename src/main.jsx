import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


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
import Clock from './Clock.jsx'
import NestedLoop from './NestedLooping.jsx'
import Hooks from './hooks/Hooks.jsx'
import StylingUsingCss from './styling/StylingUsingCss.jsx'
import BootStrap from './BootStrap.jsx'
import UseRef from './hooks/UseRef.jsx';

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
    {/* <LoopMap /> */}
    {/* <Clock /> */}
    {/* <NestedLoop /> */}
    {/* <Hooks /> */}
    <UseRef />
    {/* <StylingUsingCss /> */}
    {/* <BootStrap /> */}
  </StrictMode>,
)
