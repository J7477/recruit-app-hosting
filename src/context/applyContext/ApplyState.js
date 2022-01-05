import React, { useState } from 'react';
import ApplyContext from './ApplyContext'


const ApplyState = (props) => {
  const host = "https://projectsemapp.herokuapp.com"
  // const localhost = "http://localhost:5000"

  const appliedInitial = []

  const [applyJob, setApplyJob] = useState(appliedInitial)

  // get job details from applied job id
  const getAppliedJob = async (id) => {
    //API call   (61d58c78042c3f2ecdd0ab77)
    const response = await fetch(`${host}/api/ApplyJobs/gets/${id}`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log(json)
    setApplyJob(json)

  }


  return (
    // eslint-disable-next-line
    <ApplyContext.Provider value={{ applyJob, getAppliedJob }}>
      {props.children}
    </ApplyContext.Provider>
  )
}
export default ApplyState;