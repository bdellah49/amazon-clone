import React from 'react'
import Header from './sub-header/menu/Header.js'
import Body from './sub-header/menu/Body.js'
import Help from './sub-header/menu/Help.js'
import './sub-header/menu/styles/menu.css'

function Menu(infos) {
  return (
    <div className="Menu">
        <Header infos={infos}/>
        <Body/>
        <Help infos={infos}/>
    </div>
  )
}

export default Menu