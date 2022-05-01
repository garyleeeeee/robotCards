import {React, Component} from "react";
import CardList from "../components/CardList";
import './App.css';
import Scroll from '../components/Scroll'
import SomeBtns from "../components/SomeBtns";


class App extends Component {

    constructor() {
        super()
        this.state = {
            usernames : [],
            inputContent : '',
        }
    }

    getUserInput = (event) => {
        this.setState({inputContent:event.target.value});

    }

    addToArray = () => {
        const {inputContent, usernames} = this.state;
        usernames.push(inputContent);
        this.setState({usernames:usernames})
        // TODO: Clear Searchfield
    }

    clearUsers = () => {
        this.setState({usernames:[]})
    }
    
    render() {
        const {usernames} = this.state;
        return (
            <div>
                <h1 className="tc f-subheadline lh-title gold">Robot Generator</h1>
                <div className="tc">
                    <SomeBtns inputChange={this.getUserInput} addingUser={this.addToArray} clearTapped={this.clearUsers} />
                </div>
                <Scroll>
                    <CardList userArray={usernames} />
                </Scroll>
            </div>
        )
    }
}

export default App;