import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Header() {


  return (
    <>
      <div className="header">
        <img className="nasa-logo" src="nasa.png"></img>
        <h1>A.P.O.D.</h1>
        <h3>Astronomy Picture of the Day</h3>
      </div>
      <Link to='/apod'><button>GET APOD</button></Link>
    </>
  )
}

export default Header