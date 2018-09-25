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
        const { authedUser } = this.props


        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName='active'>
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
                            authedUser === null
                            ? <NavLink to='/login' activeClassName='active'>
                                Login
                            </NavLink>
                            : <div onClick={this.handleLogout.bind(this)}>Logout</div>
    
                        }
    
                    </li>                              
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)