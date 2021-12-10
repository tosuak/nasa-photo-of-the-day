import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants/index';
import Nasa from "./nasa";
import Details from './Details';
import styled from "styled-components";

const StyledApp = styled.div`
margin: 0%;
background-color: ${props => props.theme.primaryColor};
height: 100%;
h1 {
  border-radius: 50px;
  background-color: ${props => props.theme.tertiaryColor};
  color: ${props => props.theme.secondaryColor};
}
`

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [currentNasaId, setCurrentNasaId] = useState('1');

  const openDetails = () => {
    setCurrentNasaId(nasaData)
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
    <StyledApp className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      {
        currentNasaId && <Details nasaId={currentNasaId} />
      }
      {
        nasaData && <Nasa info={nasaData} open={openDetails} close={closeDetails}/>
      }
    </StyledApp>
  );
}

export default App;
