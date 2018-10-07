import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import { OptionTypes } from '../store/constants/index'
import { handleSaveAnswer } from '../store/actions/questions'

import { Button, Card, Image } from 'semantic-ui-react'

class Question extends Component { 
    handleOptionChange(e, id) {
        const answer = e.target.value
        const { dispatch } = this.props
    
        dispatch(handleSaveAnswer(id, answer))
    }
    renderVoteHome(id, optionOneText) {
        return (
            <Link to={`/questions/${id}`}>
                <Card.Content>
                    <Card.Description>
                        Would you rather {optionOneText}...
                    </Card.Description>
                    <Button basic color='green'
                    > 
                        View Poll
                    </Button>
                </Card.Content>
            </Link>
        )
    }
    renderVote(id, optionOneText, optionTwoText) {
        return (
            <Card.Content extra>
                <Card.Description>
                    Would You Rather...
                </Card.Description>
                <div className='ui two buttons'>
                    <Button
                        basic
                        color='green'
                        value={OptionTypes.OPTION_ONE}
                        onClick={(e) => this.handleOptionChange(e, id)}
                    > 
                        {optionOneText}? 
                    </Button>
                    <Button
                        basic
                        color='red'                    
                        value={OptionTypes.OPTION_TWO}
                        onClick={(e) => this.handleOptionChange(e, id)}
                    > 
                        {optionTwoText}? 
                    </Button>
                </div>
            </Card.Content>                 
        )
    }
    renderVoteResult(optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, voted) {
        const totalVotes = optionOneVotes + optionTwoVotes

        return (
            <Card.Group>
                <Card
                    color={voted === OptionTypes.OPTION_ONE ? 'red' : null}
                >
                    <Card.Content>
                        <Card.Header> Would you rather {optionOneText}?</Card.Header>
                        <Card.Meta> {optionOneVotes / totalVotes * 100}%</Card.Meta>
                        <Card.Description> {optionOneVotes} out of {totalVotes} votes</Card.Description>                
                    </Card.Content>
                </Card>
                <Card
                    color={voted === OptionTypes.OPTION_TWO ? 'red' : null}
                >
                    <Card.Content>
                        <Card.Header> Would you rather {optionTwoText}?</Card.Header>
                        <Card.Meta> {optionTwoVotes / totalVotes * 100}%</Card.Meta>
                        <Card.Description> {optionTwoVotes} out of {totalVotes} votes</Card.Description>                
                    </Card.Content>
                </Card>                
            </Card.Group>


        )
    }
    renderHeader() {
        const { isHome } = this.props
        const { name, voted } = this.props.question

        return (
            isHome 
            ? <span> {name} asks: </span>
            : voted
                ? <span> Asked by {name} </span>
                : <span> {name} asks: </span>
        )
    }
    render() {
        const { question, isHome } = this.props;

        if (question === null) {
            return <p>This question doesn't existed</p>
        }

        const { 
            id, avatar, 
            optionOneVotes, optionTwoVotes, 
            optionOneText, optionTwoText, voted
        } = question

        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image 
                            floated='right' 
                            size='mini' 
                            src={avatar} 
                        />
                        <Card.Header>
                            { this.renderHeader() }
                        </Card.Header>
                        <Card.Description>
                            {
                                isHome
                                ? this.renderVoteHome(id, optionOneText)
                                : voted
                                    ? this.renderVoteResult(optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, voted)
                                    : this.renderVote(id, optionOneText, optionTwoText)
                            }
                        </Card.Description>                        
                    </Card.Content>
                </Card>
            </Card.Group>
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