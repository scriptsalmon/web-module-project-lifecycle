import './App.css';
import axios from 'axios';
import React from 'react';
import UserList from './components/UserList';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     userData: []
  //   }
  // }
  state = {
    userData: []
  }

  componentDidMount() {
    console.log("App: Mounted");
    axios.get('https://api.github.com/users/scriptsalmon')
    .then(res => {
      console.log(res);
      this.setState({
        ...this.state,
        userData: res.data
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
      <UserList userData={this.state.userData}/>
    </div>      
    )
  }
}

export default App;
