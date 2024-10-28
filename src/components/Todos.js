import React, {useContext} from 'react'
import Todo from './Todo.js'
import Next7Days from './Next7Days.js'
import { TodoContext } from '../context/'

function Todos() {
  const { todos, selectedProject } = useContext(TodoContext)


  return (
    <div className='Todos'>
      <div className="selected-projects">
        {selectedProject}
      </div>
      <div className="todos">
      {
        selectedProject === "next 7 days" ?
        <Next7Days todos={todos} />
        :
        todos.map( todo =>
          <Todo todo={todo} key={todo.id} />
        )
      }
      </div>
    </div>
  );
}

export default Todos
