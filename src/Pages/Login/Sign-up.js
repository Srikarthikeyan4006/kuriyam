import React , { Component } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class SignUp extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state={
            isRevealed: false,
            name :"",
            email : "",
            password : ""
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
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
         }
        e.preventDefault()
        console.log(val)
        axios.post('http://13.233.109.125/api/v1/signup/',val,{})
        .then(responce =>{
            window.alert("Successfully Signed Up back to login");
            console.log(responce)
        }).catch(error => {
            console.log(error)
        })
    }
    render()
    {
        const {isRevealed} = this.state;
    return (
        <div className>
        <div className="title">Join Kuriyam</div>
        <div className="title__Sub">Create new account</div>
         <form className="form" onSubmit={this.submitHandler}>
         <div className="App__Form__lable">Name</div>
           
            <input className="App__Form__Input"
            type="text"
            id="name"
            name="name"
            placeholder="Albert Mark"
            onChange={this.handleChange}
            value={this.state.name}
            />
            <div className="App__Form__lable">Email</div>
        
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
        
            <div className="wrapper"><button  className="Button" >Sign Up</button></div>
           </form>
   
           <div className="or"><span>or</span></div>
           <a href="" className="google"> Login with Google+</a>
           <div className="signin">Alread have One? <Link to="/Login"  className="signin__link">Sign-In</Link> </div>
         
           </div>
    )
}
}

export default SignUp ;