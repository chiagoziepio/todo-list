import React from 'react'
import ListItems from './ListItems'
import Input from './Input'

const Task = ({tasks,inputValue,handleSubmit,setInputValue}) => {
  return (
    <main>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <ul className="task-ul">
            {tasks.map(task =>(
                <ListItems
                  key={task.id} 
                 task={task}
                />
            ))}

        </ul>
    </main>
  )
}

export default Task