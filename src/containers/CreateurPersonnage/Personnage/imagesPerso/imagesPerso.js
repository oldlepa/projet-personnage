import React from "react";
import ImagePlayer1 from "../../../../asset/assets/images/persos/player1.png";
import ImagePlayer2 from "../../../../asset/assets/images/persos/player2.png";
import ImagePlayer3 from "../../../../asset/assets/images/persos/player3.png";
import classes from './imagesPerso.module.css';

const ImagesPerso = (props) => {
    let imagePrint = "";
    if(props.numImage === 1) imagePrint = ImagePlayer1;
    else if(props.numImage === 2) imagePrint = ImagePlayer2;
    else imagePrint = ImagePlayer3;
    return (
        <>
            <div className="row no-gutters text-center align-items-center">
                <div className={["col-1", classes.fleche, classes.gauche].join(" ")} onClick={props.flecheGauche}> 
                </div>
                <div className="col">
                    <img src={imagePrint} alt='personnage'/>
                </div>
                <div className={["col-1", classes.fleche, classes.droite].join(" ")} onClick={props.flecheDroite}> 
                </div>
            </div>
        </>
    )

}
export default ImagesPerso;