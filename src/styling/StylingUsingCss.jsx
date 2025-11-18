/*
How many type of style we have in React js?

Inline Style
External style
CSS modules
Styled components
External CSS Library/ Framework


Utility-First Library:  
    Material UI
    React Bootstrap
    Tailwind CSS etc

Questoin: Can we use internal style in react ?
ANS:

Q: How React inline style is different from regular(html) inline style 
<div style="color: blue; background-color:red;">This is a div with inline style</div>

<div style={{color:"blue", backgroundColor:"red"}}> React JS Style</div>

*/

import CSSModule from "./CSSModule";
import ExternalCss from "./EnternalCss";
import InlineCss from "./InlineCss";
import StyleComponent from "./StyleComponent";

const StylingUsingCss = () => {


    return (
        <div>
            {/* <InlineCss /> */}

            {/*External css provide global scope for all the styles defined within that file are globally scoped*/}
            {/* <ExternalCss /> */}

            {/*CSS Module is provide local scope for your styles. When you import a CSS Module(e.g., import styles from './Button.module.css';),.the class names within that file are automatically transformed into unique, component-specific class names during the build process
            No Conflicts: This unique naming prevents style conflicts between components, ensuring that the styles defined in Button.module.css only apply to the Button component, even if other components use the same class names.
            You import CSS Modules as a JavaScript object (e.g., import styles from './Button.module.css';) and then access the class names as properties of that object (e.g., <button className={styles.myButton}>).
            If you need to define global styles within a CSS Module, you can explicitly mark them as global within the module.
            */}
            {/* <CSSModule /> */}

            <StyleComponent />
        </div>
    )
}

export default StylingUsingCss;

