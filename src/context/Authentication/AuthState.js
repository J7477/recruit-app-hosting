import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthState = (props) => {

    let navigate = useNavigate()

    const host = "https://projectsemapp.herokuapp.com"


    const [auth, setAuth] = useState({ username: '', state: false })


    const userAuth = async (username, password) => {

        //API call
        const response = await fetch(`${host}/api/studentAuth/login`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.stuAuthToken)
            setAuth({
                username: json.username,
                state: true
            })
            console.log(json)
            navigate('/profile')
        }
    }

    const employerAuth = async (companyemail, password) => {
        //API call
        const response = await fetch(`${host}/api/employerAuth/emplogin`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ companyemail, password })
        });

        const json = await response.json();

        console.log(json)

        if (json.success) {
            localStorage.setItem('empAuthCoin', json.empAuthCoin)
            setAuth({
                username: json.companyemail,
                state: true
            })
            console.log(json.success)
            navigate('/empProfile')
        }
    };


    return (
        // eslint-disable-next-line
        <AuthContext.Provider value={{ auth, userAuth, employerAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;