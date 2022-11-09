import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
      <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
