const NestedLoop = () => {
    const collegeData = [
        {
            id: 1,
            name: "IMS Ghaziabad",
            city: "Ghaziabad",
            website: "ims.com",
            student: [
                {
                    id: 1,
                    name: "Abhinay",
                    age: 23,
                    email: "abhi@gmail.com"
                },
                {
                    id: 2,
                    name: "Bupendra",
                    age: 54,
                    email: "abhi@gmail.com"
                },
                {
                    id: 3,
                    name: "Rahul",
                    age: 43,
                    email: "abhi@gmail.com"
                }
            ]

        },
        {
            id: 2,
            name: "IIT Kanpur",
            city: "Kanpur",
            website: "iit.kanour.com",
            student: [
                {
                    id: 1,
                    name: "Abhinay",
                    age: 23,
                    email: "abhi@gmail.com"
                },
                {
                    id: 2,
                    name: "Bupendra",
                    age: 54,
                    email: "abhi@gmail.com"
                },
                {
                    id: 3,
                    name: "Rahul",
                    age: 43,
                    email: "abhi@gmail.com"
                }
            ]
        },
        {
            id: 3,
            name: "Axis College",
            city: "Kanour",
            website: "axis.college.com",
            student: [
                {
                    id: 1,
                    name: "Abhinay",
                    age: 23,
                    email: "abhi@gmail.com"
                },
                {
                    id: 2,
                    name: "Bupendra",
                    age: 54,
                    email: "abhi@gmail.com"
                },
                {
                    id: 3,
                    name: "Rahul",
                    age: 43,
                    email: "abhi@gmail.com"
                }
            ]
        }
    ];

    // const person = {
    //     name: "Sonu",
    //     show() {
    //         console.log(this.name)
    //     }
    // }
//person.show();  //
    // const tt=person.show;
    // tt()

    return <div>
        {
            collegeData.map((item) => (
                <div key={item.id} style={{
                    background: "#ccc",
                    padding: "10px",
                    margin: "10px",
                    borderBottom: "1px solid black",
                    borderRadius: "8px"
                }}>
                    <h3>College Name: {item.name}</h3>
                    <ul>
                        <li><h4>City: {item.city}</h4></li>
                        <li><h4>Website: {item.website}</h4></li>
                        <li>
                            <h4>Students:</h4>
                            {
                                item.student.map((student) => (
                                    <ul key={student.id}>
                                        <li>student.name</li>
                                    </ul>
                                )
                                )
                            }
                        </li>
                    </ul>

                </div>
            ))
        }
    </div>
}

export default NestedLoop;