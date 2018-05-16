import React, { Component } from "react";
import Button from "../controls/Button";
import player from "../logic/player";
import desc from "../story/ButtonText";

export default class ListButtons extends Component {

    constructor(props){
        super(props);
        this.state = {
            key: player.status,
            list: []
        };
        this.createList = this.createList.bind(this);
    }

    componentDidMount(){
        this.createList(desc(player.status));
    }

    createList(content){
        const buttonList = content.map((item,itemno) =>
            <Button key={itemno.toString()} text={item} statno={itemno + 1}/>
        );
        console.log(buttonList);
        this.setState(prevState => ({
            key: player.status,
            list: buttonList
        }));
        console.log(this.state.list);
    }

    render() {
        return (
            <div class="button-list">
                {this.state.list}
            </div>
        )
    }
}