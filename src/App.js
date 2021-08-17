
import React from 'react';
import './App.css';
import AppTray from "./Components/AppTray";

function App() {
  return (
    <div className="App">
      <header className="App-header font-style">
        <h1>App Hub</h1>
      </header>
      <div id="apps-div">
        <AppTray name="Calculator" imgs="1" code="https://github.com/hardiks77/Calculator" apphost="https://hardiks77.github.io/Calculator/"/>
        <AppTray name="To-Do-List" imgs="2" code="https://github.com/hardiks77/to-do-list-code" apphost="https://hardiks77.github.io/To-Do-List/"/>
        <AppTray name="Tic-Tac-Toe" imgs="3" code="https://github.com/hardiks77/TicTacToe-final" apphost="https://hardiks77.github.io/TicTacToe-final/"/>
        
      </div>
    </div>
  );
}

export default App;
