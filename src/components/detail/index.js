import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoRecordComponent extends Component {
  render() {
    return <p> Record not found </p>
  }
}

class ResultDetail extends Component {
  constructor(props) {
    super(props)
    console.log('Detail props', props)
    this.key = this.props.match.params.key
  }

  loadComponent() {
    if (this.key === 'server') {
      return <h1>Server</h1>
    }
    return <NoRecordComponent />
  }

  render() {
    const component = this.loadComponent()
    return (
      <React.Fragment>
        <title>Foo{this.key}</title>
        { component }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { }
}

export default connect(mapStateToProps)(ResultDetail)
