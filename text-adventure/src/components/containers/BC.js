import React, { Component } from "react";
import Button from "../controls/Button";
import player from "../logic/player";

export default class BC extends Component {
    render() {
        return (
            <div class="button-container">
                <Button butcount="1"/>
                <Button butcount="2"/>
                <Button butcount="3"/>
                <Button butcount="4"/>
            </div>
        )
    }
}