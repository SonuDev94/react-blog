
//Change Style with prop and Pass JSX(HTML) in props
function Wrapper({children, color="red"}) {
    return (
        <div style={{ color: color, border: "2px dashed red", width:"300px" ,margin:"5px", padding:"5px"}}>
            {children}
        </div>
    )
}

export default Wrapper;