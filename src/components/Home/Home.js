import React, { useEffect, useContext, useState } from 'react'
import { Grid, TextField } from '@material-ui/core'
import business from '../../images/business.jpg'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import HomeContext from '../../context/HomeContext/HomeContext'
import HomeCard from './HomeCard'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { useNavigate } from 'react-router';


const useStyles = makeStyles((theme) => ({
  photo: {
    backgroundImage: `url(${business})`,
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no=repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
      width: '79vh'
    }
  }
}))

const Home = (props) => {


  const context = useContext(HomeContext)
  const { data, getData } = context;


  // const contextApply = useContext(ApplyContext)
  // const {getAppliedJob} = contextApply

  useEffect(() => {

    getData()
    //eslint-disable-next-line
  }, [])

  const [filter, setFilter] = useState("")

  const handleSearch = (e) => {
    setFilter(e.target.value)
  }



  const classes = useStyles()

  let navigate = useNavigate();




  const applyNow = (currentJob) => {

    if (!localStorage.getItem('token')) {

      alert('Sign in to apply')
      navigate('/userSignin')
    }
  }



  return (
    <>


      <Box>
        {/* <Navbar /> */}
        <Nav />
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >


        <Box className={classes.photo} />

      </Grid>


      <Grid
        container
        spacing={0}
        // direction="column"
        alignItems="center"
        justify="center"
      >
        <h1>Latest Jobs</h1>
      </Grid>
      <Grid
        container
        spacing={0}
        justifyContent='flex-end'
      >
        <TextField
          label="search"
          onChange={handleSearch}
        >

        </TextField>
      </Grid>
      <Box>
        {data.slice(0, 5).map((detail) => {
          return (
            detail.title.includes(filter) &&
            <HomeCard key={detail._id} details={detail} applyNow={applyNow} />
          )
        })}
      </Box>

      <Grid>
        <Button style={{ color: '#030027' }} component={Link} to={"/more"}>More...</Button>
      </Grid>
    </>
  )
}

export default Home
