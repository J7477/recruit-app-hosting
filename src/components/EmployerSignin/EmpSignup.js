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



const EmpSignup = (props) => {

  const context = useContext(AuthContext)
  const { employerSignup } = context

  const initialValues = {
    companyname: "",
    companyemail: "",
    companyphone: "",
    password: "",
    address: ""
  }


  const onSubmit = (values) => {
    console.log(values.companyemail)
    employerSignup(values.companyname, values.companyemail, values.companyphone, values.password, values.address)
  }

  const validationSchema = Yup.object().shape({
    companyname: Yup.string().min(2, "Name to short").required('Please Enter Your Name'),
    companyemail: Yup.string().email("Please Enter a valid Email").required("Please Enter an Email"),
    companyphone: Yup.string()
      .required("required")
      .min(10, "Phone Number is Shorter Than 10 Digits")
      .max(10, "Phone Number is Longer Than 10 Digits"),
    password: Yup.string().min(5, 'Password Must Have More Than 5 Characters').required('Please Enter Your Password'),
    address: Yup.string().min(5, "Address Must Atleast 5 Characters").required('Please Enter Your Address'),
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
                    name="companyname"
                    fullWidth
                    id="companyname"
                    label="Name"
                    autoFocus
                    helperText={<ErrorMessage name='companyname' />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field as={TextField}
                    fullWidth
                    id="companyemail"
                    label="Email Address"
                    name="companyemail"
                    // type="email"
                    helperText={<ErrorMessage name='companyemail' />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    fullWidth
                    id="companyphone"
                    label="Phone Number"
                    name="companyphone"
                    helperText={<ErrorMessage name='companyphone' />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    fullWidth
                    name="address"
                    label="Address"
                    id="address"
                    helperText={<ErrorMessage name='address' />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    helperText={<ErrorMessage name='password' />}
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
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  )
};


export default EmpSignup;