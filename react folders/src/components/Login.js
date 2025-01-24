import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function Login() {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
          username:'',
          password:''
      });
    const [loginError, setLoginError] = useState(null);
  
      const handleInputChange = (event)=>{
          const {name, value} = event.target ;
            setLogin((loginUser)=>({
              ...loginUser,
              [name]:value
          }));
      }
      const handleSubmit = async (event)=>{
          event.preventDefault();
         const response = await  fetch('http://localhost:8080/users/login',
              {
                  method:'POST',
                  headers:{ "Content-Type":"application/json" },
                  body: JSON.stringify(login)
              }
          );

        //   console.log("LOGIN response: ",response);
          
          if(response.ok){
            const data = await response.json();   
            // console.log(data);                     
            setLoggedInUser(data); // store this data in context
            localStorage.setItem("user",JSON.stringify(data));// as data is JSON, we need to stringify it
            // console.log('added user storage');
            
            navigate("/");// navigate to home page
            // console.log("Login data: ",data);            
          }
          else{
            setLoginError("Invalid details! Kindly provide correct details");            
          }     
      }      
      
    return (
      <div className='col-md-4 mx-auto'>
              <form onSubmit={handleSubmit}>
              {
                            loginError && 
                            <div className="alert alert-danger" role="alert">
                                {loginError}
                            </div>
                        }
                      <div className="form-group">
                          <label >Username</label>
                          <input 
                              type="text" 
                              className="form-control" 
                              required 
                              name="username" 
                              value={login.username}
                              onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                          <label >Password</label>
                          <input 
                              type="password" 
                              className="form-control" 
                              required
                              name="password"
                              value={login.password} 
                              onChange={handleInputChange}  />
                      </div>                     
          <button type="submit" className="btn btn-primary mx-auto" >Login</button>
          </form>
      </div>
    )
  }
  