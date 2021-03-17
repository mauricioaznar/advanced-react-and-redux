import React from 'react'
import {connect} from 'react-redux'

export default (ChildComponent) => {
  class ComposedComponent extends React.Component {

    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      this.shouldNavigateAway()
    }

    shouldNavigateAway () {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render () {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps, null)(ComposedComponent)
}


