import React from 'react';

class UserDetails extends React.Component {

    componentDidMount() {

    }

    render() {
        // console.log("UserDetails: Render ", this.state.followers)
        return (
            <>
                {
                    this.props.followerData.map(follower => (
                        <div key={follower.id} className="follower">{follower.login}</div>
                    ))
                }
            </>
        )
    }
}

export default UserDetails;