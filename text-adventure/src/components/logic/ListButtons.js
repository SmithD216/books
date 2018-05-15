import React, { Component } from "react";
import Button from "../controls/Button";
import player from "../logic/player";
import desc from "../story/ButtonText";

function createList(content){
    const buttonList = content.map((item,itemno) =>
        <Button key={itemno.toString()} text={item} statno={itemno + 1}/>
    );
    return(buttonList);
}

export default class ListButtons extends Component {
    render() {
        return (
            <div class="button-container">{createList(desc(player.status))}</div>
        )
    }
}