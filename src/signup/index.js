import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import signupRequest from './actions';
import Messages from '../notifications/Messages' ;
import Errors from '../notifications/Errors';
import history from '../history';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signup.successful) {
      history.push("/login");
    }
  }

  submit(values) {
    return this.props.signupRequest(values);
  }

  render() {
    const {
      handleSubmit,
      signup: {
        requesting,
        successful,
        messages,
        errors,
      }} = this.props;

      return (
      <div className="signup">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>Signup</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <button action="submit">SIGNUP</button>
        </form>
        <div className="auth-messages">
          {!requesting && !!errors.length && (
            <Errors message="Failure to signup due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && (
            <Messages messages={messages} />
          )}
          {!requesting && successful && (
            <div>
              Signup Successful! <Link to="/login">Click here to Login »</Link>
            </div>
          )}
          {/* Redux Router's <Link> component for quick navigation of routes */}
          {!requesting && !successful && (
            <Link to="/login">Already a Widgeter? Login Here »</Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup,
});

Signup.propTypes = {
  signupRequest: PropTypes.func,
  signup: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array,
  }),
}

const connected = connect(mapStateToProps, { signupRequest })(Signup)
const formed = reduxForm({
  form: 'signup',
})(connected)

export default formed;
