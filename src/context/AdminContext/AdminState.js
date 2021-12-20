import React, { useState } from 'react';
import AdminContext from './AdminContext'




const AdminState = (props) => {

    const host = "https://projectsemapp.herokuapp.com"

    const dataInitial = []

    const [data, setData] = useState(dataInitial)

    // get all data
    const getData = async () => {
        //API call   
        const response = await fetch(`${host}/api/AdminPanel/employers`, {
            method: 'GET',

            // headers: {
            //     'Content-Type': 'application/json',
            // },
        });
        const json = await response.json();


        setData(json)
    }


    // Delete a employer
    const deleteEmployer = async (id) => {
        //API call
        const response = await fetch(`${host}/api/AdminPanel/deleteEmployer/${id}`, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();


        const newJobs = data.filter((job) => { return job._id !== id })
        setData(newJobs)
    }

    const getJobs = async () => {
        //API call   
        const response = await fetch(`${host}/api/AdminPanel/jobs`, {
            method: 'GET',


        });
        const json = await response.json();

        setData(json)

    }


    // Delete a job
    const deleteJob = async (id) => {
        //API call
        const response = await fetch(`${host}/api/AdminPanel/deleteJob/${id}`, {
            method: 'DELETE',

        });
        const json = await response.json();


        const newJobs = data.filter((job) => { return job._id !== id })
        setData(newJobs)
    }


    const getUsers = async () => {
        //API call   
        const response = await fetch(`${host}/api/AdminPanel/users`, {
            method: 'GET',


        });
        const json = await response.json();

        setData(json)

    }


    // Delete a user
    const deleteUser = async (id) => {
        //API call
        const response = await fetch(`${host}/api/AdminPanel/deleteUser/${id}`, {
            method: 'DELETE',

        });
        const json = await response.json();


        const newUsers = data.filter((job) => { return job._id !== id })
        setData(newUsers)
    }

    return (
        // eslint-disable-next-line
        <AdminContext.Provider value={{ data, getData, deleteEmployer, getJobs, deleteJob, getUsers, deleteUser }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;
