import { createElement } from "react";

function Header(){
    
    return <div>
        <h3>Header file</h3>
        <JSXDemo />
        <ReactWithoutJSX />
    </div>

}


export default Header
//JSX=> JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX,

function JSXDemo(){
    const userName = "Sonu Kumar"
    var a =20;
    var b=30;
    return <div>
        <h3>UserName: {userName}</h3>
        <h4>Add Sum{a+b}</h4>
        <button onClick={()=>alert("Hello")}>Click</button>
        <button onClick={function(){
            alert("Hello2")
        }}>Click2</button>

    </div>
}

// React Without JSX (meaning no html inside javascript)

function ReactWithoutJSX(){
    return createElement("div",{id: "rootDiv"}, createElement("h5",{class: 'h1Tag'},"Heading5 tag")); // Without JSX
    // return <div><h5>Heading5 tag</h5></div> //With JSX
}