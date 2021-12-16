import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import ApplyContext from '../../context/applyContext/ApplyContext'
import { useNavigate } from 'react-router-dom';


const HomeCard = (props) => {

  let navigate = useNavigate();

  const contextApply = useContext(ApplyContext)
  const { getAppliedJob } = contextApply

  const { details, applyNow } = props

  const viewButton = () => {
    applyNow(details)
    getAppliedJob(details._id)
    if (localStorage.getItem('token')) {

      navigate(`/post/${details._id}`)
    }
  }



  return (
    <>


      {/* eslint-disable-next-line */}
      <Card style={{ maxWidth: 50 }, { marginTop: 5 }} >
        <CardContent>
          <Typography sx={{ fontSize: 17 }} color="text.primary" gutterBottom>
            {details.title}
          </Typography>

          {/* <Typography variant="body2">
            {details.description}
          </Typography>

          <Typography variant="body2">
            {details.salary}
          </Typography>

          <Typography variant="body2">
            {details.opening}
          </Typography> */}
          <Button style={{ width: '12px', height: '12px' }} size='small' color='primary' onClick={viewButton}>View</Button>
          {/* {()=>{getAppliedJob(details._id)}} */}
          {/* ()=>{applyNow(details)} */}
          {/* <button type="button" className="btn btn-primary" onClick={handleOnClick}>View</button> */}



        </CardContent>

      </Card>


    </>
  )
}

export default HomeCard
