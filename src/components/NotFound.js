import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                404 Not Found
                <Link to="/">
                    Go Back Home
                </Link>                      
            </div>
      
        )
    }
}

export default NotFound