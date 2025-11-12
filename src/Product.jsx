
//Pass properties in default props
/*function Product(props) {
    return <div>
        <h2>{props.name}</h2>
        <p>Price: {props.price}</p>
    </div>

}*/
// Another way pass props by properties name
/*
function Product({name, price, description}) {
    return <div>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
    </div>

} */
//Another Way pass data by object
function Product({product}) {
    return <div>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <hr />
    </div>

}

export default Product;