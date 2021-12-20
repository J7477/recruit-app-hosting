import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AdminContext from '../../context/AdminContext/AdminContext';


const AdminJobCard = (props) => {

    const { jobs } = props
    const context = useContext(AdminContext)

    const { deleteJob } = context

    return (
        <div>
            {/* eslint-disable-next-line */}
            <Card sx={{ maxWidth: 270 }, { marginTop: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {jobs.title}
                    </Typography>

                    <Typography variant="body2">
                        {jobs.description}
                    </Typography>

                    {/* <Typography variant="body2">
                      {}
                    </Typography> */}


                    <i class="fas fa-trash mx-2" onClick={() => { deleteJob(jobs._id) }}></i>

                </CardContent>

            </Card>


        </div >
    )
}

export default AdminJobCard
