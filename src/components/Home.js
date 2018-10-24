import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, List } from 'semantic-ui-react'

import Question from './Question'

const ANSWER = 'answerd'
const UNANSWER = 'unanswerd'

class Home extends Component {
    state = {
        activeItem: UNANSWER
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { answeredQIDs, unAnsweredQIDs } = this.props;
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing>
                    <Menu.Item 
                        name={ANSWER}
                        active={activeItem === ANSWER} 
                        onClick={this.handleItemClick} 
                    />
                    <Menu.Item
                        name={UNANSWER}
                        active={activeItem === UNANSWER}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                {
                    activeItem === ANSWER
                    ?
                    <ul className='home-answerd-list'>
                        <List celled> Answered Questions </List>
                        {answeredQIDs.map((id) => (
                            <List.Item key={id}>
                                <Question id={id} isHome={true} />
                            </List.Item>
                        ))}
                    </ul>
                    :
                    <ul className='home-unanswerd-list'>
                        <List celled> UnAnswered Questions </List>
                        {unAnsweredQIDs.map((id) => (
                            <List.Item key={id}>
                                <Question id={id} isHome={true} />
                            </List.Item>
                        ))}
                    </ul>
                }           
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