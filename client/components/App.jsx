import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Banner from './Banner'
import Apod from './Apod'
import Footer from './Footer'

function App () {

  return (
    <>
      <Route eaxct path="/apod" component={Nav} />
      <Route exact path="/" component={Banner} />
      <Route exact path="/apod" component={Apod} />
      <Route path="/" component={Footer} />
    </>
  )
}

export default App