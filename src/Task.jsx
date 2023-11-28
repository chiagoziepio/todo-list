import React from 'react'

const Task = ({tasks}) => {
  return (
    <>
        <ul className="task-ul">
            {tasks.map(task =>(
                <li key={task.id}>
                    <span>{task.createdDate}</span>
                    <p className="task-body">{task.body}</p>
                </li>
            ))}

        </ul>
    </>
  )
}

export default Task