import React, { Component } from "react";

export default class ListButtons extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: this.props.buttons
        };
    }

    render() {
        return (
            <div class="button-list">
                {this.state.list}
            </div>
        )
    }
}