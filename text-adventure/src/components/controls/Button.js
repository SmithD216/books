import React, { Component } from "react";
import player from "../logic/player";
import desc from "../story/ButtonText"

export default class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            statno: this.props.butcount,
            text: desc(player.status)[this.statno]
        };
        this.resolveButton = this.resolveButton.bind(this);
    }

    componentDidMount(){
        this.setState(prevState => ({
            text:desc(player.status)[this.state.statno-1]
        }));
    }

    resolveButton(but){
        console.log(player.status);
        but.preventDefault();
        player.status += parseInt(this.state.statno);

        this.setState(prevState => ({
            text:desc(player.status)[this.state.statno]
        }));

    }

    render() {
        return (
            <div className="button">
                <a href="#" onClick={this.resolveButton}><p>{this.state.text}</p></a>
            </div>
        )
    }
}