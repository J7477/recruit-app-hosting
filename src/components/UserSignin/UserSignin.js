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


const UserSignIn = (props) => {


  const [credentials, setCredentials] = useState({ username: "", password: "" })

  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //API call
    const response = await fetch(`https://projectsemapp.herokuapp.com/api/studentAuth/login`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: credentials.username, password: credentials.password })
    });

    const json = await response.json();

    // console.log(json)

    if (json.success) {
      //save auth token and redirect
      localStorage.setItem('token', json.stuAuthToken)
      // localStorage.removeItem('empAuthCoin')
      // localStorage.removeItem('emptoken')
      navigate('/profile')
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
          Sign in
        </Typography>



        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={credentials.username}
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={credentials.password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>


          <Grid container>
            <Grid item>
              <Button color="primary" component={Link} to={"/userSignup"}>Don't have an account? Sign up</Button>
            </Grid>
            <Grid>
              <Button color="primary" component={Link} to={"/"}>Home Page</Button>
            </Grid>
          </Grid>
        </form>
      </Box>

    </Container>
  )
};

export default UserSignIn;