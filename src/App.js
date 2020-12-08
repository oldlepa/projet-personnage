import React, {Component} from "react";
import CreateurPersonnage from "./containers/CreateurPersonnage/createurPersonnage";
import ListePersonnages from "./containers/listesPersonnages/listePersonnages"

class App extends Component {
    state = {
        refrech : false
    }

    handleRefrech = () => {
        this.setState(oldState => {
            return {
                refrech : !oldState.refrech
            }
        }
        )
    }
    render(){
        return(
            <>
                <CreateurPersonnage refrech={this.handleRefrech}/>
                <ListePersonnages refrech={this.state.refrech}/>
            </>
        )
    }
}

export default App;