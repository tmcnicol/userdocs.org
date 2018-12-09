import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ResultsList from './results'
import ResultDetail from './detail'

import './content.css'

class Content extends Component {
  constructor(props) {
    super(props)
    this.classProp = props.className
  }

  render() {
    return (
      <div className={ this.classProp }>
        <div className='content__container'>
          <div className='content__main'>
              <Route exact path='/' component={ResultsList} />
              <Route path='/:key' component={ResultDetail} />
          </div>
          <div className='content__advertising'>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
