import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import UserList from './components/UserList';
import Search from './components/Search';

class App extends Component {
  state = {
    userData: [],
    userName: ''
  }

  // componentDidMount() {
  //   // console.log("App: Mounted");
  //   axios.get('https://api.github.com/users/scriptsalmon')
  //   .then(res => {
  //     // console.log(res.data)
  //     this.setState({
  //       ...this.state,
  //       userData: [res.data]
  //     })
  //   })
  // }

  handleSubmit = () => {
    // console.log("App: Mounted");
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      // console.log(res.data)
      this.setState({
        ...this.state,
        userData: [res.data]
      })
    })
  }

  handleSearch = (e) => {
    this.setState({
      ...this.state,
      userName: e.target.value
    })
    // console.log(this.state.userName);
  }

  render() {
    // console.log("App: Renders");
    return (
    <div className="App">
      <header>
        <div className="logo">
          [logo]
        </div>
        <nav>
          <a href="http://localhost:3000/">Home</a>
        </nav>
        <Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
      </header>
      {
        <UserList userData={this.state.userData} />
      }
    </div>      
    )
  }
}

export default App;
