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


const UserSignup = (props) => {

  const userContext = useContext(AuthContext)

  const { userSignup } = userContext;



  const onSubmit = async (values) => {


    userSignup(values.username, values.password, values.name, values.phone)

  };

  const initialValues = {
    username: "",
    password: "",
    name: "",
    phone: ""
  }


  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name to short").required('Please Enter Your Name'),
    username: Yup.string().email("Please Enter a valid Email").required("Please Enter an Email"),
    phone: Yup.string()
      .required("required")
      .min(10, "to short")
      .max(10, "to long"),
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
          Sign up
        </Typography>


        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>


                  <Field as={TextField}
                    autoComplete="given-name"
                    name="name"
                    // required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    helperText={<ErrorMessage name='name' />}
                  // onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field as={TextField}
                    // required
                    fullWidth
                    id="username"
                    label="Email Address"
                    name="username"
                    helperText={<ErrorMessage name='username' />}
                  // onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    // required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    helperText={<ErrorMessage name='phone' />}
                  // onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    // required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    helperText={<ErrorMessage name='password' />}
                  // onChange={onChange}
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
            </Form>
          )}
        </Formik>



      </Box>
    </Container>
  )
};


export default UserSignup;