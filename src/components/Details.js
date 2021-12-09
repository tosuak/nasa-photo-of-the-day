import React, { useState, useEffect } from "react";
import {BASE_URL, API_KEY} from '../constants/index';
import axios from 'axios';

import "../App.css";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`

export default function Details(props) {
  const { nasaId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => { setDetails(res.data) })
    .catch(err => { debugger })
  }, [nasaId])

return (
      <StyledDetails className='NasaData'>
        <h2>{details.title}</h2>
        {
          details && 
          <>
          
        <img src={details.url} alt='Nasa pic of the day'/>
        <h3>{details.date}</h3>
        <h4>Copyright: {details.copyright}</h4>
        <p>{details.explanation}</p>
        </>
      }
      <button onClick={close}>Close</button>
      </StyledDetails>
)
};