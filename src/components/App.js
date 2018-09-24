import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitalData } from '../store/actions/shared'
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  render() {
    const { loading } = this.props;

    return (
      <div>
        {loading === true
          ? null
          : <Home />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
