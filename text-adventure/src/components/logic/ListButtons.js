import React, { Component } from "react";
import Button from "../controls/Button";

function createList(content){
    const buttonList = content.map((item) =>
        <Button key={item.toString()} text={item}/>
    );

    return(buttonList);
}

export default class ListButtons extends Component {
    render() {
        return (
            <div class="button-container">{createList(["1", "3", "3", "4"])}</div>
        )
    }
}