import React from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

class User extends React.Component {
    state = {
        followerData: [],
        showInfo: false,
        showFollowers: false
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/scriptsalmon/followers')
        .then(res => {
          console.log("User: Axios get req ", res.data)
          this.setState({
            ...this.state,
            followerData: res.data
          })
        })
    }

    handleInfo = () => {
        this.setState({
            ...this.state,
            showInfo: !this.showInfo
        })
    }

    handleFollowers = () => {
        this.setState({
            ...this.state,
            showFollowers: !this.showFollowers
            // showFollowers: this.showFollowers ? false : true
        })
    }

    render() {
        return (
            <div className="User">
                <header>
                    <img width="100px" height="100px" src={this.props.user.avatar_url} alt="user pfp"/>
                    <h2>{this.props.user.login}</h2>
                </header>
                <div className="UserDetails">
                    <button onClick={this.handleInfo}>More Info</button>
                    {
                        this.state.showInfo && <div className="UserInfo">
                            <a>[ {this.props.user.bio !== null ? this.props.user.bio : "No bio"} ]</a> <br/>
                            <a>Type: {this.props.user.type}</a> <br/>
                            <a>User_id: {this.props.user.id}</a> <br/>
                            <a>Node_id: {this.props.user.node_id}</a> <br/>
                            <a>Repos_url: </a><a href={this.props.user.repos_url}>link</a> <br/>
                        </div>
                    }
                </div>
                <button onClick={this.handleFollowers}>Show Followers</button>
                {
                    this.state.showFollowers && <UserDetails followerData={this.state.followerData} />
                }
            </div>
        )
    }
}

export default User;