import React from 'react';
import createRoot from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './global.css';


createRoot.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
  )