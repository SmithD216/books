import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            statno: this.props.statno,
            text: this.props.text
        };
        this.resolveButton = this.resolveButton.bind(this);
    }

    resolveButton(but){
        but.preventDefault();
        console.log(this.state.statno);
    }

    render() {
        return (
            <div className="button">
                <a href="#" onClick={this.resolveButton}><p>{this.state.text}</p></a>
            </div>
        )
    }
}