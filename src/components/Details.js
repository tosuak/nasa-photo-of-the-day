import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants/index';
import Details from './Details';

function Details() {

return (
<h1>NASA PHOTO OF THE DAY</h1>
      <div className='NasaData'>
        <h2>{nasaData.title}</h2>
        <img src={nasaData.url} alt='Nasa pic of the day'/>
        <h3>{nasaData.date}</h3>
        <h4>Copyright: {nasaData.copyright}</h4>
        <p>{nasaData.explanation}</p>
      </div>
)

};