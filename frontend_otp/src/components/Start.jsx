import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
    const [user,setUser]= useState({
        email:'',
      })

    function captureValue(){
        console.log('Hi')
        axios.post('http://localhost:4000/api/email',user)
        .then((res)=>{
            // console.log('Login res.data.message is -')
            alert(res.data.message)
            navigate('/otp')
            //   if(res.data.message == 'User not found'){
        //     alert('User not found')
        //   }else{
        //     console.log('Else part')
        //   }    
      })};

  return (
    <div>
        {/* <nav class="navbar navbar-expand-lg bg-secondary-subtle ">
            <div class="container-fluid " >
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <h1 class="mx-5 darkblue">  OTP App  </h1>
                </div>
            </div>
        </nav> */}
        <h1 class="mx-5 darkblue"> <u> OTP APP  </u></h1>
        <form class="formStyle" >
        <br/>
        <br/>
        <br/>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label" >Email id:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userName" 
            onChange={(e)=>{
              setUser({...user,email:e.target.value})
            }}/>
          </div>
        </div>
        
        <div class="d-grid col-4 mx-auto">
          {/* <button type="submit" class="btn btn-primary" >Log in</button> */}
          <button type="button" class="btn btn-primary d-grid col-6 mx-auto" onClick={captureValue}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Start