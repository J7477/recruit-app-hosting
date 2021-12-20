import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AdminContext from '../../context/AdminContext/AdminContext';


const AdminUserCard = (props) => {

    const { users } = props
    const context = useContext(AdminContext)

    const { deleteUser } = context


    return (
        <div>
            {/* eslint-disable-next-line */}
            <Card sx={{ maxWidth: 270 }, { marginTop: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {users.username}
                    </Typography>

                    <Typography variant="body2">
                        {users.name}
                    </Typography>

                    <Typography variant="body2">
                        {users.phone}
                    </Typography>


                    <i class="fas fa-trash mx-2" onClick={() => { deleteUser(users._id) }}></i>

                </CardContent>

            </Card>


        </div >
    )
}

export default AdminUserCard
