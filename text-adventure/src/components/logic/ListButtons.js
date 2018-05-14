import React, { Component } from "react";
import Button from "../controls/Button";
import player from "../logic/player";
import text from "../story/ButtonText";

function createList(content){
    const buttonList = content.map((item) =>
        <Button key={item.toString()} text={item}/>
    );
    return(buttonList);
}

export default class ListButtons extends Component {
    render() {
        return (
            <div class="button-container">{createList(text(player.status))}</div>
        )
    }
}