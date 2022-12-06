import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
