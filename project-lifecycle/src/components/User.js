import React from 'react';
import axios from 'axios';

class User extends React.Component {

    componentDidMount() {
        console.log("User: Mounted!")
        axios.get('https://api.github.com/users/scriptsalmon/followers')
        .then(res => {
          console.log(res.data)
          this.setState({
            ...this.state,
            userData: [res.data]
          })
        })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.user.login}</h1>
                    <a>{this.props.user.bio}</a>
                </header>

            </div>
        )
    }
}

export default User;