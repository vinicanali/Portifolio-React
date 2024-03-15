
import { AppContext } from "../components/context.jsx";
import { searchLocal } from '../components/localStorage.jsx';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Bar() {



  const { text0, text1} = useContext(AppContext)

  const location = useLocation();
  const isHome= location.pathname === '/';

  return(
    <>

        <div className="row align-items-center justify-content-center p-0">
          <div className="col-4 col-md-auto">
            <Link to="/"><button type="button"  className={!isHome ? 'btn btn-transparent  textBar' : 'd-none m-0'} style={searchLocal() === "true" ? text0 : text1}>Home</button></Link>
          </div>
          <div className="col-4 col-md-auto">
            <Link to="/education"><button type="button" className="btn btn-transparent textBar" style={searchLocal() === "true" ? text0 : text1}>Education</button></Link>
          </div>
          <div className="col-4 col-md-auto">
          <Link to="/skills"><button type="button" className="btn btn-transparent textBar " style={searchLocal() === "true" ? text0 : text1}>Skills</button></Link>
          </div>
          <div className="col-4 col-md-auto">  
          <Link to="/contact"><button type="button" className="btn btn-transparent  textBar m-0 " style={searchLocal() === "true" ? text0 : text1}>Contact</button></Link>
          </div>
          
        </div>
    
    </>
  )
}


