import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));
AOS.init({
  duration: 800,     
  easing: 'ease-in-out', 
  offset: 100,       
  delay: 200,        
  anchorPlacement: 'top-bottom',
  once: true
});


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
