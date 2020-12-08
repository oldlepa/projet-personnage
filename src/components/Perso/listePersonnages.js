import React from "react";
import ImagePlayer1 from "../../asset/assets/images/persos/player1.png";
import ImagePlayer2 from "../../asset/assets/images/persos/player2.png";
import ImagePlayer3 from "../../asset/assets/images/persos/player3.png"

import arc from "../../asset/assets/images/armes/arc.png";
import epee from "../../asset/assets/images/armes/epee.png";
import fleau from "../../asset/assets/images/armes/fleau.png";
import hache from "../../asset/assets/images/armes/hache.png";


const ListPersonnages = (props) => {
    let armeImage = '';
    if(props.perso.arme === 'arc') armeImage = arc;
    else if(props.perso.arme === 'epee') armeImage = epee;
    else if(props.perso.arme === 'fleau') armeImage = fleau
    else if(props.perso.arme === 'hache') armeImage = hache;

    let imagePrint = "";
    if(props.perso.image === 1) imagePrint = ImagePlayer1;
    else if(props.perso.image === 2) imagePrint = ImagePlayer2;
    else imagePrint = ImagePlayer3;
    return (
        <>
            <div className="row no-gutters">
                <div className="col-6">
                    <div style={{fontFamily: 'JetBrains Mono, monospace', textAlign:'center'}}>{props.nom}</div>
                    <div><img src={imagePrint} alt="imagePerso"/></div>
                </div>
                <div className="col-6">
                    <div>Agilite : {props.perso.agilite}</div>
                    <div>Force : {props.perso.force}</div>
                    <div>Intelligence : {props.perso.intelligence}</div>
                    <div>Arme :<span style={{fontFamily: 'JetBrains Mono, monospace'}}>{props.perso.arme}</span></div>
                    <div><img src={armeImage} alt="imageArme"/></div>
                </div>
            </div>
        </>
    )

}
export default ListPersonnages;