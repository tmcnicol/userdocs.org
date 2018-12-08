import React, { Component } from 'react'
import Header from './components/header'
import Content from './components/content'

import './App.css'

class App extends Component {
  // Display a top menu a search bar and a results lists
  render () {
    return (
      <React.Fragment>
        <Header />
        <Content className='main_content' />
      </React.Fragment>
    )
  }
}

export default App
