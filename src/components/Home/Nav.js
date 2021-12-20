import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import AuthContext from '../../context/Authentication/AuthContext';


const Nav = () => {

  const navigate = useNavigate()

  const context = useContext(AuthContext)
  const { auth } = context


  const handleLogout = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('empAuthCoin')
    // localStorage.removeItem('emptoken')
    localStorage.clear()
    navigate("/")
  }
  const handleEmployerLogout = () => {
    // localStorage.removeItem('empAuthCoin')
    // localStorage.removeItem('emptoken')
    // localStorage.removeItem('token')
    localStorage.clear()
    navigate("/")
  }

  console.log(auth.username)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Recruitment</Link>



          {/* {
        (()=>{
          if(localStorage.getItem('token')){
            <form className="d-flex">
      <Button color="inherit" component={Link} to={"/userDashboard"}>User Dashboard</Button>
      <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </form>
          }
         if(localStorage.getItem('empAuthCoin')){
            <form className="d-flex">
            <Button color="inherit" component={Link} to={"/userDashboard"}>Emp Dashboard</Button>
            <Button color="inherit" onClick={handleEmployerLogout}>Logout</Button>
            </form> 
          }
          else{
            <form className="d-flex">
      <Button color="inherit" component={Link} to={"/userSignin"}>Students</Button>
      <Button color="inherit" component={Link} to={"/empSignin"}>Employers</Button>
      </form>
          }
        })()
      } */}


          {!localStorage.getItem('token') &&
            !localStorage.getItem('empAuthCoin') &&
            <form className="d-flex">
              <Button color="inherit" component={Link} to={"/admin"}>Admin</Button>
              <Button color="inherit" component={Link} to={"/userSignin"}>Students</Button>
              <Button color="inherit" component={Link} to={"/empSignin"}>Employers</Button>
            </form>
          }

          {localStorage.getItem('token') &&
            <form className="d-flex">
              {auth.username}
              <Button color="inherit" component={Link} to={"/profile"}>User Dashboard</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </form>
          }

          {localStorage.getItem('empAuthCoin') &&
            <form className="d-flex">
              <p style={{ margin: 5 }}>{auth.username}</p>
              <Button color="inherit" component={Link} to={"/empProfile"}>Employer Dashboard</Button>
              <Button color="inherit" onClick={handleEmployerLogout}>Logout</Button>
            </form>
          }

        </div>
      </nav>
    </>
  )
}

export default Nav
