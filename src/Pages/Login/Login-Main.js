import React , { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './Login.scss'
import Signup from './Sign-up'
import Login from './Login'
import imge from './2.png'
class Login_enter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="App">
          <div className="App__Aside">
            <div>
              <img src={imge} width="500" height="400" alt="boohoo"  className="img-responsive"/>
               <h1>We Create new world for happy living</h1>
            </div>
          </div>
         <div className="App__Form">
          <Router>
            <Switch>
              <Route path="/SignUp">
              <Signup />
              </Route>
              <Route path="/">
              <Log/>
              </Route>
            </Switch>
          </Router>
         </div>
       </div>
      )
    }
}
function Log() {
    return <Login/>
}
function SignUp() {
    return <Signup/>;
}
  
export default Login_enter;