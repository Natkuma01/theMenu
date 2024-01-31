import React from 'react';
import './Landing.css';

const Landing = () => {

  return (
    <>
    <div className="background">
    <div className="container centerLogo">
    <div className="grid grid-rows-3">
    <div className="neon row-span-3">The</div>
    <div className="flux row-span-3">Menu</div>
    <div className="row-span-3">Help you to connect your inventory with your digital menu! - Coming Soon</div>
    </div>
    <button 
      type="button" 
      className="button-8 mt-10"
    >
      Sign Up
    </button>
    <button 
      type="button" 
      className="button-8 mt-10"
    >
      Login
    </button>

    </div>
    </div>
    </>
  )
  }

  export default Landing;
