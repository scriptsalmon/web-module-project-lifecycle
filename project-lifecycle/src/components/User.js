import React from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

class User extends React.Component {
    state = {
        followerData: [],
        showFollowers: false
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/scriptsalmon/followers')
        .then(res => {
        //   console.log("User: Axios get req ", res.data)
          this.setState({
            ...this.state,
            followerData: res.data
          })
        })
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            showFollowers: !this.showFollowers
        })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.user.login}</h1>
                    <a>{this.props.user.bio}</a>
                </header>
                <button onClick={this.handleClick}>Show Followers</button>
                {
                    this.state.showFollowers && <UserDetails followerData={this.state.followerData} />
                }
            </div>
        )
    }
}

export default User;