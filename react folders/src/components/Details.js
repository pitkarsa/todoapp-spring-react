import React, { useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

export default function Details() {
    const location = useLocation();
    // console.log(location.state);
    const navigate = useNavigate();
    
    

    const [editingTask, setEditingTask] = useState(location.state)
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log("updating ",editingTask);
        
        const resp = await fetch(`http://localhost:8080/tasks/${editingTask.id}`,
            {
                method:'PUT',
                headers:{ "Content-Type":"application/json" },
                body:JSON.stringify(editingTask)
            }
            );
        if (resp.ok){
            alert("Task updated successfully!!");
            navigate('/')
        }
    }
    const handleInputChange = (event)=>{
        const {name,value} = event.target;
        setEditingTask(existingTask =>({
            ...existingTask,
            [name]:value
        }))
    }

   console.log(editingTask);
   
    
  return (
    <>
    
    <div className='col-md-4 mx-auto'>
    <form onSubmit={handleSubmit}>           
            <div className="form-group">
                <label >Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    required 
                    name="title" 
                    value={editingTask.title}
                    onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label >Description</label>                          
              <textarea className="form-control"  rows="3"
               name="description"
               value={editingTask.description}
               onChange={handleInputChange}
               ></textarea>
            </div>  
            
            <div className="form-group">
                <label >Start Date</label>
                <input 
                    type="date" 
                    className="form-control" 
                    required 
                    name="startDate" 
                    value={editingTask.startDate}
                    onChange={handleInputChange} />
            </div> 
            <div className="form-group">
                <label >Due Date</label>
                <input 
                    type="date" 
                    className="form-control" 
                    required 
                    name="dueDate" 
                    value={editingTask.dueDate}
                    onChange={handleInputChange} />
            </div> 
            <div className="form-group">
                <label >Status</label>  
                <select className="form-select" name="status" aria-label="Default select example" value={editingTask.status} onChange={handleInputChange}>
                    <option >Task Status</option>
                    <option value="assigned">Assigned</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>  
            </div>           
<button type="submit" className="btn btn-primary mx-auto" >Update Task</button>
</form>
    </div>
    </>
  )
}
