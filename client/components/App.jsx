import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Apod from './Apod'

function App () {

  return (
    <>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Header} />
      <Route exact path="/apod" component={Apod} />
    </>
  )
}

export default App