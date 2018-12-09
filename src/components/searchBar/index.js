import React, { Component } from 'react'
import { connect } from 'react-redux';

import { updateQuery } from '../../actions/queries'

import './searchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.classProp = props.className
  }

  onChange (event) {
    event.preventDefault()
    this.props.updateQuery(event.target.value)
  }

  render () {
    return (
      <div className={this.classProp}>
        <input
          className='search_input'
          type='text'
          placeholder='Search here...'
          value={this.props.queryString}
          onChange={this.onChange.bind(this)}
          maxLength='2048'
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {queryString: state.queries.queryString}
}

function mapDispatchToProps(dispatch) {
  return {
    updateQuery: (val) => dispatch(updateQuery(val))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
