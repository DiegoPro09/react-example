import React from 'react'
import Tasklist from './components/Task-list'
import TaskForm from './components/TaskForm'

function App(){
  
  return(
    <div className="h-screen bg-zinc-900">
      <div className="container mx-auto p-10">
        <TaskForm/>
        <Tasklist/>
      </div>
    </div>
  )
}

export default App