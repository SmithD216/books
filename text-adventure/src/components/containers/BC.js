import React, { Component } from "react";
import Choice from "../controls/Choice";
import content from "../story/ButtonText";

export default class BC extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: 0,
            butId: 0
        };
    }

    createList(choiceText){
        return (choiceText.map((item,itemno) => 
            <div className="choice"><Choice key={parseInt(itemno)} butId={this.state.butId} text={item}/></div>
        )
        );
    }

    render() {
        return (
            <div className="button-container">
                {this.createList([content(this.state.status)])}
            </div>
        )
    }
}