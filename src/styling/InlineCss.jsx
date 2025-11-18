import { useState } from "react"

function InlineCss() {
    // const cardStyle = { border: "1px solid #cdc", width: "150px", margin: "10px", boxShadow: "10px -5px 5px 1px #abc" }
    const [cardStyle, setCardStyle] = useState(
        { border: "1px solid #cdc", width: "150px", margin: "10px", boxShadow: "10px -5px 5px 1px #abc" }
    )

    const [txtColor, setTxtColor] = useState("#000")
    const [grid, setGrid] = useState(true)

    const updateTheme = (bgColor, textColor) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor })
        setTxtColor(textColor)
    }
    return (
        <div>
            <h4 style={{ color: 'red' }}>Inline Style in React & Dynamic and Conditional</h4>
            <button onClick={() => updateTheme("lightGrey", "green")}>Update Theme</button>
            <button onClick={() => updateTheme("white", "black")}>Default Theme</button>
            <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
            <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
                <div style={cardStyle}>
                    <img style={{ width: "150px", height: "150px" }} src="https://picsum.photos/seed/picsum/200/300" alt="My Image" />
                    <div style={{ padding: "10px", color: txtColor }}>
                        <h4>Sonu Kumar</h4>
                        <p>Software Enginner</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={{ width: "150px", height: "150px" }} src="https://picsum.photos/seed/picsum/200/300" alt="My Image" />
                    <div style={{ padding: "10px", color: txtColor }}>
                        <h4>Sonu Kumar</h4>
                        <p>Software Enginner</p>
                    </div>
                </div>

                <div style={cardStyle}>
                    <img style={{ width: "150px", height: "150px" }} src="https://picsum.photos/seed/picsum/200/300" alt="My Image" />
                    <div style={{ padding: "10px", color: txtColor }}>
                        <h4>Sonu Kumar</h4>
                        <p>Software Enginner</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InlineCss;