import React, { useState } from 'react';
import HomeContext from './HomeContext'




const HomeState = (props) => {

  const host = "https://projectsemapp.herokuapp.com"

  const dataInitial = []

  const [data, setData] = useState(dataInitial)

  // get all data
  const getData = async () => {
    //API call   
    const response = await fetch(`${host}/api/jobListing/fetchjobs`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    setData(json)
  }
  return (
    // eslint-disable-next-line
    <HomeContext.Provider value={{ data, getData }}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeState;
