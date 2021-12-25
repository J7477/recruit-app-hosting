import React, { useState } from 'react'
import Nav from '../Home/Nav'
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Axios from 'axios'
import { useParams } from 'react-router-dom'

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const host = "https://projectsemapp.herokuapp.com"

    const { id } = useParams()
    // console.log(id)
    const changePassword = () => {
        Axios.put(`${host}/api/studentAuth/updateuserpassword/${id}`, {
            oldpassword: oldPassword,
            newpassword: newPassword
        }, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        }).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }
            if (response.data) {
                alert('Password changed')
            }
            // console.log(response)
        })
    }
    return (
        <>
            <Nav />
            <h4 style={{ textAlign: 'center' }}>Change Password</h4>
            <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
            >

                <TextField
                    // sx={{ margin: 5 }}
                    type='text'
                    label='Old password'
                    variant='outlined'
                    onChange={(e) => { setOldPassword(e.target.value) }}
                />
                <TextField
                    // sx={{ margin: 5 }}
                    type='text'
                    label='New password'
                    variant='outlined'
                    onChange={(e) => { setNewPassword(e.target.value) }}
                />
                <Button
                    variant='outlined'
                    style={{ color: '#f50057' }}
                    sx={{ margin: 5 }}
                    onClick={changePassword}
                >Save Password
                </Button>
            </Stack>
        </>
    )
}

export default ChangePassword
