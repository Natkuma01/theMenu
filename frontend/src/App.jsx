import { useState, useEffect } from 'react'
import Landing from "./components/Landing";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from './components/Dashboard';
import RestaurantForm from "./components/RestaurantForm"
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Register from "./components/Register";
import LoginPage from "./components/LoginPage";
import './App.css'

const App = () => {

  return (
    <Router> 
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/restForm" element={<RestaurantForm />} />
        </Route>

        
        </Routes>
        </AuthProvider>
    </Router>
  )
}

export default App
