import React from "react";

const Arme = (props) => {
    return <> 
        <div> 
            <img 
                style={{
                    opacity: props.iscurrentArme ? "1" : "0.5"
                }}
                src={props.armeImage} 
                alt={props.armeImage} 
                onClick={props.choixArme}/>
        </div>
        <div>
            {props.children}
        </div>
    </>

}
export default Arme;