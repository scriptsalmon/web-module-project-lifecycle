import React, { Component } from 'react'

class UserList extends Component {

    componentDidMount() {
        console.log("UserList: Mounted");
    }

    render() {
        console.log("UserList: Renders");
        return (
            <div>
                <h1>HELOOOOO</h1>
            </div> 
        )
    }
}

export default UserList;