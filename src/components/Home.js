import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
    render() {
        const { answeredQIDs, unAnsweredQIDs } = this.props;

        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='home-answerd-list'>
                    <div> Answered Questions </div>
                    {answeredQIDs.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
                <ul className='home-unanswerd-list'>
                    <div> UnAnswered Questions </div>
                    {unAnsweredQIDs.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, questions }) => {
    // todo : users에게서 question을 받아와서 unanswerd와 answerd를 다르게 rendering
    const answers = Object.keys(users[authedUser].answers)

    const answeredQIDs = 
        Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
            .filter(qid => answers.includes(qid))

    const unAnsweredQIDs = 
        Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)        
            .filter(qid => !answers.includes(qid))
    
    return {
        answeredQIDs,
        unAnsweredQIDs,
    }
}

export default connect(mapStateToProps)(Home)