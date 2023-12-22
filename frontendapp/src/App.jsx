import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    {
      task: "clean out the drawer",
      date: "12-24-23"
    },
    {
      task: "take out trash",
      date: "12-25-23"
    },
    {
      task: "clean room",
      date: "12-26-23"
    },
    {
      task: "do homework",
      date: "12-28-23"
    },
    {
      task: "set up for party!",
      date: "12-31-23"
    },
    {
      task: "set up mistletoe",
      date: "12-31-23"
    },
    
  ])
  const [newTaskName, setNewTaskName] = useState("")
  const [newDate, setNewDate] = useState("")
  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count)=> count - 1)}>
          count is {count}
        </button>
        {todos.map((todo, index) => <div className='todo-item'>
          <p>{todo.task}</p>
          <p>{todo.date}</p>
          <button onClick={()=> {
            setTodos(todos.filter((_,indexs)=> index != indexs))
          }
          }>
            x
          </button>
        </div>)}
      </div>
      <div>
        <div>

          <input placeholder='Task' value={newTaskName} onChange={(event)=> {
            console.log(event)
            setNewTaskName(event.target.value)
          }}>
          </input>
          <input placeholder='date' value={newDate} onChange={(event)=> {
            console.log(event)
            setNewDate(event.target.value)
          }}>
          
          </input>
        </div>
        <button onClick={()=> {
          if (newTaskName == "" || newDate == ""){
            return
          }
          if(Date.parse(newDate)){
            setTodos([...todos,{task: newTaskName, date: newDate}])
            
          
          }
          setNewTaskName("")
          setNewDate("")
          
          
        }
          }>
          Submit
        </button>
      </div>
    </>
  )
}

export default App
