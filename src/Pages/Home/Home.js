import React , { Component } from "react"

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    localStorage.clear();
   
}
render()
{
    return(
        <div className="App__Aside">
           <h1>You are in Home !!!</h1>
            <button onClick={this.logout} className="Home__Button">Logout</button>
        </div>
    )
}
}
export default Home;