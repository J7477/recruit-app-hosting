import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom'




const UserSignup = (props) => {



  const [credentials, setCredentials] = useState({ username: "", password: "", name: "", phone: "" })

  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //API call
    const { username, password, name, phone } = credentials;

    const response = await fetch(`https://projectsemapp.herokuapp.com/api/studentAuth/createuser`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, name, phone })
    });

    const json = await response.json();

    console.log(json)

    if (json.success) {
      //save auth token and redirect
      localStorage.setItem('token', json.stuAuthToken)
      navigate('/')

    } else {
      alert("Incorrect credentials")
    }
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
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Email Address"
                name="username"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
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
              <Button color="primary" component={Link} to={"/userSignin"}>Already have an account? Sign in</Button>
              <Button color="primary" component={Link} to={"/"}>Back to Home Page</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
};


export default UserSignup;