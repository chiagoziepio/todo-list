import React, { useRef } from 'react'

import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6"
const ListItems = ({task, handleChecked,isChecked, handleDelete}) => {
  
    const labelRef = useRef(null)
   
  return (
    <>
       <li key={task.id}>
            
            <span>{task.createdDate}</span>
            <div className='task_body' >
                <div className='bodyandcircle'> 
                    <label onClick={()=>handleChecked(task.id)} >{task.checked ? <FaRegCircle/>: <FaRegCircleCheck/> }</label>
               
                 <p className={task.checked ? "task-item  " :"task-item checked"}>
                   
                    {task.body}
                 </p>
                </div>

                <span className='delete' onClick={handleDelete}>+</span>
               
            </div>
        </li>
    </>
  )
}

export default ListItems