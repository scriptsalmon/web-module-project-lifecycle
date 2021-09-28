import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                {this.props.user[0]}
            </div>
        )
    }
}

export default User;