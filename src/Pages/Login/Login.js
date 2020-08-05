import React , { Component } from "react";
import { Link,Redirect } from 'react-router-dom';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import  Home from "../Home/Home"
class Login extends Component{
    constructor(props)
{
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state={
        isRevealed: false,
        email : "",
        password : "",

    }
}
togglePassword = event =>{
    this.setState({
        isRevealed: !this.state.isRevealed
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
submitHandler(e){
    let val ={
        email:this.state.email,
        password:this.state.password
     }
    e.preventDefault()
    console.log(val)
    axios.post('http://13.233.109.125/api/v1/login/',val,{})
    .then(responce =>{
        localStorage.setItem('Token',responce['data']['token'] )
        console.log(responce['data']['token'])
    }).catch(error => {
        console.log(error)
    })
}
render()
    {
    const {isRevealed} = this.state;
    return (
        <div >
        <div className="title">Kuriyam</div>
        <div className="title__Sub">Welcome to Kuriyam</div>
         <form className="form" onSubmit={this.submitHandler}>
            <div className="App__Form__lable">User name or Email</div>
           
            <input className="App__Form__Input"
            type="email"
            id="email"
            name="email"
            placeholder="mark@kuriyam.io"
            onChange={this.handleChange}
            value={this.state.email}
            />
            
            <div className="App__Form__lable">Password</div>
          
           <input className="App__Form__Input"
            type= {isRevealed ? "text" : "password"}
            id="password"
            name="password"
            onChange={this.handleChange}
            placeholder="*******"
            value={this.state.password}
            />
            <i onClick={this.togglePassword} ref={this.ioconreveal}>
                    {
                        isRevealed?
                        <FontAwesomeIcon icon={faEye} className="hide"/>:
                        <FontAwesomeIcon icon={faEyeSlash} className="hide" />
                    }
            </i>
            
          
            <div><a href="/" className="App__Form__forgot">Forgot Password?</a></div>
            <div className="wrapper"><button  className="Button" >Sign In</button></div>
           </form>
           
           <div className="or"><span>or</span></div>
           <a href="" class="google"> Login with Google+</a>
           <div className="signin">New to Kuriyam?   <Link to="/SignUp"  className="signin__link">Create Account</Link> </div>
         
           </div>
    )
}
}

export default Login ;