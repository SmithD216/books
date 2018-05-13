import React, { Component } from "react";

export default class Button extends Component {

    constructor(props){
        super(props);
        this.state = {text: "Placeholder"};
    }

    render() {
        return (
            <div class="button">
                <p>{this.state.text}</p>
            </div>
        )
    }
}