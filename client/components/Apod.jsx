import React, { useState, useEffect } from "react";

import { getApod } from '../api'

function Apod() {

  const [apod, setApod] = useState(null)
  
  useEffect(() => {
    getApod()
    .then(stuff => setApod(stuff))
  }, [])

  return (
    <>
      {apod && (
        <>
        <p>{apod.date},{apod.title}</p>
          <img src={apod.url} />
        </>
      )}
    </>
  )
}

export default Apod