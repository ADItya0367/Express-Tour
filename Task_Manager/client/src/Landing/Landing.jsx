import React from 'react';
import  './Landing.module.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Landing(){

  

    return(
        <React.Fragment>
       <Navbar/>
       <div className='landingbody'> 
      
       <div>
            <h1 className='head'>Task Manager</h1>
            <p>Task Manager is a simple web application that helps you to manage <br/>your daily tasks.</p>
            <Link to={"/register"} className='registerbutt'>Register</Link>
            <Link to={"/login"} className='loginbutt'>Login</Link>

       </div>
         <div>
            <img src='https://d1k5j68ob7clqb.cloudfront.net/processed/images/p239JXc2i8x11LWzrO.png' alt='logo' className='mainimg'/>
         </div>



       </div>
       
        </React.Fragment>
    )
}

