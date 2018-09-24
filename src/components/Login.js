import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../store/actions/authedUser'

class Login extends Component {
    handleLogin(e) {
        const id = e.target.value

        const { dispatch } = this.props

        dispatch(setAuthedUser(id))
    }
    render() {
        const { authedUser, users } = this.props
        
        if (authedUser) {
            return <Redirect to='/' />
        }

        return (
            <div>
                {Object.keys(users).map(user => {
                    const { name, id, avatarURL } = users[user]
                    return (
                        <button 
                            key={name}
                            value={id}
                            onClick={this.handleLogin.bind(this)}
                        >
                            {`name: ${name}`}
                        </button>
                    )
                })}
            </div>
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