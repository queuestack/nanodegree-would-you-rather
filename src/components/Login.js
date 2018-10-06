import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../store/actions/authedUser'
import { Image, List } from 'semantic-ui-react';

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
            <List selection verticalAlign='middle'>
                {Object.keys(users).map(user => {
                    const { name, id, avatarURL } = users[user]
                    return (
                        <List.Item 
                            key={name}
                        >
                            <List.Content>
                                <Image avatar src={avatarURL}/>
                                <List.Header
                                    onClick={e => this.handleLogin(e, id)}
                                >
                                    {name}
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    )
                })}
            </List>
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