import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { UserContext } from '../contexts/UserContext';
import TeamTask from './TeamTask';

export default function TeamTasks() {
    const [allTasks, setAllTasks] = useState();
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    
    useEffect(()=>{
        fetch('http://localhost:8080/tasks')
        .then(resp => resp.json())
        .then(data => 
        {           
            const tasks = data._embedded.tasks;
            // console.log(tasks[0].userId.username);
            const teamTasks = tasks.filter( task => task.userId.username !== loggedInUser.username)
            setAllTasks(teamTasks);
        });
    },[]);

    console.log(allTasks);
    
  return (
    <>
    <div>TeamTasks</div>
    <div className='row'>
    {
        allTasks && allTasks.map(task => <TeamTask key={task.id} task= {task} />)
    }
    </div>
    </>
  )
}
