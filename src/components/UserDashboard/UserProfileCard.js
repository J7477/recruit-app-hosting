import Card from '@mui/material/Card';
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';



const UserProfileCard = (props) => {

  const { userDetails } = props

  let navigate = useNavigate();

  return (
    <div>
      {/* eslint-disable-next-line */}
      <Card sx={{ maxWidth: 270 }, { marginTop: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Username: {userDetails.username}
          </Typography>

          <Typography variant="body2">
            Name: {userDetails.name}
          </Typography>

          <Typography variant="body2">
            Phone: {userDetails.phone}
          </Typography>
          <Button
            variant='outlined'
            color='secondary'
            style={{ margin: 10 }}
            onClick={() => { navigate(`/changepassword/${userDetails._id}`) }}
            size='small'
          >
            Change Password
          </Button>

        </CardContent>

      </Card>


    </div>
  )
}

export default UserProfileCard
