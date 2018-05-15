import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <div class="button">
                <a href=""><p>{this.props.text}</p></a>
            </div>
        )
    }
}