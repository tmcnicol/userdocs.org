import React, { Component } from 'react'

import './searchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.classProp = props.className
  }
  render () {
    return (
      <div className={ this.classProp }>
        <input
          className='search_input'
          type='text'
          placeholder='Search here...'
        />
      </div>
    )
  }
}


export default SearchBar
