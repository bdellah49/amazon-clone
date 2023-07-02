import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import './styles/deliver.css'

function Deliver({country}) {
  return (
    <div className="deliver">
        <p style={{fontSize:'12px',margin:'0px',padding:'0px',color:"white"}}>Deliver to</p>
        <div className="location">
            <FaLocationDot style={{margin:'0px',padding:'0px',color:"white"}}/>
            <p style={{fontWeight:'bold',margin:'0px',padding:'0px',color:'white'}}>{country}</p>
        </div>
        
    </div>
    
  )
}

export default Deliver