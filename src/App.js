import React, { Component } from 'react';
import './App.css';
import Login_enter from './Pages/Login/Login-Main';
import Home from './Pages/Home/Home';
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : null
    }
  }
  componentDidMount()
  {
    this.findUser();
  }
  findUser(){
    let token =localStorage.getItem('Token')
    if(token){
      this.setState({
        user:token
      })
    }
    
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login_enter/>)}
      </div>
    );
  }
}

export default App;
