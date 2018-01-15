import React, { Component } from 'react';
import { errorTypes } from '../utils/types';
import {
  throwError
} from './stylesheets/app.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className={throwError}>
          <h1>OOPS!</h1>
          <p>
                please check your internet connection and refresh the page
                ({this.state.error && this.state.error.toString()})
          </p>
          <br />
          <span>
            <strong>Component stack info:</strong>
            {this.state.errorInfo.componentStack}
          </span>
        </div>
      );
    }
    // In case of no error, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = errorTypes;

export default ErrorBoundary;
