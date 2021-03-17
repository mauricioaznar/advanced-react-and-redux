import React from 'react'
import {reduxForm, Field} from 'redux-form'
import PropsTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from "redux";
import {signup} from "../../actions";

class Signup extends React.Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>
          Sign up
        </button>
      </form>
    )
  }
}

Signup.propTypes = {
  signup: PropsTypes.func.isRequired,
  errorMessage: PropsTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, {signup}),
  reduxForm({ form: 'signup'}),
)(Signup)
