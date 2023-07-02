import React from 'react'
import './styles/welcome.css'
import { BiUserCircle } from "react-icons/bi";


function Welcome({name,screen,mobile}) {
  if(screen){
    if(mobile){
      return (
        <div className="welcome-mobile">
          <p>{name}</p> 
          <BiUserCircle style={{fontSize:'28px',color:'white',margin:'0px',padding:'0px'}}/>
          {/* <h5>Account & Lists</h5> */}
        </div>
      )
    }else{
      return (
        <div className="welcome">
          <p>Hello,{name}</p> 
          <h5>Account & Lists</h5>
        </div>
      )
    }
  }
  return 
  
}

export default Welcome