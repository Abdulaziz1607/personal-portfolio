import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from "react";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App_title = () => {
  useEffect(() => {
    document.title = "Abdulaziz - portfolio"
  }, [])
  return <p></p>
};
root.render(
  <React.StrictMode>
    <App_title/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
