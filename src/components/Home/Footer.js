import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import React from 'react'



const Footor = () => {
    return (
        <AppBar position="static" color="secondary" sx={{ marginTop: 2, backgroundColor:'#3399FF' }}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                Footer
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footor
