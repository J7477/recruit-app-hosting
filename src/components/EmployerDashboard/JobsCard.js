import React, {useContext} from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jobContext from '../../context/jobs/JobContext'


const JobsCard = (props) => {

  const {job, updateJob}=props

  const context = useContext(jobContext)
  
  const {deleteJob}=context

    return (
        <div>
             {/* eslint-disable-next-line */}
            <Card sx={{ maxWidth: 270 }, {marginTop:5}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {job.title}
        </Typography>
        
        <Typography variant="body2">
        {job.description}
        </Typography>

        <Typography variant="body2">
        {job.salary}
        </Typography>

        <Typography variant="body2">
        {job.opening}
        </Typography>
         <i class="fas fa-trash mx-2" onClick={()=>{deleteJob(job._id)}}></i> {/*deleteicon */}
        <i class="fas fa-edit mx-2" onClick={()=>{updateJob(job)}}></i>{/*editicon*/}
      </CardContent>
     
    </Card>
        </div>
    )
}

export default JobsCard
