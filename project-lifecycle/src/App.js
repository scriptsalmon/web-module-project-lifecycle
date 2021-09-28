import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import UserList from './components/UserList';

class App extends Component {
  state = {
    userData: [],
    data: [1, 2, "three", "four"]
  }

  componentDidMount() {
    console.log("App: Mounted");
    axios.get('https://api.github.com/users/scriptsalmon')
    .then(res => {
      this.setState({
        ...this.state,
        userData: res
      })
    })
  }


  render() {
    console.log("App: Renders");
    return (
    <div className="App">
      <header className="App-header">
        <a href="http://localhost:3000/">Home</a>
      </header>
      {
        this.state.userData.length === 0 ? <div>Loading ...</div> : <UserList userData={this.state.userData} />
      }
    </div>      
    )
  }
}

export default App;
