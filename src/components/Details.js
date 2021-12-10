import React, { useState, useEffect } from "react";
import {BASE_URL, API_KEY} from '../constants/index';
import axios from 'axios';

import "../App.css";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  0%   {left:0px; top:300px;}
  100% {left:0px; top:0px;}
`

const StyledDetails = styled.div`
  position: relative;
  animation-name: ${kf};
  animation-duration: 1s;
  p {
    color: ${props => props.theme.primaryColorTwo};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`

export default function Details(props) {
  const { nasaId } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => { setDetails(res.data) })
    .catch(err => { debugger })
  }, [nasaId])

return (
      <StyledDetails className='NasaData'>
        {
          details && 
          <>
        <h2>{details.title}</h2>  
        <img src={details.url} alt='Nasa pic of the day'/>
        <h3>{details.date}</h3>
        <h4>Copyright: {details.copyright}</h4>
        <p>{details.explanation}</p>
        </>
      }
      </StyledDetails>
)
};