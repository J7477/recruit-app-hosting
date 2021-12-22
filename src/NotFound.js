import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <Button color="inherit" component={Link} to={"/"}>Home Page</Button>

            <h1>Page Not Found</h1>
        </div>
    )
}

export default NotFound
