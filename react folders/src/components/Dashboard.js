import React, { useEffect, useState } from 'react'
import Task from './Task';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [myTasks, setMyTasks] = useState(null);
    const data = localStorage.getItem("user");
    const currentUser = JSON.parse(data);
    // const [detailsTask, setDetailsTask] = useState(null);
    // console.log(currentUser);
    const navigate = useNavigate();

   useEffect(()=>{
    if((currentUser)){
        fetch(`http://localhost:8080/users/${currentUser.id}/tasks`)
        .then(resp => resp.json())
        .then(data => {
            setMyTasks(data._embedded.tasks);
        });
   }},[]);

   const loadDetails = (task)=>{
        // setDetailsTask(task);
        // console.log(task);        
        navigate('/details',{state:task});
   }

//    console.log("My Tasks : ",myTasks);
   

  return (
    <>
    <button class="btn btn-primary m-2" >All</button>
    <button class="btn btn-primary m-2" >Assigned</button>
    <button class="btn btn-primary m-2" >In Progress</button>
    <button class="btn btn-primary m-2" >Completed</button>
    <div className='row'>
        {
            myTasks && myTasks.map(task =>
                 <Task key={task.id} task={task} viewDetails={loadDetails}/>
            )
        }
    </div>
    </>
  )
}
