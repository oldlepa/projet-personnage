import React from "react";

const Bouton = (props) => {
    const classNameBouton = `btn ${props.classNameBouton} ${props.styleCss}`;
    return (
        <>
            <button className={classNameBouton} onClick={props.clic}>{props.children}</button>
        </>
    )

}
export default Bouton;