import React from 'react'
import './styles/cart.css'

import { BiCart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";



function Cart({cart,screen,mobile}) {
  if(screen) {
    if(mobile){
      return (
        <div className='cart'>
          <div className='cart-items'>
            <p style={{position:'relative',top:'10px',fontSize:'18px',color:'#FF9900',margin:'0px',padding:'0px'}}>{cart}</p>
            <BiCart style={{fontSize:'32px',color:'white',margin:'0px',padding:'0px'}}/>
          </div>
          
          {/* <p>Cart</p> */}
        </div>
      )
    }else{
      return (
        <div className='cart'>
          <div className='cart-items'>
            <p style={{position:'relative',top:'10px',fontSize:'18px',color:'#FF9900',margin:'0px',padding:'0px'}}>{cart}</p>
            <BiCart style={{fontSize:'32px',color:'white',margin:'0px',padding:'0px'}}/>
          </div>
          
          <p>Cart</p>
        </div>
      )
    }
    
  }
  return ;
  
}

export default Cart