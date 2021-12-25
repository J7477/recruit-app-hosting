import React, { useContext, useEffect, useRef, useState } from 'react'
import jobContext from '../../context/jobs/JobContext'
import JobsCard from './JobsCard';
import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router';


const Jobs = () => {


  // let navigate = useNavigate();
  const context = useContext(jobContext)
  // eslint-disable-next-line
  const { jobs, getJobs, editJob } = context;

  useEffect(() => {

    getJobs()

    //eslint-disable-next-line
  }, [])

  const reference = useRef(null)
  const refClose = useRef(null)

  const [job, setJob] = useState({ id: "", editTitle: '', editDescription: '', editSalary: 0, editOpenings: 0 })


  const updateJob = (currentJob) => {
    reference.current.click();
    setJob({ id: currentJob._id, editTitle: currentJob.title, editDescription: currentJob.description, editSalary: currentJob.salary, editOpenings: currentJob.opening })
  }

  const handleOnClick = (e) => {
    editJob(job.id, job.editTitle, job.editDescription, job.editSalary, job.editOpenings)
    refClose.current.click();
  }

  const onChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value })
  }

  return (
    <>
      <button ref={reference} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
        Launch modal
      </button>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit Job</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">




              {/* Adding form */}
              <form noValidate autoComplete="off">
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="Job Title"
                  name="editTitle"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={onChange}
                  value={job.editTitle}
                />
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="Description"
                  name="editDescription"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  fullWidth
                  onChange={onChange}
                  value={job.editDescription}
                />
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="Salary"
                  name="editSalary"
                  variant="outlined"
                  required
                  onChange={onChange}
                  value={job.editSalary}
                />
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="Openings"
                  name="editOpenings"
                  variant="outlined"
                  required
                  onChange={onChange}
                  value={job.editOpenings}
                />


              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleOnClick}>Update Job</button>
            </div>
          </div>
        </div>
      </div>


      {jobs.length === 0 && 'No jobs to display'}
      {jobs.map((job) => {
        return (
          <JobsCard key={job._id} updateJob={updateJob} job={job} />
        )
      })}
    </>
  )
}

export default Jobs
