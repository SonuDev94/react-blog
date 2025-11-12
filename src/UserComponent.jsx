
function Login() {

    return <div>
        <h2>User Login Component</h2>
    </div>

}

export default Login;

//only one component can be export from ine file. other component we have use named export

export function Profile() {
    return (
        <div>
            <h2>Profile</h2>
        </div>
    )
}

export function Setting(){
    return <div>
        <h2>Setting</h2>
    </div>
}

export const UserKey = "ABC#@%$"