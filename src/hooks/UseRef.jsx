// useRef is a React Hook that provides a way to persist mutable values 
// across component renders without causing re-renders. It returns a mutable ref object whose 
// .current property is initialized to the argument passed to useRef.

import { useRef } from "react";


const UseRef = () => {

    const inputRef = useRef(0);
    const h2Ref = useRef(0)

    const inputHandler = () => {
        inputRef.current.focus();
        inputRef.current.style.color = "red"
        inputRef.current.placeholder = "Enter Name"
        inputRef.current.value = "Helo"
    };
    function toggleHandler() {
        if (inputRef.current.style.display != "none") {
            inputRef.current.style.display = "none"
        } else {
            inputRef.current.style.display = "inline"
        }
    }

    const h2Handler=()=>{
        h2Ref.current.style.color="green"
    }


    return (
        <div>
            <button onClick={toggleHandler}>Toogle Input</button>
            <input ref={inputRef} type="text" />
            <button onClick={inputHandler}>Handler Btn</button>

            <h2 ref={h2Ref}>He Tag</h2>
            <button onClick={h2Handler}>Change Color</button>
        </div>
    )
}

export default UseRef;