import React, { useEffect, useContext, useState } from 'react'
import { Grid, TextField } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import HomeContext from '../../context/HomeContext/HomeContext'
import HomeCard from './HomeCard'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { useNavigate } from 'react-router';




const More = (props) => {


  const context = useContext(HomeContext)
  const { data, getData } = context;


  useEffect(() => {

    getData()
    //eslint-disable-next-line
  }, [])

  const [filter, setFilter] = useState("")

  const handleSearch = (e) => {
    setFilter(e.target.value)
  }

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
        <Nav />
      </Box>


      <Grid
        container
        spacing={0}
        // direction="column"
        alignItems="center"
        justify="center"
      >
        <h1>Latest Jobs</h1>
      </Grid>

      <Grid>
        <Button style={{ color: '#030027' }} component={Link} to={"/"}> Home Page</Button>
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
        {data.map((detail) => {
          return (
            detail.title.includes(filter) &&
            <HomeCard key={detail._id} details={detail} applyNow={applyNow} />
          )
        })}
      </Box>


    </>
  )
}

export default More
