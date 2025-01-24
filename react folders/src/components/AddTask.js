import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
    const navigate = useNavigate();
    const [assignTo,setAssignTo] = useState(null);
    const [newTask, setNewTask] = useState({
        title:'',
        description:'',
        is_completed:false,
        userId:'',
        startDate:'',
        dueDate:''
    });

    useEffect(()=>{
       fetch('http://localhost:8080/users')
       .then(resp => resp.json())
       .then(data => setAssignTo(data._embedded.users));   
    },[]);

    const handleInputChange = (event)=>{
        const {name, value} = event.target ;
          setNewTask((newTask)=>({
            ...newTask,
            [name]:value
        }));
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch('http://localhost:8080/tasks',{
            method:'POST',
            headers:{"Content-Type":"application/json" },
            body: JSON.stringify(newTask)
        });

        if (response.ok){            
            navigate("/");
            alert(`Task ${newTask.title} is created !!`);
        }
    }

    // console.log(newTask);
    console.log(assignTo);
    
    
  return (
    <>
        <div>AddTask</div>
        <div className='col-md-4 mx-auto'>
              <form onSubmit={handleSubmit}>           
                      <div className="form-group">
                          <label >Title</label>
                          <input 
                              type="text" 
                              className="form-control" 
                              required 
                              name="title" 
                              value={newTask.title}
                              onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                          <label >Description</label>                          
                        <textarea className="form-control"  rows="3"
                         name="description"
                         value={newTask.description}
                         onChange={handleInputChange}
                         ></textarea>
                      </div>  
                      <div className="form-group">
                      <label >Assign To</label>
                            <select className="form-select" name="userId" onChange={handleInputChange}>
                                <option value="">Assign the task to</option>
                                {
                                   assignTo && assignTo.map(user => 
                                    <option key={user.id} value={user._links.self.href} >{user.username}</option>
                                    )
                                }                              
                            </select>  
                      </div> 
                      <div className="form-group">
                          <label >Start Date</label>
                          <input 
                              type="date" 
                              className="form-control" 
                              required 
                              name="startDate" 
                              value={newTask.startDate}
                              onChange={handleInputChange} />
                      </div> 
                      <div className="form-group">
                          <label >Due Date</label>
                          <input 
                              type="date" 
                              className="form-control" 
                              required 
                              name="dueDate" 
                              value={newTask.dueDate}
                              onChange={handleInputChange} />
                      </div>                
          <button type="submit" className="btn btn-primary mx-auto" >Add Task</button>
          </form>
        </div>
    </>
  )
}
