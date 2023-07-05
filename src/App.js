import './App.css';
import Header from './components/Header.js'
import Body from "./components/Body.js"
import Menu from "./components/Menu.js"
import { useState } from 'react';


const infos = {
  id:123,
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

function showMenu(){
  const menu = document.querySelector('.Menu');
  menu.classList.toggle('show');
  
}

function App() {
  // const [menuState,setMenuState]=useState("")
  return (
    <div className="App">
      <div className='menu'>
        <Menu className='Menu' infos={infos} />
      </div>
      <div className='content'>
        <Header infos={infos}/>
        <Body infos={infos} visibility={showMenu}/>
      </div>
      


    </div>
  );
}

export default App;
