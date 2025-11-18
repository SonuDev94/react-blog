const UserItem = ({ data }) => {
    return (
        <div style={
            {
                border: "green 1px solid",
                margin: "10px",
                padding: "10px",
                width: "400px",
                borderRadius: "10px"
            }
        }>
            <h4>Name: <span style={{ color: "red" }}>{data.name}</span></h4>
            <h4>Email: <span style={{ color: "green" }}>{data.email}</span></h4>
            <h4>Age: <span style={{ color: "blue" }}>{data.age}</span></h4>
        </div>
        
    )
}

export default UserItem;