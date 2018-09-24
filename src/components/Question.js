import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate, OPTION_ONE, OPTION_TWO } from '../utils/helpers'

class Question extends Component {
    toPoll(e, id) {
        e.preventDefault()
        console.log('go to detail poll')
        // todo : go to poll when it is clicked
    }
    handleVote(e, id) {
        e.preventDefault()
        console.log('save question answer')
        // todo : save question answer : authedUser, qid, answer
    }
    renderVoteHome(id, optionOneText) {
        return (
            <div>
                Would you rather...
                {optionOneText}...
                <button 
                    onClick={(e) => this.toPoll(e, id)}
                > 
                    View Poll 
                </button>
            </div>
        )
    }
    renderVote(name, id, avatar, optionOneText, optionTwoText) {
        return (
            <div>
                Would You Rather...
                <form>
                    <input 
                        type="radio" 
                        name="vote" 
                        value={OPTION_ONE}
                    /> {optionOneText}? <br/>
                    <input 
                        type="radio" 
                        name="vote" 
                        value={OPTION_TWO}
                    /> {optionTwoText}? <br/>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={(e) => this.handleVote(e, id)}
                    />
                </form>     
            </div>                 
        )
    }
    renderVoteResult(optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, voted) {
        const totalVotes = optionOneVotes + optionTwoVotes

        return (
            <div>
                <div> Results: </div>
                <div>
                    {voted === OPTION_ONE ? <div> Your vote</div> : null}
                    <div> Would you rather {optionOneText}?</div>
                    <div> {optionOneVotes / totalVotes}%</div>
                    <div> {optionOneVotes} out of {totalVotes} votes</div>                
                </div>
                <div>
                    {voted === OPTION_TWO ? <div> Your vote</div> : null}
                    <div> Would you rather {optionTwoText}?</div>
                    <div> {optionTwoVotes / totalVotes * 100}%</div>
                    <div> {optionTwoVotes} out of {totalVotes} votes</div>                
                </div>
            </div>

        )
    }
    render() {
        const { question } = this.props;
        const isHome = true; //todo: parse url

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
                            : this.renderVote(name, id, avatar, optionOneText, optionTwoText)
                    }
                </div>
                <br/>
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