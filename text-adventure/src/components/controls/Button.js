import React, { Component } from "react";

export default class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            statno: this.props.statno,
            text: this.props.text
        };
    }

    render() {
        return (
            <div class="button">
                <a href={this.state.statno}><p>{this.state.text}</p></a>
            </div>
        )
    }
}