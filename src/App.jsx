import { useState } from 'react'
import Input from './Input';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [task,setTask]=useState([]);
  const[inputValue,setInputValue] = useState("")

  const handleSubmit = ()=>{

  }
  return (
    <>
      <Header/>
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <Footer/>
    </>
  )
}

export default App
