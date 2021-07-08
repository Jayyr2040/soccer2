import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {

  return (
    <div>
        <div className="nav" style={{border: "1px solid blue",width:"100%"}}>
        <Header/>
       </div>  
        <Main/> 
    </div>
  );
}

export default App;