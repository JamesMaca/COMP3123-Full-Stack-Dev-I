import React, { Fragment } from 'react'

export default function UserDataRow(props) {
  return (
    <Fragment>
        <div>
            <img src={props.user.avatar} alt={props.user.first_name} />
            <h2>{props.user.id}</h2>
            <h3>{props.user.email}</h3>
            <h3>{props.user.first_name} {props.user.last_name}</h3>
            <a href={`https://reqres.in/api/users/${props.user.id}`}>more...</a>
        </div>
    </Fragment>
  )
}
