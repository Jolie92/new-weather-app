import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      Weather App
      <Weather/>
      <footer>
        This project was coded by Laura Loriga and is {""}
        <a href="https://github.com/Jolie92/new-weather-app"
        target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
      </footer>
    </div>
    </div>
  );
}

export default App;
