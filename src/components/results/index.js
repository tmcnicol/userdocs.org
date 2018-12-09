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
  }

  filterDocuments() {
    if (this.props.queryString.length === 0) {
      return this.props.documents
    }

    return this.props.documents.filter(({ key }) => {
      return key.toLocaleLowerCase().includes(this.props.queryString)
    })
  }

  render () {
    const filteredDocuments = this.filterDocuments()
    return (
      <div className={ this.classProp }>
        { filteredDocuments.map((result) => resultItem(result)) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    queryString: state.queries.queryString ,
    documents: state.documents,
  }
}

export default connect(mapStateToProps)(ResultsList)
