import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitalData } from '../store/actions/shared'
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Nav from './Nav'
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  render() {
    const { loading } = this.props;

    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <PrivateRoute
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/login"
              exact
              component={Login}
            />
            <PrivateRoute
              path="/leaderboard"
              exact
              component={LeaderBoard}
            />
            <PrivateRoute
              path="/new"
              exact
              component={NewQuestion}
            />
            <PrivateRoute
              path="/question/:id"
              exact
              component={QuestionPage}
            />
          </Switch>          
        </div>
      </Router>

    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
