import { useState, useEffect } from 'react'
import Landing from "./components/Landing";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
// import Dashboard from './components/Dashboard';
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
        {/* <Route
          path="private-route"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        /> */}
        {/* <Route exact path="/login" element={
        isAuthenticated ? (<Login />} />) : (
          <Navigate to="private-route" replace />
        ) /> */}
        <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
