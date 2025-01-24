import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:'',
        email:'',
        password:'',
        role:'employee'
    });

    const [passError, setPassError] = useState(null);
    
    const checkPasswords = (event)=>{
        const value = event.target.value;
        const err = (value === user.password ) ? null : 'Passwords must match';
        setPassError(err);
    }
    const handleInputChange = (event)=>{
        const {name, value} = event.target ;
        setUser((existingUser)=>({
            ...existingUser,
            [name]:value
        }));
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        fetch('http://localhost:8080/users/register',
            {
                method:'POST',
                headers:{ "Content-Type":"application/json" },
                body: JSON.stringify(user)
            }
        )
        .then(resp => resp.json())
        .then(data => {
            alert("Registered Successfully!! Please login");
            navigate("/login");// navigate to home page
        });

    }

    console.log(user);
    
  return (
    <div className='col-md-4 mx-auto'>
            <form onSubmit={handleSubmit}>
                {/* <caption>Register User</caption> */}
                    <div className="form-group">
                        <label >Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            required 
                            name="username" 
                            value={user.username}
                            onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            required 
                            name="email"
                            value={user.email} 
                            onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            required
                            name="password"
                            value={user.password} 
                            onChange={handleInputChange}  />
                    </div>
                    <div className="form-group">
                        <label >Confirm Password</label>
                        <input type="password" className="form-control" onChange={checkPasswords}  />
                        {
                            passError && 
                            <div className="alert alert-danger" role="alert">
                                {passError}
                            </div>
                        }
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" required value="manager"
                            onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Manager
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="role" required value="employee" 
                            onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Employee
                        </label>
                    </div>
        <button type="submit" className="btn btn-primary mx-auto" disabled={passError?true:false}>Register</button>
        </form>
</div>
  )
}
