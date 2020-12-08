import React, {Component} from "react";
import ImagesPerso from './imagesPerso/imagesPerso';
import CaracPerso from './../caracteristique/caracPerso';

class Personnage extends Component {
    render(){
        const {image, force, agilite, intelligence, point, ajouterPoint, enleverPoint} = this.props;
        return(
            <div className="row no-gutters">
                <div className="col-6">
                    
                    <ImagesPerso numImage={image} flecheGauche={this.props.precedent} flecheDroite={this.props.suivant}/>
                        
                </div>
                <div className="col-6"> 
                    <CaracPerso 
                        point={point} 
                        force={force}
                        agilite={agilite}
                        intelligence={intelligence}
                        enleverPoint={enleverPoint}
                        ajouterPoint={ajouterPoint}
                        />
                    
                </div>
            </div>
        )
    }
}

export default Personnage;