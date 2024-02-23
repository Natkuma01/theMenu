import React from 'react';
import Navbar from './navbar';
import "./LoginForm.css"


const Dashboard = () => {
return (
    <div className="flex flex-row">    
    <div className="basis-1/5 bg-indigo-700 text-zinc-200 min-h-[700px]"><Navbar /></div>
   <div className="basis-4/5">This is Dashboard</div>
   </div>
)

}
export default Dashboard;