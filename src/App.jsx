import { useState, useRef } from 'react'

import Header from './Header';
import Footer from './Footer';
import Task from './Task';
import { format} from 'date-fns'
import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6"

function App() {
  const[isChecked, setISChecked]= useState(true)
  const [tasks,setTasks]=useState([
    {
      id:1,
      checked:isChecked,
      createdDate: "28th November 2023",
      body: "going to church",
    },
    {
      id:2,
      checked:isChecked,
      createDdate: "28th November 2023",
      body: "going to church",
    },
    {
      id:3,
      checked:isChecked,
      createdDate: "28th November 2023",
      body: "going to church",
    }
  ]);
  const[inputValue,setInputValue] = useState("")
  
 
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = tasks.length ? tasks[tasks.length - 1].id + 1: 1;
    const createddate = format(new Date(), 'MMMM dd, yyyy pp');
    const checked = isChecked
    const newtask = {id, createdDate:createddate,body:inputValue,checked };
    const allTask = [...tasks, newtask]
    setTasks(allTask)
    setInputValue("")
  }
  
  const handleChecked = (id)=>{
    const listItems = tasks.map(item => item.id === id ? {...item, checked: !item.checked} : item);
    setTasks(listItems)
    
    
  }
  const handleDelete = ()=>{

  }
  return (
    <div className='app'>
      <Header/>
      <Task
        tasks={tasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        handleChecked={handleChecked}
       isChecked={isChecked}
       handleDelete={handleDelete}
        
      />
      <Footer
        tasks={tasks.length}
      />
    </div>
  )
}

export default App
