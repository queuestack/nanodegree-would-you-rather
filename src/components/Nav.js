import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authedUser'
import { Menu } from 'semantic-ui-react'

const HOME = 'Home'
const NEW_QUESTION = 'New Question'
const LEADER_BOARD = 'Leader Board'
const LOGIN = 'Login'
const LOGOUT = 'Logout'

class Nav extends Component {
    handleLogout() {
        const { dispatch } = this.props

        dispatch(logout())
    }

    render() {
        const { authedUser, isLogin } = this.props

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item>
                        <NavLink to='/' name={HOME} exact activeClassName='active'>
                            {HOME}
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to='/add' name={NEW_QUESTION} activeClassName='active'>
                            {NEW_QUESTION}
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to='/leaderboard' name={LEADER_BOARD} activeClassName='active'>
                            {LEADER_BOARD}
                        </NavLink>
                    </Menu.Item>   
                    <Menu.Menu position='right'>  
                        <Menu.Item>
                            {
                                isLogin
                                ? authedUser
                                : null
                            }
                        </Menu.Item>
                        <Menu.Item>
                            {
                                isLogin
                                ? <a name={LOGOUT} onClick={this.handleLogout.bind(this)}>
                                    {LOGOUT}
                                </a>
                                : <NavLink to='/login' name={LOGIN} activeClassName='active'>
                                    {LOGIN}
                                </NavLink>
        
                            }
                        </Menu.Item>                   
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser,
        isLogin: authedUser !== null,
    }
}

export default connect(mapStateToProps)(Nav)