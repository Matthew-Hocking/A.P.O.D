import React from "react";
import { Link } from 'react-router-dom'

function Header() {


  return (
    <>
      <div className="banner">
        <img className="nasa-logo" src="nasa.png" alt="Nasa Logo"></img>
        <h1>A.P.O.D.</h1>
        <h2>Astronomy Picture of the Day</h2>
          <div className="button-body">
            <Link to='/apod'><button className="get-apod">GET APOD</button></Link>
          </div>
      </div>
    </>
  )
}

export default Header