import React, { Component } from 'react'

export default class Hello extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'NO Name',
            city: 'TOR'
        }
    }

    onSayHelloClick = (e) => {
        e.preventDefault()
        alert('Hello : ' + e.target.value)
        console.log(this.state)
        this.setState({
          ...this.state,
          name: e.target.value
      })
    }

    onValueChanged = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

  render() {
    return (
      <div>
        <h1>Data Entry</h1>
        <input 
            type="text" 
            name='txtName'
            onChange={e => this.onValueChanged(e)}
            placeholder='Enter Your Name'/>
            <h3>{this.state.name}</h3>
        <button onClick={e => this.onSayHelloClick(e)} value="TEST">Click Here</button>
      </div>

    )
  }
}
