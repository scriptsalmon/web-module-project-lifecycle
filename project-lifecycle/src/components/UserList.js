import React from 'react'
import User from './User';

class UserList extends React.Component {

    componentDidMount() {
        console.log("UserList: Mounted");
    }

    render() {
        console.log("UserList: Renders");
        return (
            <div>
                <h1>HELLOOOOO</h1>
                {this.props.userData.map(user => (
                    <User key={user.id} user={user}/>
                ))}
            </div> 
        )
    }
}

export default UserList;