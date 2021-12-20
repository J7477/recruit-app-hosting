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


const UserSignIn = (props) => {


  const userContext = useContext(AuthContext)

  const { userAuth, auth } = userContext;

  const [credentials, setCredentials] = useState({ username: "", password: "" })


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    userAuth(credentials.username, credentials.password)
  }



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