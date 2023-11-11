import React, { Component } from 'react';

export default class Student extends Component {

    constructor(){
        super()
        this.state = {
            fnm: 'James'
        }
    }

    render() {
        return (
            <h1>Student of {this.props.college}</h1>
        );
    }
}