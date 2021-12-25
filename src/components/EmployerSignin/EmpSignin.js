import React, { useContext } from 'react';
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
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const EmpSignin = (props) => {


  const context = useContext(AuthContext)
  const { employerAuth } = context


  const initialValues = {
    companyemail: "",
    password: "",
  }


  const onSubmit = (values) => {

    employerAuth(values.companyemail, values.password)
  }

  const validationSchema = Yup.object().shape({
    companyemail: Yup.string().email("Please Enter a valid Email").required("Please Enter an Email"),
    password: Yup.string().min(5, 'Password Must Have More Than 5 Characters').required('Please Enter Your Password')
  })


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



        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Field as={TextField}
                margin="normal"
                fullWidth
                id="companyemail"
                label="Email Address"
                name="companyemail"
                autoComplete="email"
                autoFocus
                helperText={<ErrorMessage name='companyemail' />}
              />
              <Field as={TextField}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={<ErrorMessage name='password' />}
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
                  <Button color="primary" component={Link} to={"/empSignup"}>Don't have an account? Sign up</Button>
                </Grid>
                <Grid>
                  <Button color="primary" component={Link} to={"/"}>Home Page</Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>

    </Container>
  )
};

export default EmpSignin;