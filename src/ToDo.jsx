function ToDo() {
    function callFun() {
        alert("Function Called");
    }

    function sum(a, b) {
        return a + b;
    }

    const userObj = {
        name: "Sonu Kumar",
        age: 30,
    }
    const name = "Sonu Kumar"

    const userArra = ["Sam", "Peter", "Abhi"]

    // Variable with jsx
    //JSX with Curly Braces to use variable inside HTML

    // No Parentheses on Direct Assignment: When directly assigning a function to onClick, omit parentheses to prevent immediate execution.
    //Arrow Functions for Arguments or Inline Logic: Use arrow functions within onClick when passing arguments or defining simple inline logic.
    //Synthetic Events: React uses a system of Synthetic Events to ensure consistent event handling across different browsers. The event object passed to your handler will be a Synthetic Event.

    return (
        <div>
            <h2>My Name is {name}</h2>
            <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Sonu Kumar" class="Photo" />
            <ul>
                <li>Hello Sonu Kumar</li>
                <li>Sum is: {sum(4, 5)}</li>
                <li>User Object name: {userObj.name}</li>
                <li>User Array {userArra[0]}</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
            <button onClick={() => { alert(`Sum is ${sum(2, 3)}`) }}>Click with parameter</button>
            <button onClick={() => { alert("Hello Inline Function") }}>Click inline Function</button>



        </div>
    );
}


export default ToDo;




