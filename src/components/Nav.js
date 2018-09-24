import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
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
                    <NavLink to='/login' activeClassName='active'>
                        Login
                    </NavLink>
                </li>                              
            </ul>
        </nav>
    )
}

export default Nav