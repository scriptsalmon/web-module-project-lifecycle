import React from 'react';

class UserDetails extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        // console.log("UserDetails: Component Mount ", this.props.followerData)
        this.setState({
            ...this.state,
            followers: this.props.followerData
        })
    }
    render() {
        console.log("UserDetails: Render ", this.state.followers)
        return (
            <div>
                {
                    this.state.followers.map(follower => (
                        <div key={follower.id} >yo</div>
                    ))
                }
            </div>
        )
    }
}

export default UserDetails;