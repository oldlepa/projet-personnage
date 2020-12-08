import React, {Component} from "react";
import ListPersonnages from "../../components/Perso/listePersonnages";
import axios from 'axios';

class ListePersonnages extends Component {
    state = {
        personnages : []
    }

    loadPersonnage = () => {
        axios.get("https://creaperso-e33f9.firebaseio.com/person.json").then(response => {
            this.setState({personnages : Object.values(response.data)});
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount = () => {
        this.loadPersonnage();
    }

    componentDidUpdate = (oldProps, oldState) => {
        if(oldProps.refrech !== oldState.refrech) {
            this.loadPersonnage();
        }
    }

    render(){
        return(
            <>
                <div className="container" style={{marginTop:'10px'}}>
                    <div className="row no-gutters">
                        {
                            this.state.personnages && this.state.personnages.map((personnage, index) => {
                                return (
                                    <div className="col-6 border border-dark" key={index}>
                                        <ListPersonnages {...personnage}/>
                                    </div>
                                )
                            })
                        }
                    </div>  
                </div>
            </>
        )
    }
}

export default ListePersonnages;