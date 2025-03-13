// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import axiosInstance from './axiosInstance';
import './styles/style.scss';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {


  return (
    <>
      <Navigationbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App


// const fetchData = async () => {
  //   try {
  //       const response = await axiosInstance.get('/api/data');
  //       const fetchData = async () => {
  //         try {
  //             const response = await axiosInstance.get('/api/data');

  //         } catch (error) {
  //             console.error(error);
  //         }
  //     };
  //   } catch (error) {
  //       console.error(error);
  //   }
  // };
