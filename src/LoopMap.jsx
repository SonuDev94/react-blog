//Rerender component in loop using map
//Pass data in component inside loop
//
function LoopMap() {
    const userData = [{
        id:1,
        name: "Sonu Kumar",
        email: "sonu@gmail.com",
        age: 30
    }, {
        id:2,
        name: "Vikram",
        email: "kikram@gmail.com",
        age: 33
    }, {
        id:3,
        name: "VijayKamandu",
        email: "vijayKamandu@gmail.com",
        age: 22
    }, {
        id:4,
        name: "Alexzender",
        email: "alexzender@gmail.com",
        age: 39
    }
    ]
    return (
        <div>
            <h3>Loop in JSX with map function</h3>


            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>


        </div>
    )
}

export default LoopMap;