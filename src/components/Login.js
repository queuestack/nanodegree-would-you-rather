import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../store/actions/authedUser'
import { Header, Image, Card, Segment } from 'semantic-ui-react';

class Login extends Component {
    handleLogin(e, id) {
        console.log(id)

        const { dispatch } = this.props

        dispatch(setAuthedUser(id))
    }
    render() {
        const { authedUser, users } = this.props
        
        if (authedUser) {
            return <Redirect to='/' />
        }

        return (
            <Segment>
                <Header>
                    Please Sign In To Continue
                </Header>
                <Card.Group selection verticalAlign='middle'>
                    {Object.keys(users).map(user => {
                        const { name, id, avatarURL } = users[user]
                        return (
                            <Card>
                                <Card.Content>
                                    <Image floated='right' avatar src={avatarURL}/>
                                    <Card.Header
                                        onClick={e => this.handleLogin(e, id)}
                                    >
                                        {name}
                                    </Card.Header>
                                </Card.Content>                         
                            </Card>

                        )
                    })}
                </Card.Group>
            </Segment>

        )
    }
}

const mapStateToProps = ({ authedUser, users }, props) => {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Login);