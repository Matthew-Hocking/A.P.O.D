import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Apod from './Apod'
import Footer from './Footer'

function App () {

  return (
    <>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Header} />
      <Route exact path="/apod" component={Apod} />
      <Route path="/" component={Footer} />
    </>
  )
}

export default App