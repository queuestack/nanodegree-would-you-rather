import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends React.Component {
    render() {
        const { isLogin, component: Component, ...rest } = this.props

        return (
            <Route
                {...rest}
                render={(props) => (
                    isLogin
                    ? <Component {...props} />
                    : <Redirect to='/login' />
                )}
            />
        )
    }
}

const mpaStateToProps = ({ authedUser }, props) => {
    return {
        isLogin: authedUser !== null,
        props
    }
}

export default connect(mpaStateToProps)(PrivateRoute)