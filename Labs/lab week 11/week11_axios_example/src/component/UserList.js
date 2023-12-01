import React, { Component } from 'react'
import axios from 'axios';
import UserDataRow from './UserDataRow';
import AxiosApi from '../api/AxiosApi'

export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        this.getAllUsers(1)
        this.getDataUsingAxiosInstance()
    }

    getDataUsingAxiosInstance = async () => {
        const data = await AxiosApi.get('/users?page=1')
        console.log(data)
    }

    fetchAllUsers = async () => {
        try {
            var res = await fetch('https://reqres.in/api/users?page=1')
            // console.log(res)
            // console.log(await res.json())
            // console.log(res.data.data)

            const users = await res.json()
            console.log(users.data)

        } catch (error) {
            console.log(error)
        }
    }

    getAllUsers = async (pno) => {
        try {
            var res = await axios.get(`https://reqres.in/api/users?page=${pno}`)
            console.log(res)
            console.log(res.data)
            console.log(res.data.data)
            this.setState({...this.state,
                users: res.data.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
    return (
        <div>
            <h2>User List</h2>
            <button onClick={() => this.getAllUsers(1)}>Get Users - page 1</button>
            <button onClick={() => this.getAllUsers(2)}>Get Users - page 2</button>
            <button onClick={this.fetchAllUsers}>Fetch Users</button>
            <div>
                {JSON.stringify(this.state.users)}
                {this.state.users.map((user) => {
                    return (
                        <h3 key={user.id}>{user.email}</h3>
                    )
                })}
                {
                    this.state.users.map((user) => (
                        <UserDataRow  key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    )
  }
}
