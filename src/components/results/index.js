import React, { Component } from 'react'
import './results.css'

function resultItem (item) {
  const { key, short } = item;
  return (
    <div className='listItem'>
      <strong className='listItem__key'>
        { key }
      </strong>
      <p className='listItem__text'>
        { short }
      </p>
    </div>
  )
}

class ResultsList extends Component {
  constructor(props) {
    super(props)

    this.classProp = props.className
  }
  render () {
    const results = [
      { key: 'Server', short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'},
      { key: 'Database', short: 'A system to store and access data in a structured way.'},
    ]
    return (
      <div className={ this.classProp }>
        { results.map((result) => resultItem(result)) }
      </div>
    )
  }
}

export default ResultsList
