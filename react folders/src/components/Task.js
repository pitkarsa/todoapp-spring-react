import React from 'react'

export default function Task({task, viewDetails}) {
    let cls = '';
    if (task.status ==='assigned') cls='info';
    else if (task.status === 'in progress') cls='primary';
    else if (task.status === 'completed') cls='success';
    else if (task.status==='delayed') cls='danger';
    else cls='secondary';

    const handleClick = ()=>{
        viewDetails(task);
    };

  return (
    <div className='m-1 col-md-3'>
        <div className={`card border border-${cls}  `}>
            <div style={{cursor:"pointer"}} className={`card-header bg bg-${cls} `} onClick={handleClick} >
                {task.status}
            </div>
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <i className="bi bi-calendar-date"></i> Start By: {task.startDate} <br />
                <i className="bi bi-calendar-date"></i> Due By: {task.dueDate} <br />
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    </div>
  )
}
