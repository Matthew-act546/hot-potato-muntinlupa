import { useState, useEffect } from 'react'
import axios from 'axios';
import './styles/style.scss';
import axiosInstance from './axiosInstance';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/api/data');
        console.log(response.data);  // Logs the data
        setMessage(response.data.message);  // Update state with the API message
    } catch (error) {
        console.error("Axios error:", error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api')
      .then(response => {
        console.log(response.data);// Logs: { message: "Hello from Django" }
        setMessage(response.data.message);  // Update state with the API message
      })
      .catch(error => console.error("Axios error:", error));
  }, []);

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
