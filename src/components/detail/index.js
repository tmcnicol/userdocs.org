import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './detail.css'


class ResultDetail extends Component {
  constructor(props) {
    super(props)

    this.key = this.props.match.params.key
    this.document = this.props.documents.find((d) =>
      d.key === this.key
    )
  }


  render() {
    return (
      <div className='detail__card'>
        <div className='detail__card__body'>
        <strong className='detail__card__name'>
          { this.document.name }
        </strong>

        </div>
        <hr className='detail__card__divide' />
        <div className='detail__card__footer'>
          <ul className='detail__card__navlist'>
            <li>
              <NavLink to='#'>
                Edit
            </NavLink>
      </li>
      <li>
        <NavLink to='#'>
          Share
      </NavLink>
      </li>
          </ul>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { documents: state.documents }
}

export default connect(mapStateToProps)(ResultDetail)
