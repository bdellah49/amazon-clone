import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import './styles/header.css'

function Header(props) {
    console.log(props.infos.infos)
  return (
    <div className="menu-header">
        <BiUserCircle style={{fontSize:'22px',color:'white',margin:'0px',padding:'0px'}}/>
        Hello, {props.infos.infos.name}
    </div>
  )
}

export default Header