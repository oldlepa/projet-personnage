import React from "react";
import classes from './titre.module.css'

const Titre = (props) => {
    const styleTitre = `${classes.styleTitre} border border-dark p-2 m-2 text-white text-center bg-primary rounded `;
    return (
        <>
            <h1 className={styleTitre}>{props.children}</h1>
        </>
    )

}
export default Titre;