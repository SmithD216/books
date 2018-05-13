import React, { Component } from "react";
import Button from "../controls/Button";

function ListButtons(props){
    const content = props.content;
    const buttonList = content.map((item) => 
        <div class="button" key={item.toString()}>{item}</div>
    );

    return(
        <div class="button-container">{buttonList}</div>
    );
}

const content = ["1", "2", "3", "4"];

export default class BC extends Component {
    render() {
        return (
            <ListButtons content={content} />
        )
    }
}