import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitalData } from '../store/actions/shared'
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';

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
          : <QuestionPage match={{params: {id: "8xf0y6ziyjabvozdd253nd"}}} />
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
