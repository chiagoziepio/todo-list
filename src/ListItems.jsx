import React, { useRef } from 'react'

import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6"
const ListItems = ({task, handleChecked,isChecked}) => {
  
    const labelRef = useRef(null)
   
  return (
    <>
       <li key={task.id}>
            
            <span>{task.createdDate}</span>
            <div className='bodyandcirlce' >
                <label onClick={()=>handleChecked(task.id)} >{task.checked ? <FaRegCircle/>: <FaRegCircleCheck/> }</label>
               {/*  <span className="icon"
                    onClick={handleChecked}
                >
                    {isChecked ? <FaRegCircle/>: <FaRegCircleCheck/>}
                </span> */}
                <p className="task-body">
                   
                    {task.body}
                </p>
            </div>
        </li>
    </>
  )
}

export default ListItems