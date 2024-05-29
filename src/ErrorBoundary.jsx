import React from 'react';
// import { ErrorBoundary as ErrorCoreBoundary } from 'react-error-boundary';
import PageNotFound from './components/ErrorPage/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <PageNotFound />;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
