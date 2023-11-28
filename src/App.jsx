import { useState } from 'react'
import Input from './Input';
import Header from './Header';
import Footer from './Footer';
import Task from './Task';
import { format} from 'date-fns'

function App() {
  const [tasks,setTasks]=useState([
    {
      id:1,
      createdDate: "28th November 2023",
      body: "going to church",
    },
    {
      id:2,
      createDdate: "28th November 2023",
      body: "going to church",
    },
    {
      id:3,
      createdDate: "28th November 2023",
      body: "going to church",
    }
  ]);
  const[inputValue,setInputValue] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = tasks.length ? tasks[tasks.length - 1].id + 1: 1;
    const createddate = format(new Date(), 'MMMM dd, yyyy pp');
    const newtask = {id, createdDate:createddate,body:inputValue};
    const allTask = [...tasks, newtask]
    setTasks(allTask)
    setInputValue("")
  }
  return (
    <>
      <Header/>
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <Task
        tasks={tasks}
      />
      <Footer/>
    </>
  )
}

export default App
