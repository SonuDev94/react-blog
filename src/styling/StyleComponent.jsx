/*
Style component: style component is not available in react, we have to use by import library
React Styled-component Module allows us to write CSS within JavaScript in a very modular and reusable way in React. Instead of having one global CSS file for a React project, we can use styled-component to enhance the developer experience. It also removes the mapping between components and styles – using components as a low-level styling construct
Features of styled-component:
Automatic vendor prefixing
Replacement of writing style prop everywhere.
Support for media query (unlike style prop).
Easy to maintain
*/
import styled from "styled-components";

function StyleComponent() {

    const Heading = styled.h4`
    color:red;
    `;

    const MyButton = styled.div`
    color:blue;
    width:100px;
    height:50px;
    background-color:yellow;
    cursor:pointer;
    text-decoration:none;
    margin:auto;
    font-size:1rem;
    
    `;


    const Button = styled.div`
    height: 50px;
    width: 100px;
    cursor: pointer;
    text-decoration: none;
    color: blue;
    background-color: ${(props) =>
        props.bg === "green" ? "green" : "yellow"};
    margin: auto;
    font-size: 1rem;
    display: flex;
    justify-content:center;
    align-items:center
`;


    return (
        <div >
            <Heading>Hello Styled Component Heading</Heading>
            <div style={{ textAlign: "center", margin: "auto",  display:"flex" , flexDirection:"column", justifyContent:"center"}}>
            <MyButton>Styled Button</MyButton>
            <Button bg="green">Click</Button>
            </div>
            
        </div>
    )
}

export default StyleComponent;