import React from "react";
// import './App.css';
import Map from "./Views/Map";
import NavBar from "./Components/NavBar";


function App() {
  return (
      <div className="App h-screen flex flex-col">
          <NavBar/>
          <div className="flex-grow">
              <Map />
          </div>
      </div>
  );
}

export default App;
