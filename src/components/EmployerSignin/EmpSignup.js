import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AuthContext from '../../context/Authentication/AuthContext';




const EmpSignup = (props) => {

  const context = useContext(AuthContext)
  const { employerSignup } = context

  const [credentials, setCredentials] = useState({ companyname: "", password: "", address: "", companyphone: "", companyemail: "" })



  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    employerSignup(credentials.companyname, credentials.password, credentials.address, credentials.companyphone, credentials.companyemail)
  };

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>





        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>


              <TextField
                autoComplete="given-name"
                name="companyname"
                required
                fullWidth
                id="companyname"
                label="Name"
                autoFocus
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyemail"
                label="Email Address"
                name="companyemail"
                type="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyphone"
                label="Phone Number"
                name="companyphone"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={onChange}
              />
            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button color="primary" component={Link} to={"/empSignin"}>Already have an account? Sign in</Button>
              <Button color="primary" component={Link} to={"/"}>Back to Home Page</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
};


export default EmpSignup;