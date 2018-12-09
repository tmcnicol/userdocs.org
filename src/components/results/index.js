import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './results.css'

function resultItem (item) {
  const { key, short } = item;
  return (
    <div className='listItem' key={ key }>
      <strong className='listItem__key'>
        <NavLink
          className='listItem__key__link'
          to={key.toLocaleLowerCase()}
        >
          { key }
        </NavLink>
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
    this.results = [
      { key: 'Server', short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'},
      { key: 'Database', short: 'A system to store and access data in a structured way.'},
    ]
  }

  filterResults() {
    if (this.props.queryString.length === 0) {
      return this.results
    }
    return this.results.filter(({ key }) => {
      return key.toLocaleLowerCase().includes(this.props.queryString)
    })
  }

  render () {
    const filteredResults = this.filterResults()
    return (
      <div className={ this.classProp }>
        { filteredResults.map((result) => resultItem(result)) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { queryString: state.queries.queryString }
}

export default connect(mapStateToProps)(ResultsList)
