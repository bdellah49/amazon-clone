import './App.css';
import Header from './components/Header.js'
import Body from "./components/Body.js"


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

function App() {
  return (
    <div className="App">
      <Header infos={infos}/>
      <Body infos={infos}/>


    </div>
  );
}

export default App;
