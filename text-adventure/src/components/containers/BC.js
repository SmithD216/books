import React, { Component } from "react";
import Choice from "../controls/Choice";
import content from "../story/ButtonText";

export default class BC extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            status: 0,
            butId: 0,
            text: "-"
        };
    }

    handleChange(e){
        const butText = desc(this.state.status);
        this.setState({text: butText});
    }

    createList(){
        console.log(butText);
    }

    render() {
        return (
            <div className="button-container">
                <Choice />
                <Choice />
                <Choice />
                <Choice />
            </div>
        )
    }
}