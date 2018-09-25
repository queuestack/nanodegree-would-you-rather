import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authedUser'

class Nav extends Component {
    handleLogout() {
        const { dispatch } = this.props

        dispatch(logout())
    }

    render() {
        const { authedUser, isLogin } = this.props


        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>     
                    <li>
                        {
                            isLogin
                            ? <div onClick={this.handleLogout.bind(this)}>Logout</div>
                            : <NavLink to='/login' activeClassName='active'>
                                Login
                            </NavLink>
    
                        }
                    </li>
                    <li>
                        {
                            isLogin
                            ? authedUser
                            : null
                        }
                    </li>                              
                </ul>
            </nav>
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