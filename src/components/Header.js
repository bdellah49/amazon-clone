import React from 'react'
import './styles/header.css'
import { useState, useLayoutEffect } from "react";
import Deliver from "./sub-header/header/Deliver.js";
import logo from "./images/logo.png";
import Search from "./sub-header/header/Search.js";
import Lang from "./sub-header/header/Lang.js";
import Welcome from "./sub-header/header/Welcome.js";
import Returns from "./sub-header/header/Returns.js";
import Cart from "./sub-header/header/Cart.js";

function useWindowSize() {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size[0];
}

function Header({ infos }) {
  console.log(useWindowSize());
  return (
    <div className="header">
      <div className="left">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <Deliver className="Deliver" country={infos.Adress.country} />
        <div className="left-mobile">
          <Welcome
            name={infos.name}
            screen={useWindowSize() < 600}
            mobile={true}
          />
          <Cart
            className=".small_cart"
            cart={infos.cart}
            screen={useWindowSize() < 600}
            mobile={true}
          />
        </div>
      </div>
      <div className="middle">
        <Search />
      </div>
      <div className="right">
        <Lang language={infos.language} />
        <Welcome name={infos.name} screen={true} mobile={false} />
        <Returns />
        <Cart
          className=".Cart"
          cart={infos.cart}
          screen={true}
          mobile={false}
        />
      </div>
    </div>
  );
}

export default Header