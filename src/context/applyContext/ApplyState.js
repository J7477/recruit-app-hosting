import React, { useState } from 'react';
import ApplyContext from './ApplyContext'


const ApplyState = (props) => {
  const host = "http://localhost:5000"

  const appliedInitial = []

  const [applyJob, setApplyJob] = useState(appliedInitial)

  // get job details from applied job id
  const getAppliedJob = async (id) => {
    //API call   
    const response = await fetch(`${host}/api/jobListing/applyJob/${id}`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
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