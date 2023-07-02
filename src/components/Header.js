import React from 'react'
import './styles/header.css'
import Deliver from './sub-header/Deliver.js'
import logo from './images/logo.png'
import Search from './sub-header/Search.js'
import Lang from './sub-header/Lang.js'
import Welcome from './sub-header/Welcome.js'
import Returns from './sub-header/Returns.js'
import Cart from './sub-header/Cart.js'




const infos = {
  Famillyname:'Beliacine',
  name:'Abdellah',
  Adress:{
    country:'Algeria',
    city:'El-eulma',
    postal:'19600'
  },
  language:'EN',
  cart:0
}
function Header() {
  
  
  return (
    <div className="header">
      <div className="left">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <Deliver className="Deliver" country={infos.Adress.country} />
        <div className="left-mobile">
        <Welcome name={infos.name} screen={window.screen.width<600} mobile={true}/>
        <Cart
          className=".small_cart"
          cart={infos.cart}
          screen={window.screen.width<600}
          mobile={true}
        />
        </div>
        
      </div>
      <div className="middle">
        <Search />
      </div>
      <div className="right">
        <Lang language={infos.language} />
        <Welcome name={infos.name} screen={true} mobile={false}/>
        <Returns />
        <Cart className=".Cart" cart={infos.cart} screen={true} mobile={false} />
      </div>
    </div>
  );
}

export default Header