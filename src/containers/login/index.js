import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import Messages from 'notifications/Messages';
import Errors from 'notifications/Errors';
import history from 'setup/history';
import translate from 'i18n/Translate';
import loginRequest from './actions';

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
      },
      translate,
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
          <button action="submit">{translate('user.btn.register')}</button>
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
  translate: PropTypes.func,
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {
  loginRequest,
}

const formed = reduxForm({
  form: 'login',
})(Login);

const enhance = compose(
  translate,
  connect(mapStateToProps, mapDispatchToProps),
)

export default enhance(formed);
