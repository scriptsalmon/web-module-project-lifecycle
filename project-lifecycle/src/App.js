import './App.css';
import React from 'react';
import UserList from './components/UserList';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     userData: []
  //   }
  // }

  componentDidMount() {
    console.log("App: Mounted");
  }
  render() {
    console.log("App: Renders");
    return (
    <div className="App">
      <header className="App-header">
        <a href="http://localhost:3000/">Home</a>
      </header>
      <UserList component={UserList}/>
    </div>      
    )
  }
}

export default App;
