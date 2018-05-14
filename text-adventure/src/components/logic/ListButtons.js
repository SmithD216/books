import React, { Component } from "react";
import Button from "../controls/Button";
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
            <div class="button-container">{createList(text(0))}</div>
        )
    }
}