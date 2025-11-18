import UserProfile from "./UserProfile";

function CSSModule() {
    return <>
        <h4>CSS Module in React JS</h4>
        <h4 className="heading">Here external css is used by default without import</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
        </div>
    </>
}

export default CSSModule;