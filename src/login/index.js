import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Messages from '../notifications/Messages';
import Errors from '../notifications/Errors';

import loginRequest from './actions';
import history from '../history';

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = (values) => (
    this.props.loginRequest(values)
  );

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.successful) {
      history.push("/widgets")
    }
  }

  render() {
    const {
      handleSubmit,
      login: {
        requesting,
        errors,
        messages,
        successful,
      }
    } = this.props

    return (
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>LOGIN</h1>
          <label htmlFor="email">Email</label>
          <Field
            type="text"
            name="email"
            id="email"
            className="email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            id="password"
            className="password"
            component="input"
          />
          <button action="submit">LOGIN</button>
        </form>
        <div className="auth-messages">
          {/* As in the signup, we're just using the message and error helpers */}
          {!requesting && !!errors.length && (
            <Errors message="Failure to login due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && (
            <Messages messages={messages} />
          )}
          {requesting && <div>Logging in...</div>}
          {!requesting && !successful && (
            <Link to="/signup">Need to Signup? Click Here »</Link>
          )}
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func,
  login: PropTypes.shape({
    errors: PropTypes.array,
    messages: PropTypes.array,
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
  }),
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {
  loginRequest,
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Login);

const formed = reduxForm({
  form: 'login',
})(connected);

export default formed;
