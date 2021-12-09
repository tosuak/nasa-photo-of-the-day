import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants/index';
import Nasa from "./nasa";
import Details from './Details';

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [currentNasaId, setCurrentNasaId] = useState('1');

  const openDetails = id => {
    setCurrentNasaId(id)
  }

  const closeDetails = () => {
    setCurrentNasaId(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(resp => {
      console.log(resp);
      setNasaData(resp.data)  
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      {
        currentNasaId && <Details nasaId={currentNasaId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
