import React, { Component } from 'react'

export default class myInfo extends Component {

    constructor(){
        super()
        this.state = {
            myStudentNum: "101362896",
            myName: "James MacAloeny"
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.myStudentNum}</p>
                <p>{this.state.myName}</p>
                <p>{this.props.college}</p>
            </div>

        )
    }
}
