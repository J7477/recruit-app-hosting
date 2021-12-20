import React, { useContext, useEffect, useRef, useState } from 'react'
import IdContext from '../../context/userProfile/IdContext'
import ProfileCard from './ProfileCard'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';
import UserDetailContext from '../../context/UserDetail/UserDetailContext';
import UserProfileCard from './UserProfileCard';


const Profile = () => {

  let navigate = useNavigate();

  const context = useContext(IdContext)
  const { details, getDetails, editDetail } = context;

  const detailContext = useContext(UserDetailContext)
  const { userData, getData } = detailContext



  useEffect(() => {
    if (localStorage.getItem('token')) {
      getDetails()
      getData()
    } else {
      navigate('/userSignin')
    }
    //eslint-disable-next-line
  }, [])

  const reference = useRef(null)
  const refClose = useRef(null)

  const [detail, setDetail] = useState({ id: "", eTen: '', eTwelve: '', eGraduation: 0, ePostgraduation: 0 })


  const updateDetail = (currentDetail) => {
    reference.current.click();
    setDetail({ id: currentDetail._id, eTen: currentDetail.ten, eTwelve: currentDetail.twelve, eGraduation: currentDetail.graduation, ePostgraduation: currentDetail.postgraduation })
  }

  const handleOnClick = (e) => {
    editDetail(detail.id, detail.eTen, detail.eTwelve, detail.eGraduation, detail.ePostgraduation)
    refClose.current.click();
  }

  const onChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value })
  }
  return (
    <>
      <button ref={reference} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
        Launch modal
      </button>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit Detail</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Adding form */}
              <form noValidate autoComplete="off">
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="10 th Marks"
                  name="eTen"
                  variant="outlined"
                  onChange={onChange}
                  value={detail.eTen}
                />
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="12 th Marks"
                  name="eTwelve"
                  variant="outlined"
                  onChange={onChange}
                  value={detail.eTwelve}
                />
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }}
                  label="Graduation"
                  name="eGraduation"
                  variant="outlined"
                  onChange={onChange}
                  value={detail.eGraduation}
                />
                <TextField
                  // eslint-disable-next-line
                  style={{ marginTop: 20 }, { marginBottom: 20 }, { marginLeft: 20 }}
                  label="Post Graduation"
                  name="ePostgraduation"
                  variant="outlined"
                  onChange={onChange}
                  value={detail.ePostgraduation}
                />

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleOnClick}>Update Detail</button>
            </div>
          </div>
        </div>
      </div>



      {
        details.slice(0, 1).map((detail) => {
          return <ProfileCard key={detail._id} updateDetail={updateDetail} details={detail}></ProfileCard>;
        })
      }
      {
        [userData].map((userDetail) => {
          return <UserProfileCard key={userDetail._id} userDetails={userDetail}></UserProfileCard>
        })
      }
    </>
  )
}

export default Profile