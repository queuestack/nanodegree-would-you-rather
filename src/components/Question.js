import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
    render() {
        const { question } = this.props;

        if (question === null) {
            return <p>This question doesn't existed</p>
        }

        console.log(question)

        return (
            <div className='question'>
                Question
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const question = questions[id]

    return {
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Question)