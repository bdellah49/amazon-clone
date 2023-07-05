import React from "react";
import "../styles/body.css";
import { HiMenu } from "react-icons/hi";

function Header({ infos }) {
  return (
    <div className="Header">
      <div className="left">
        <button className="all">
          <HiMenu style={{fontSize:'18px'}}/>
          <div style={{fontWeight:'bold'}}>All</div>
        </button>
        <button>Today's deals</button>
        <button>Buy Again</button>
        <button>Costumer Service</button>
        <button>{infos.name}'s Amazon.com</button>
        <button>Gift Cards</button>
        <button>Sell</button>
        <button>Registry</button>
        <button className="history">Browsing History</button>
      </div>
      <div className="right">
        <button>Shop great delas now</button>
      </div>
    </div>
  );
}

export default Header;
