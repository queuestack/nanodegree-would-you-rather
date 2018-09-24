import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                {users.map(user => {
                    const { score, numAnswers, numQuestions } = user
                    return (
                        <div key={user.user}>
                            {`${user.user} : ${score} (Q: ${numQuestions}, A: ${numAnswers})`}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ users }, props) => {
    const scores = Object.keys(users).map(user => {
        const answers = users[user].answers
        const numAnswers = Object.keys(answers).length
        const questions = users[user].questions
        const numQuestions = questions.length
        const score = numAnswers + numQuestions
        console.log(user, numAnswers, numQuestions)

        return {user, score, numAnswers, numQuestions}
    })


    const sortedUsers = scores.sort((a,b) => b.score - a.score)

    return ({
        users: sortedUsers
    })
}

export default connect(mapStateToProps)(LeaderBoard);