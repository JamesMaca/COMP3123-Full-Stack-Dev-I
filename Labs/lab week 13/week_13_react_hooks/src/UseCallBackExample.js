import React from 'react'

export default function UseCallBackExample(props) {
  return (
    <div>
        <h2>UseCallBackExample</h2>
        <button onClick={props.handler}>Make Callback</button>
    </div>
  )
}
