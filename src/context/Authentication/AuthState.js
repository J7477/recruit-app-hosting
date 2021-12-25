import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthState = (props) => {

    let navigate = useNavigate()

    const host = "https://projectsemapp.herokuapp.com"
    // const localHost = "http://localhost:5000"


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



        if (json.success) {
            localStorage.setItem('empAuthCoin', json.empAuthCoin)
            setAuth({
                username: json.companyemail,
                state: true
            })

            navigate('/empProfile')
        }
    };


    const employerSignup = async (companyname, password, address, companyphone, companyemail) => {


        const response = await fetch(`${host}/api/employerAuth/createempuser`, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ companyname, password, address, companyphone, companyemail })
        });

        const json = await response.json();

        if (json.success) {
            localStorage.setItem('empAuthCoin', json.empAuthCoin)
            setAuth({
                username: json.companyemail,
                state: true
            })

            navigate('/empProfile')
        }
    }



    const userSignup = async (username, password, name, phone) => {
        const response = await fetch(`${host}/api/studentAuth/createuser`, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, name, phone })
        });

        const json = await response.json();

        // if (json.success) {
        //     localStorage.setItem('token', json.stuAuthToken)
        //     setAuth({
        //         username: json.username,
        //         state: true
        //     })

        //     navigate('/profile')
        // }
        console.log(json)
        if (json.status === 'pending') {
            navigate(`/emailsent/${json.username}`)
        }
        else if (json.error === undefined) {
            alert('Enter a Valid Phone Number')
        }
        else if (!json.success) {
            alert(json.error)
        }
    }

    return (
        // eslint-disable-next-line
        <AuthContext.Provider value={{ auth, userAuth, employerAuth, employerSignup, userSignup }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;