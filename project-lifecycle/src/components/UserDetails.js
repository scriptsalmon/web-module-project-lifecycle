import React from 'react';

class UserDetails extends React.Component {

    handleClick = () => {
        console.log("UserDetails: ")
    }

    render() {
        // console.log("UserDetails: Render ", this.state.followers)
        return (
            <>
                {
                    this.props.followerData.map(follower => (
                        <div onClick={this.handleClick()} key={follower.id} className="follower">{follower.login}</div>
                    ))
                }
            </>
        )
    }
}

export default UserDetails;