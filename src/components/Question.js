import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion, formatDate } from '../utils/helpers'
import { OptionTypes } from '../store/constants/index'
import { handleSaveAnswer } from '../store/actions/questions'


class Question extends Component { 
    handleOptionChange(e, id) {
        const answer = e.target.value
        const { dispatch } = this.props
    
        dispatch(handleSaveAnswer(id, answer))
    }
    renderVoteHome(id, optionOneText) {
        return (
            <Link to={`/questions/${id}`}>
                Would you rather...
                {optionOneText}...
                <button 
                > 
                    View Poll 
                </button>
            </Link>
        )
    }
    renderVote(id, optionOneText, optionTwoText) {
        return (
            <div>
                Would You Rather...
                <button
                    value={OptionTypes.OPTION_ONE}
                    onClick={(e) => this.handleOptionChange(e, id)}
                /> {optionOneText}? <br/>
                <button
                    value={OptionTypes.OPTION_TWO}
                    onClick={(e) => this.handleOptionChange(e, id)}
                /> {optionTwoText}? <br/>

            </div>                 
        )
    }
    renderVoteResult(optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, voted) {
        const totalVotes = optionOneVotes + optionTwoVotes

        return (
            <div>
                <div> Results: </div>
                <div>
                    {voted === OptionTypes.OPTION_ONE ? <div> Your vote</div> : null}
                    <div> Would you rather {optionOneText}?</div>
                    <div> {optionOneVotes / totalVotes * 100}%</div>
                    <div> {optionOneVotes} out of {totalVotes} votes</div>                
                </div>
                <div>
                    {voted === OptionTypes.OPTION_TWO ? <div> Your vote</div> : null}
                    <div> Would you rather {optionTwoText}?</div>
                    <div> {optionTwoVotes / totalVotes * 100}%</div>
                    <div> {optionTwoVotes} out of {totalVotes} votes</div>                
                </div>
            </div>

        )
    }
    render() {
        const { question, isHome } = this.props;

        if (question === null) {
            return <p>This question doesn't existed</p>
        }

        const { 
            name, id, timestamp, avatar, 
            optionOneVotes, optionTwoVotes, 
            optionOneText, optionTwoText, voted
        } = question

        return (
            <div className='question'>
                <br/>
                {
                    isHome 
                        ? <span> {name} asks: </span>
                        : voted
                            ? <span> Asked by {name} </span>
                            : <span> {name} asks: </span>   
                }
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='Avatar'
                />
                <div className='question-info'>             
                    {
                        isHome
                        ? this.renderVoteHome(id, optionOneText)
                        : voted
                            ? this.renderVoteResult(optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, voted)
                            : this.renderVote(id, optionOneText, optionTwoText)
                    }
                </div>
                <br/>
            </div>               

        )
    }
}

const mapStateToProps = ({ authedUser, users, questions }, { id, isHome=false }) => {
    const question = questions[id]

    return {
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null,
        isHome
    }
}

export default connect(mapStateToProps)(Question)