import React, { useState, useEffect } from "react";

import { getApod } from '../api'

function Apod() {

  const [apod, setApod] = useState(null)
  
  useEffect(() => {
    getApod()
    .then(stuff => setApod(stuff))
  }, [])

  return (
    <div>
      {apod && (
        <div className="details">
        {/* <p>{apod.date},{apod.title}</p> */}
          <img className="apod--img" src={apod.url} />
        </div>
      )}
    </div>
  )
}

export default Apod