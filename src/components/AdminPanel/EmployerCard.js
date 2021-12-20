import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AdminContext from '../../context/AdminContext/AdminContext';


const EmployerCard = (props) => {

    const { employer } = props
    const context = useContext(AdminContext)

    const { deleteEmployer } = context

    return (
        <div>
            {/* eslint-disable-next-line */}
            <Card sx={{ maxWidth: 270 }, { marginTop: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Company Name:-  {employer.companyname}
                    </Typography>

                    <Typography variant="body2">
                        Company Email:-  {employer.companyemail}
                    </Typography>

                    <Typography variant="body2">
                        Company Phone:-  {employer.companyphone}
                    </Typography>


                    {/* <i class="fas fa-edit mx-2"></i> */}
                    <i class="fas fa-trash mx-2" onClick={() => { deleteEmployer(employer._id) }}></i>

                </CardContent>

            </Card>


        </div >
    )
}

export default EmployerCard
