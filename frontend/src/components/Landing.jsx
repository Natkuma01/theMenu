import React, {useContext} from 'react';


import './Landing.css';
import { Link } from "react-router-dom"
import AuthContext from '../utils/AuthContext';

const Landing = () => {

  let {name} = useContext(AuthContext)

  return (
    <>
    <div className="background">
    <div className="container centerLogo">
    <div className="grid grid-rows-3">
    <div className="neon row-span-3">The</div>
    <div className="flux row-span-3">Menu</div>
    <div className="row-span-3">Connect your inventory with your digital menu! - Coming Soon</div>
    </div>
    <p>Hello, {name} </p>
    <Link to="/register">
    <button type="button" className="button-8 mt-10">Sign Up</button>
    </Link>
    <Link to="/login">
    <button type="button" className="button-8 mt-10">Login</button>
    </Link>
    </div>
    </div>
    </>
  )
  }

  export default Landing;
