import React from "react";
import Carac from './carac/carac';

const CaracPerso = (props) => {
    return (
        <>
            <div>
                Point restant :
                <span className="badge badge-success"> 
                    {props.point}
                </span>
            </div>
            <div>
                <Carac nbPoint= {props.force} moins={() => props.enleverPoint('force')} plus={() => props.ajouterPoint('force')}>Force</Carac>
                <Carac nbPoint= {props.agilite} moins={() => props.enleverPoint('agilite')} plus={() => props.ajouterPoint('agilite')}>Agilite</Carac>
                <Carac nbPoint= {props.intelligence} moins={() => props.enleverPoint('intelligence')} plus={() => props.ajouterPoint('intelligence')}>Intelligence</Carac>
            </div>
        </>
    )

}
export default CaracPerso;