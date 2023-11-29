import { useState, useRef } from 'react'

import Header from './Header';
import Footer from './Footer';
import Task from './Task';
import { format} from 'date-fns'


function App() {
  const[isChecked, setISChecked]= useState(true)
  const [tasks,setTasks]=useState([]);
  const[inputValue,setInputValue] = useState("")
  
 const inputRef = useRef(null)
  
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
  const handleDelete = (id)=>{
 const deletedTask = tasks.filter(task => task.id !== id);
 setTasks(deletedTask)
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
       inputRef={inputRef}
        
      />
      <Footer
        tasks={tasks.length}
      />
    </div>
  )
}

export default App
