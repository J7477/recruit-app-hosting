import React, { useState } from 'react';
import UserDetailContext from './UserDetailContext'


const UserDetailState = (props) => {

  const host = "https://projectsemapp.herokuapp.com"

  const UserDataInitial = []

  const [userData, setUserData] = useState(UserDataInitial)

  // get all user data
  const getData = async () => {
    //API call   
    const response = await fetch(`${host}/api/studentAuth/getuser`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();

    console.log(json)
    setUserData(json)
  }


  return (
    // eslint-disable-next-line
    <UserDetailContext.Provider value={{ userData, getData }}>
      {props.children}
    </UserDetailContext.Provider>
  )
}

export default UserDetailState;
