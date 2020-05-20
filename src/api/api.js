import React from 'react';
import axios from 'axios';
import variables from '../config';


   export function loginRequest (email,password){
    
       console.log(email,password)
        const headers = {
            'Content-Type': 'application/json',
          }

        
          const data={
            email,password
          }
          axios.post(variables.baseURL+"/v0/auth/login", data, {
              headers: headers
            })
            .then((response) => {
                console.log(response)
                if(response){
                localStorage.setItem("access_token",response.data.token)
                window.location.href="/dashbord"
                //window.location.href('/dashbord')
                }

            })
            .catch((error) => {
              alert("Invalid credentials")
            })

            //window.location.href('/dashbord')
            
    }

export  function dashbord (){

    
    

}


export function putTrip (data){
    
    const token = localStorage.getItem("access_token");
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token':token
      }
     
       
       axios.put(variables.baseURL+"/v0/trip", data, {
           headers: headers
         })
         .then((response) => {
             console.log(response)
             if(response){
             window.location.href="/dashbord"
             //window.location.href('/dashbord')
             }

         })
         .catch((error) => {
            if(error.response.data.msg==="Token is not valid"){
                localStorage.removeItem("access_token");
                window.location.href="/login"
              }
           alert("Invalid credentials")
         })

         //window.location.href('/dashbord')
         
 }
 
 export function signUpUser (data){
    
    
    const headers = {
        'Content-Type': 'application/json',
      }
     
       
       axios.post(variables.baseURL+"/v0/auth/signUp", data, {
           headers: headers
         })
         .then((response) => {
             console.log(response)
             if(response.data.errmsg){
                alert("Account already exist")
             }
             else{
            alert("Account created")
              window.location.href="/login"
             //window.location.href('/dashbord')
             }

         })
         .catch((error) => {
            console.log(error)
           alert("Invalid credentials")
         })

         //window.location.href('/dashbord')
         
 }


 
export function updateGoal(data){
    console.log(data)
  const token = localStorage.getItem("access_token");
  const headers = {
      'Content-Type': 'application/json',
      'x-auth-token':token
    }

   
     
     axios.post(variables.baseURL+"/v0/user/goal/", data, {
         headers: headers
       })
       .then((response) => {
          //  console.log(response)
           if(response){
            console.log(response)
           }

       })
       .catch((error) => {
          if(error.response.data.msg==="Token is not valid"){
              localStorage.removeItem("access_token");
              window.location.href="/login"
            }
         alert("Invalid credentials")
       })

       //window.location.href('/dashbord')
       
}