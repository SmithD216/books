import React, { Component } from "react";

export default class Choice extends Component {

    resolveButton(e, id){
        e.preventDefault();
        console.log(id);
    }

    render() {
        return (
                <a href="" onClick={(e) => {this.resolveButton(e,this.props.id)}}>
                    <p>{this.props.text}</p>  
                </a>

        )
    }
}