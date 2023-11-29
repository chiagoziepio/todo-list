import React from 'react'
import ListItems from './ListItems'
import Input from './Input'

const Task = ({tasks,inputValue,handleSubmit,setInputValue, handleChecked,isChecked}) => {
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
                 handleChecked={handleChecked}
                 isChecked={isChecked}
                 
                />
            ))}

        </ul>
    </main>
  )
}

export default Task