import axios from 'axios';

import config from 'services/config';
import { API_BASE, ACCESSTOKEN_VALUE_PREFIX } from './constants';
// import { errorHandler } from './handleError';

const DEFAULT_CONFIG = {
  baseURL: config.baseURL,
  timeout: 60000,
  auth: {
    username: config.username,
    password: config.password,
  },
  params: {},
}

class HttpRequest {
  constructor(headers, options) {
    this.config = Object.assign({}, DEFAULT_CONFIG, { headers, ...options});
  }

  get({ url, params = {} }) {
    return this.executeRequest(url, {
      method: 'GET',
      params,
    });
  }

  post({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'POST',
      data,
    })
      .finally(() => {
        // Forced scroll to Top
      });
  }

  put({ url, params = {} }) {
    return this.executeRequest(url, {
      method: 'PUT',
      params,
    })
      .finally(() => {
        // Forced scroll to Top
      });
  }

  delete({ url, params = {} }) {
    return this.executeRequest(url, {
      method: 'DELETE',
      params,
    })
      .finally(() => {
        // Forced scroll to Top
      });
  }

  patch({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'PATCH',
      data,
    })
      .finally(() => {
        // Forced scroll to Top
      });
  }

  executeRequest(url, config) {
    const finalConfig = Object.assign({}, this.config, { url, ...config});
    return axios.request(finalConfig)
      .then(successfulRes => Promise.resolve(successfulRes))
      .catch((errorRes) => {
        // handle error
        // Dispatch show notification error
        return Promise.reject(errorRes);
      });
  }
}

export const UnauthenticatedRequest = () => new HttpRequest({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const AuthenticatedRequest = (token, options = {}) => new HttpRequest({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Auth-Token': `${ACCESSTOKEN_VALUE_PREFIX} ${token}`,
}, options);
