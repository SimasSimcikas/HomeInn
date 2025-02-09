import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Materials from './Materlias';
import Aboutus from './Aboutus';
import Trending from './Trending';
import Catalog from './Catalog';
import Footer from './Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <div id="home"><Home/></div>
      <Materials/>
      <div id="about"><Aboutus/></div>     
      <hr />
      <div id="trending"><Trending/></div>   
      <div id="catalog"><Catalog/></div>   
      <Footer/>
  </React.StrictMode>
);
