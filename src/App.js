import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import cards from './cards';

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchData = () => { 
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(resp => {
        console.log(resp);
        setNasaData(resp.data)  
      })
      .catch(err => {
        debugger
      })
      }
      fetchData();
    },[])



  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
    
      <img src={nasaData.url} alt='Nasa pic of the day'/>
      <p></p>
    </div>
  );
}

export default App;
