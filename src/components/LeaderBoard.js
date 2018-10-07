import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                {users.map(user => {
                    const { score, numAnswers, numQuestions, avatar } = user
                    return (
                        <Card 
                            key={user.user}
                            image={avatar}
                            header={user.user}
                            description={
                                <Card.Description>
                                    <div>Answered questions: {numQuestions}</div>
                                    <div>Created questions: {numAnswers}</div>
                                    <div>Score: {score}</div>
                                </Card.Description>

                            }
                        />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ users }, props) => {
    console.log(users)
    const scores = Object.keys(users).map(user => {
        const answers = users[user].answers
        const numAnswers = Object.keys(answers).length
        const questions = users[user].questions
        const numQuestions = questions.length
        const score = numAnswers + numQuestions
        const avatar = users[user].avatarURL

        return {user, score, numAnswers, numQuestions, avatar}
    })


    const sortedUsers = scores.sort((a,b) => b.score - a.score)

    return ({
        users: sortedUsers
    })
}

export default connect(mapStateToProps)(LeaderBoard);