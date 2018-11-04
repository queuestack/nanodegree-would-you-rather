import React from 'react'
import { Redirect } from 'react-router-dom';

function NotFound(props) {
    return (
        <div>
            404 Not Found
            <Redirect to="/" />                      
        </div>
    )
}

export default NotFound