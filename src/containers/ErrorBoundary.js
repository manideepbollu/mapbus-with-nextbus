import React, { Component } from 'react';
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
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            console.log(this.state.error.toString());
            return (
                <div className={throwError}>
                    <h1>OOPS!</h1>
                    <p>
                        {this.state.error && this.state.error.toString()}
                    </p>
                    <span>
                        {this.state.errorInfo.componentStack}
                    </span>
                </div>
            );
        }
        // In case of no error, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;
