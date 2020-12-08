import React, {Component} from "react";
import Alert from "../../components/Alert/alert";
import Bouton from "../../components/bouton/bouton";
import Titre from "../../components/Titre/titre";
import Armes from "./armes/Armes";
import Personnage from "./Personnage/personnage";
import axios from 'axios';



class CreateurPersonnage extends Component {
    state = {
        personnage:{
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0,
            arme: null
        },
        point: 7,
        armes : null,
        persoCreate : false,
        loading: false,
        nomPerso: ""
    }

    componentDidMount = () => {
        this.setState({loading : true})
        axios.get("https://creaperso-e33f9.firebaseio.com/armes.json")
            .then(response => {
                const armeArray = Object.values(response.data);
                this.setState({
                    armes : armeArray,
                    loading: false
                })
            })
            .catch(error => {
                console.log("error");
                this.setState({
                    loading: false
                })
            })
    }   

    handlePrecedent = () => {
        console.log("imagePrecedente")
        this.setState(oldState => {
            let newPersonnage = {...oldState.personnage}
            if(newPersonnage.image <= 1) newPersonnage.image = 3
            else newPersonnage.image --;
            return {personnage : newPersonnage}
        });
        
    }

    handleSuivant = () => {
        console.log("imageSuivante")
        this.setState(oldState => {
            let newPersonnage = {...oldState.personnage}
            if(newPersonnage.image >= 3) newPersonnage.image = 1
            else newPersonnage.image ++;
            return {personnage : newPersonnage}
        });
        
    }

    enleverPoint = (caracteristique) => {
        console.log(caracteristique)
        if(this.state.personnage[caracteristique] <= 0 || this.state.point >= 7) return null;
        this.setState(oldState => {
            let carac = oldState.personnage[caracteristique] - 1;
            let newPersonnage = {...oldState.personnage};
            let nbPoint = oldState.point + 1;
            newPersonnage[caracteristique] = carac;
            return {
                personnage : newPersonnage,
                point : nbPoint
            } 
        })
    }

    ajouterPoint = (caracteristique) => {
        console.log(caracteristique)
        if(this.state.personnage[caracteristique] >= 5 || this.state.point <= 0) return null;
        this.setState(oldState => {
            let carac = oldState.personnage[caracteristique] + 1;
            let newPersonnage = {...oldState.personnage};
            let nbPoint = oldState.point - 1;
            newPersonnage[caracteristique] = carac;
            return {
                personnage : newPersonnage,
                point : nbPoint
            } 
        })
    }

    handleChoixArme = (armeChoix) => {
        this.setState(oldState => {
            let newPersonnage = {...oldState.personnage}
            newPersonnage.arme = armeChoix;
            return {
                personnage: newPersonnage
            }
            
        })
    }

    handleReinitialisation = () => {
        this.setState(oldState => {
            let newPersonnage = {...oldState.personnage}
            newPersonnage.force = 0
            newPersonnage.image = 1
            newPersonnage.intelligence = 0
            newPersonnage.agilite = 0
            newPersonnage.arme = null
            return {
                personnage : newPersonnage,
                persoCreate : false,
                point : 7,
                armes : ["arc", "fleau", "epee", "hache"],
                nomPerso: "",
                loading:false,
            }
        });
    }

    handleCreation = () => {
        this.setState({loading : true})
        const player ={
            perso: {...this.state.personnage},
            nom : this.state.nomPerso
        }
        axios.post("https://creaperso-e33f9.firebaseio.com/person.json", player)
            .then(response => {
                console.log(response)
                this.setState({loading : false, persoCreate : true})
                this.props.refrech()
                this.handleReinitialisation()
            })
            .catch(error => {
                console.log(error)
                this.setState({loading : false, persoCreate : false})
                this.handleReinitialisation()
            })
    }

    render(){
        console.log(this.state.armes);
        return(
            <div className="container">
                {
                    this.state.persoCreate ? <Alert /> : ""
                }
                <Titre>Createur de personnage</Titre>

                <div className="form-group">
                    <label htmlFor="nomPerso">Nom Personnage : </label>
                    <input 
                        type="test" 
                        className="form-control" 
                        id="nomPerso" 
                        placeholder="Enter nom perso"
                        value={this.state.nomPerso}
                        onChange={event => this.setState({nomPerso : event.target.value})}
                    />
                </div>

                <Personnage image={this.state.personnage.image}
                            force={this.state.personnage.force}
                            agilite={this.state.personnage.agilite}
                            intelligence={this.state.personnage.intelligence}
                            point={this.state.point}
                            precedent={this.handlePrecedent}
                            suivant={this.handleSuivant}
                            ajouterPoint={this.ajouterPoint}
                            enleverPoint={this.enleverPoint}
                            />
                {
                    this.state.loading && <div> Chargement ... </div>
                }
                { this.state.armes &&
                    <Armes 
                        armes={this.state.armes} 
                        choixArme ={this.handleChoixArme}
                        currentArme = {this.state.personnage.arme}
                    />
                }
                <div className="row no-gutters">
                    {/*<div className="col border">test1</div>
                    <div className="col-6 border">test2</div>
                    <div className="col border">test3</div>*/}
                    <Bouton classNameBouton="btn btn-danger" styleCss="col-6" clic={() => this.handleReinitialisation()}>Réinitialisé</Bouton>
                    <Bouton classNameBouton="btn btn-success" styleCss="col-6" clic={() => this.handleCreation()}>Créer</Bouton>

                </div>              
            </div>
        )
    }
}

export default CreateurPersonnage;