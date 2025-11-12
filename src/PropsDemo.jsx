import Product from './Product.jsx'
import Student from './Student.jsx'
import Wrapper from './Wrapper.jsx'

//n React.js, "props" (short for properties) are a fundamental mechanism for passing data from a parent component to a child component. 
//String values can be passed directly within quotes, while non-string values (like numbers, booleans, or objects) are enclosed in curly braces {}.
function PropsDemo() {
    let description = "Laptop 8gb Ram 128 HDD"
    let product1 = {
        name : "Mobile",
        price: 4000,
        description: "Samsumng mobile 4bg Ram 500 Rom"
    
    }
    let product2 = {
        name : "laptop",
        price: 40000,
        description: "HP mobile 4bg Ram 500 Rom"
    
    }

    const nameArr = ["Sam","Vijay", "Puneet", "Akshay","Rohit","Love"]
    let obt= nameArr.reduce(
        (a,it)=>({...a,it:it}),{}
    )
    obt; {it: 'c'}


    return <>
    {/* <Product name="Laptop" price={100} descrip={description}/> */}
    
    <Product product={product1} />
    <Product product={product2} />
    <Student name={nameArr[0]}/>
    <Student name={nameArr[1]}/>
    <Student />
    <Student name="ABC"/>
    <Wrapper >
        <h4>Pass Html(JSX)  in props</h4>
    </Wrapper>

    <Wrapper >
        <h4>Hello React JS</h4>
        <h4 style={{color:"green"}}>Pass Html in props</h4>
    </Wrapper>
    <Wrapper color="blue">
        <h4>Pass Html(JSX) in props and color</h4>
    </Wrapper>
    </>
}

export default PropsDemo;