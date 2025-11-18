import "./myStyle.css"
const ExternalCss = () => {
    return (
        <div>
            <h4 className="heading">External Style CSS in React</h4>
            <div className="mainContainer">
                <div className="user-card">
                    <img className="img-style" src="https://picsum.photos/seed/picsum/200/300" alt="Photo" />
                    <div className="bottom-view"> 
                        <h4>Sonu Kumar</h4>
                        <p>Software Enginner</p>
                    </div>
                </div>

                <div className="user-card">
                    <img className="img-style" src="https://picsum.photos/seed/picsum/200/300" alt="Photo" />
                    <div className="bottom-view">
                        <h4>Sonu Kumar</h4>
                        <p>Software Enginner</p>
                    </div>
                </div>

                <div className="user-card">
                    <img className="img-style" src="https://picsum.photos/seed/picsum/200/300" alt="Photo" />
                    <div className="bottom-view">
                        <h4>Sonu Kumar</h4>
                        <p>Software Enginner</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ExternalCss;