import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const EmailSent = () => {

    const { userEmail } = useParams()


    return (
        <>
            <h1>Account Confirmation</h1>
            <p>A confirmation email has been sent to your email<b>{userEmail}</b></p>
            <p>Verify your account and proceed</p>
            <Button color="primary" component={Link} to='/userSignin'>Login</Button>
            {/* <button to='/userSignin'>Login</button> */}
        </>
    )
}

export default EmailSent
