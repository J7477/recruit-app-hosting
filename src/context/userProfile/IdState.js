import React, {useState} from 'react'
import IdContext from './IdContext'


const IdState=(props)=>{

  const host="http://localhost:5000"

  const detailInitial=[]

    const [details, setDetails] = useState(detailInitial)

    // get all details(marks)
    const getDetails = async()=>{
      //API call
      const response = await fetch(`${host}/api/studentDetail/fetchalldetails`, {
        method: 'GET',
    
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'auth-token':localStorage.getItem('token')
        },
      });
      const json= await response.json(); 
      setDetails(json)
    
    }

    // Add details
    const addDetail = async(ten, twelve, graduation, postgraduation)=>{
      //API call
      const response = await fetch(`${host}/api/studentDetail/adddetail`, {
        method: 'POST',
    
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({ten, twelve, graduation, postgraduation}) 
      });
      const detail= await response.json();

      setDetails(details.concat(detail))//creating an array, concat returns an array, push updates an array, jobs from useState, job passed from function

    }

  

    // Edit details
    const editDetail = async(id, ten, twelve, graduation, postgraduation)=>{

      //API call
      const response = await fetch(`${host}/api/studentDetail/updatedetail/${id}`, {
        method: 'PUT',
    
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({ten, twelve, graduation, postgraduation}) 
      });
      const json= await response.json(); 
      console.log(json)
    

      //logic for editing
      let newDetails= JSON.parse(JSON.stringify(details))

      for (let index = 0; index < newDetails.length; index++) {
        const element = newDetails[index];

        if(element._id===id){
          newDetails[index].ten=ten;
          newDetails[index].twelve=twelve;
          newDetails[index].graduation=graduation;
          newDetails[index].postgraduation=postgraduation;
          break;
        }
      }
      setDetails(newDetails)
    }


      return(
        // eslint-disable-next-line
        <IdContext.Provider value={{details, addDetail, editDetail, getDetails}}>
            {props.children}
        </IdContext.Provider>
    )
}

export default IdState;