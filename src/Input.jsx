import React from 'react'

const Input = ({inputValue,setInputValue,handleSubmit,inputRef}) => {
  return (
    <>
        <form action="">
            <input 
                type="text" 
                placeholder='Add task'
                required
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                ref={inputRef}
                
            />
            <button type="submit" className="submit" onClick={handleSubmit}>+</button>
        </form>
    
    </>
  )
}

export default Input