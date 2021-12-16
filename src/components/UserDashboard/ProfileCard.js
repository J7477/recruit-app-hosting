import Card from '@mui/material/Card';
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const ProfileCard = (props) => {

  const { details, updateDetail } = props


  return (
    <div>
      {/* eslint-disable-next-line */}
      <Card sx={{ maxWidth: 270 }, { marginTop: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            10th Marks: {details.ten}
          </Typography>

          <Typography variant="body2">
            12th Marks: {details.twelve}
          </Typography>

          <Typography variant="body2">
            Graduation: {details.graduation}
          </Typography>

          <Typography variant="body2">
            postgraduation: {details.postgraduation}
          </Typography>
          <i class="fas fa-edit mx-2" onClick={() => { updateDetail(details) }}></i>{/*editicon*/}

        </CardContent>

      </Card>


    </div>
  )
}

export default ProfileCard
