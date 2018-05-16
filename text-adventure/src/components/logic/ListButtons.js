import React, { Component } from "react";
import Button from "../controls/Button";
import player from "../logic/player";
import desc from "../story/ButtonText";

export default class ListButtons extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount(){
        this.setState({
            list: this.createList(desc(player.status))
        });
    }

    createList(content){
        const buttonList = content.map((item,itemno) =>
            <Button key={itemno.toString()} text={item} statno={itemno + 1}/>
        );

        return(buttonList);
    }

    render() {
        return (
            <div class="button-container">
                {this.state.list}
            </div>
        )
    }
}