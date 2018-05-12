import React, { Component } from "react";
import IC from "./IC";
import BC from "./BC";

export default class GC extends Component {
    render() {
        return (
            <div class="game-container">
                <IC />
                <BC />
            </div>
        )
    }
}