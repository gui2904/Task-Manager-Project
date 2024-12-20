import React, {useState} from 'react'
import { CheckCircleFill, Circle, Trash, ArrowClockwise } from 'react-bootstrap-icons'
import firebase from '../firebase/'

function Todo({todo}) {
  const [hover, setHover] = useState(false)

  const deleteTodo = todo => {
    firebase
      .firestore()
      .collection('todos')
      .doc(todo.id)
      .delete()
  }

  return (
    <div className='Todo'>
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-todo">
          {
            todo.checked ?
            <span className="checked">
              <CheckCircleFill color="#bebebe" />
            </span>
            :
            <span className="unchecked">
              <Circle color={todo.color} />
            </span>
          }
        </div>
        <div className="text">
          <p style={{color : todo.checked ? "#bebebe" : '#000000'}}>{todo.text}</p>
          <span>{todo.time} - {todo.project}</span>
          <div className ={`line ${todo.checked ? 'line-through' : ''}`} />
        </div>
        <div>
          {
            todo.checked &&
            <span>
              <ArrowClockwise />
            </span>
          }
        </div>
        <div
          className="delete-todo"
          onClick={ () => deleteTodo(todo) }
        >
          {
            (hover || todo.checked) &&
              <span>
                <Trash />
              </span>
          }
        </div>
      </div>
    </div>
  );
}

export default Todo
