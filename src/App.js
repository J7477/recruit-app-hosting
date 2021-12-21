import React from 'react'
import Home from './components/Home/Home';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles'
// import { green } from "@material-ui/core/colors";
import UserDashboard from './components/UserDashboard/UserDashboard';
import {
  Route,
  Routes,
} from "react-router-dom";
import EmployerDashboard from './components/EmployerDashboard/EmployerDashboard';
import PostVacancy from './components/EmployerDashboard/PostVacancy';
import Profile from './components/EmployerDashboard/Profile';
import TotalVacancy from './components/EmployerDashboard/TotalVacancy';
import EducationForm from './components/UserDashboard/EducationForm';
import JobHistory from './components/UserDashboard/JobHistory';
import UserSignin from './components/UserSignin/UserSignin';
import UserSignup from './components/UserSignin/UserSignup';
import JobState from './context/jobs/JobState';
import IdState from './context/userProfile/IdState';
import ShowProfile from './components/UserDashboard/ShowProfile';
import EmpSignin from './components/EmployerSignin/EmpSignin';
import EmpSignup from './components/EmployerSignin/EmpSignup';
import HomeState from './context/HomeContext/HomeState';
import More from './components/Home/More';
import ApplyState from './context/applyContext/ApplyState';
import UserDetailState from './context/UserDetail/UserDetailState';
import Cards from './components/Home/Cards';
import AdminPage from './components/AdminPanel/AdminPage';
import AdminState from './context/AdminContext/AdminState';
import AdminJobs from './components/AdminPanel/AdminJobs';
import AdminUser from './components/AdminPanel/AdminUser';
import AdminSignin from './components/AdminPanel/AdminSignin';
import AuthState from './context/Authentication/AuthState';
import Complaint from './components/UserDashboard/Complaint'
import EmpComplaint from './components/EmployerDashboard/EmpComplaint';


// const theme = createTheme({
//   palette: {
//     primary: green,
//   }
// });



function App(props) {




  return (
    <>
      <JobState>
        <IdState>
          <HomeState>
            <ApplyState>
              <UserDetailState>
                <AdminState>
                  <AuthState>
                    <Routes>

                      <Route exact path='/' element={<Home />} />
                      <Route exact path='/userDashboard' element={<UserDashboard />} />
                      <Route exact path='/fillEducationForm' element={<EducationForm />} />
                      <Route exact path='/jobHistory' element={<JobHistory />} />
                      <Route exact path='/empProfile' element={<Profile />} />
                      <Route exact path='/employerDashboard' element={<EmployerDashboard />} />
                      <Route exact path='/empSignin' element={<EmpSignin />} />
                      <Route exact path='/empSignup' element={<EmpSignup />} />
                      <Route exact path='/postVacancy' element={<PostVacancy />} />
                      <Route exact path='/profile' element={<ShowProfile />} />
                      <Route exact path='/totalVacancy' element={<TotalVacancy />} />
                      <Route exact path='/userSignin' element={<UserSignin />} />
                      <Route exact path='/userSignup' element={<UserSignup />} />
                      <Route exact path='/more' element={<More />} />
                      <Route exact path='/post/:id' element={<Cards />} />
                      <Route exact path='/admin' element={<AdminSignin />} />
                      <Route exact path='/adminpage' element={<AdminPage />} />
                      <Route exact path='/adminjobs' element={<AdminJobs />} />
                      <Route exact path='/adminusers' element={<AdminUser />} />
                      <Route exact path='/complaint' element={<Complaint />} />
                      <Route exact path='/empcomplaint' element={<EmpComplaint />} />

                    </Routes>
                  </AuthState>
                </AdminState>
              </UserDetailState>
            </ApplyState>
          </HomeState>
        </IdState>
      </JobState>
    </>
  );
}

export default App;
