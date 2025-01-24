import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function Navbar() {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);

  const doLogout = ()=>{
    localStorage.clear();
    setLoggedInUser(null);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MyToDoApp</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              { !loggedInUser &&
                
                  <NavLink className="nav-link"  to={"/login"}>Login</NavLink>            
                
              }
              {
                loggedInUser && loggedInUser.role === 'manager' &&                 
                 <NavLink className="nav-link" to={"/register"}>Add Employee</NavLink>
              }
              {
                loggedInUser && loggedInUser.role === 'manager' &&                 
                 <NavLink className="nav-link" to={"/addtask"}>Add Task</NavLink>
              }
              {
                loggedInUser && loggedInUser.role === 'manager' &&
                 <NavLink className="nav-link" to={"/teamtasks"}>Team Tasks</NavLink>
              }              
              {
                loggedInUser && loggedInUser.role === 'employee' &&
                <b>Employee</b>
              }
              { loggedInUser && 
                <button className="nav-link" onClick={doLogout}>Logout</button>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
