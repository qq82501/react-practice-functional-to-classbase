import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  // componentDidCatch(e) {
  //   console.log(e);
  //   this.setState();
  // }

  closeErrorHandler = () => {
    this.setState({ hasError: false });
  };
  render() {
    {
      if (this.state.hasError)
        return <h1 onClick={this.closeErrorHandler}>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
