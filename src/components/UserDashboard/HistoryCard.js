import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { Button } from '@material-ui/core';



const HistoryCard = (props) => {


  const { details } = props


  return (

    <>


      {/* eslint-disable-next-line */}
      <Card sx={{ width: 400 }, { marginTop: 5 }} >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Title: {details.job.title}
          </Typography>

          <Typography variant="body2">
            Description: {details.job.description}
          </Typography>

          <Typography variant="body2">
            Salary: {details.job.salary}
          </Typography>

          <Typography variant="body2">
            Opening: {details.job.opening}
          </Typography>
        </CardContent>


        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Company Name: {details.emp.companyname}
          </Typography>

          <Typography variant="body2">
            Company Email: {details.emp.companyemail}
          </Typography>

          <Typography variant="body2">
            Company Phone: {details.emp.companyphone}
          </Typography>


        </CardContent>
      </Card>


    </>
  )
}

export default HistoryCard
