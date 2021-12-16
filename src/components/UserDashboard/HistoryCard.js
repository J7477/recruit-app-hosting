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
            {details.title}
          </Typography>

          <Typography variant="body2">
            {details.description}
          </Typography>

          <Typography variant="body2">
            {details.salary}
          </Typography>

          <Typography variant="body2">
            {details.opening}
          </Typography> 
         {/* <Button color='primary'>View</Button> */}

          

        </CardContent>

      </Card>


    </>
  )
}

export default HistoryCard
