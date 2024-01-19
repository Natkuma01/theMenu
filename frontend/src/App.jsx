import { useState, useEffect } from 'react'
import Landing from "./components/Landing"

import './App.css'

const App = () => {

    // useEffect(()=> {
    //   console.log(import.meta.env.VITE_API_URL)
    // }, [])
  return (
    <>
      <Landing />
    </>
  )
}

export default App
