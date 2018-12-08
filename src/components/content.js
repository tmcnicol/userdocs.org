import React, { Component } from 'react'
import ResultsList from './results'

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
            <ResultsList />
          </div>
          <div className='content__advertising'>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
