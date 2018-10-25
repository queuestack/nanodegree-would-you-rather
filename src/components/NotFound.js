import React from 'react'
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div>
            404 Not Found
            <Link to="/">
                <div>
                    Go Back Home
                </div>
            </Link>                      
        </div>
    )
}

export default NotFound