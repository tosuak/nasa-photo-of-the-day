import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY`)
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      debugger
    })
  },[])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
