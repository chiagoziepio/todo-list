import React from 'react'

const ListItems = ({task}) => {
  return (
    <>
       <li key={task.id}>
            <span>{task.createdDate}</span>
            <p className="task-body">{task.body}</p>
        </li>
    </>
  )
}

export default ListItems