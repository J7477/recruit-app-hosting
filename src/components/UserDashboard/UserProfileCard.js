import Card from '@mui/material/Card';
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const UserProfileCard = (props) => {

  const { userDetails } = props


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


        </CardContent>

      </Card>


    </div>
  )
}

export default UserProfileCard
