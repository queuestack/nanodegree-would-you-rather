import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitalData } from '../store/actions/shared'
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Nav from './Nav'
import LeaderBoard from './LeaderBoard';
import Login from './Login';

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
          {loading
            ? <Route path='/login' component={Login} />
            : <div>
                <Route path='/' exact component={Home} />
                <Route path='/question/:id' component={QuestionPage} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/login' component={Login} />
              </div>
          }
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
