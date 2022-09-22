
import React  from 'react';
import './App.css';
import HelloWord from './components/olamundo';
import DizMeuNome from './components/DizMeuNome';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Forme from './components/Forme';
import Whatsapp from './components/Whatsapp';
import {render} from "react-dom";

function App() {
  
//  const nome= 'Manuela'
 const url="apple-icon-114x114.png"
  return (

    <div className='App'>
        {/* <img src={url} className="App-logo"/> */}
        {/* <HelloWord/> */}
        {/* <DizMeuNome nome="Aldair"/>
        <DizMeuNome nome={nome}/> */}
        {/* <Pessoa 
        nome="Aldair"
        idade="22"
        profissao="Programador"
        foto="https://via.placeholder.com/150x150"
        />
       <List /> */}
      
{/* 
       <Eventos numero={1}/>
       <Eventos numero={3}/> */}
      <Whatsapp/>
       <Forme/>
    
    </div>
  );
}

export default App;
