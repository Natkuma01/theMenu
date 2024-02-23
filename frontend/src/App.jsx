import { useState, useEffect } from 'react'
import Landing from "./components/Landing";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
