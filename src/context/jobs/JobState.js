import React, { useState } from 'react';
import JobContext from './JobContext'


const JobState = (props) => {

  const host = "https://projectsemapp.herokuapp.com"

  const jobsInitial = []

  const [jobs, setJobs] = useState(jobsInitial)

  // get all jobs
  const getJobs = async () => {
    //API call   
    const response = await fetch(`${host}/api/jobListing/fetchalljobs`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',

        'auth-token': localStorage.getItem('empAuthCoin')
      },
    });
    const json = await response.json();

    setJobs(json)

  }

  // Add a job
  const addJob = async (title, description, salary, opening) => {
    //API call
    const response = await fetch(`${host}/api/jobListing/addjob`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('empAuthCoin')
      },
      body: JSON.stringify({ title, description, salary, opening })
    });
    const job = await response.json();

    setJobs(jobs.concat(job))//creating an array, concat returns an array, push updates an array, jobs from useState, job from json
  }

  // Delete a job
  const deleteJob = async (id) => {
    //API call
    const response = await fetch(`${host}/api/jobListing/deletejob/${id}`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('empAuthCoin')
      },
    });
    const json = await response.json();
    console.log(json)

    const newJobs = jobs.filter((job) => { return job._id !== id })
    setJobs(newJobs)
  }

  // Edit a job
  const editJob = async (id, title, description, salary, opening) => {

    //API call
    const response = await fetch(`${host}/api/jobListing/updatejob/${id}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('empAuthCoin')
      },
      body: JSON.stringify({ title, description, salary, opening })
    });
    const json = await response.json();
    console.log(json)


    //logic for editing
    let newJobs = JSON.parse(JSON.stringify(jobs))

    for (let index = 0; index < newJobs.length; index++) {
      const element = newJobs[index];

      if (element._id === id) {
        newJobs[index].title = title;
        newJobs[index].description = description;
        newJobs[index].salary = salary;
        newJobs[index].opening = opening;
        break;
      }
    }
    setJobs(newJobs)
  }
  return (
    // eslint-disable-next-line
    <JobContext.Provider value={{ jobs, addJob, deleteJob, editJob, getJobs }}>
      {props.children}
    </JobContext.Provider>
  )
}

export default JobState;