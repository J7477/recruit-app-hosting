import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'



const Cards = () => {

  let { id } = useParams();

  const [post, setPost] = useState({})
  const [emp, setEmp] = useState({})



  useEffect(() => {
    async function fetchData() {
      try {
        //API call   
        const response = await fetch(`https://projectsemapp.herokuapp.com/api/jobListing/applyJob/${id}`, {
          method: 'GET',

          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();
        console.log(json)
        setPost(json.appliedJob)
        setEmp(json.emp)

      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const applyNow = (currentJob) => {

    alert('Job Applied');

  }

  return (
    <>
      <Grid>
        <Nav />
      </Grid>
      <Grid>
        <Button color="primary" component={Link} to={"/"}>Home Page</Button>
      </Grid>

      <Grid>
        {/* eslint-disable-next-line */}
        <Card sx={{ maxWidth: 275 }, { marginTop: 10 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              Job Title:- {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Description:- {post.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Salary:- {post.salary}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Openings:- {post.opening}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={applyNow} >Apply Now</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid>
        {/* eslint-disable-next-line */}
        <Card sx={{ maxWidth: 275 }, { marginTop: 10 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              Company Name:- {emp.companyname}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Email:- {emp.companyemail}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Phone:- {emp.companyphone}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Cards;