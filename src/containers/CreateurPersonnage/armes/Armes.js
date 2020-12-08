import React, {Component} from "react";
import Arme from '../../../components/Arme/arme';
import Arc from  "../../../asset/assets/images/armes/arc.png";
import Epee from  "../../../asset/assets/images/armes/epee.png";
import Fleau from  "../../../asset/assets/images/armes/fleau.png";
import Hache from  "../../../asset/assets/images/armes/hache.png";


class Armes extends Component {
    render(){
        return(
            <div className="row no-gutters text-center">
                {
                   this.props.armes.map((arme, index) => {
                    let armeImage = '';
                        if(arme === 'arc') armeImage = Arc;
                        else if(arme === 'epee') armeImage = Epee;
                        else if(arme === 'fleau') armeImage = Fleau
                        else if(arme === 'hache') armeImage = Hache;
                        
                        return  (
                            <div  className="col-3" key={index} > 
                                <Arme 
                                    armeImage={armeImage} 
                                    choixArme={() => this.props.choixArme(arme)}
                                    iscurrentArme = {this.props.currentArme === arme}
                                > 
                                    {arme}
                                </Arme>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default Armes;