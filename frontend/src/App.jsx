import { useState, useEffect } from 'react'
import Landing from "./components/Landing";
import Login from "./components/LoginForm";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.css'

const App = () => {

    // useEffect(()=> {
    //   console.log(import.meta.env.VITE_API_URL)
    // }, [])
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
         
      </Routes>
    </Router>
    </>
  )
}

export default App
