import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import Sidebar from "./Component/sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar /> 
    <div></div>
  </React.StrictMode>
);