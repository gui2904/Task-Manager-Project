import React, {useState} from 'react'
import Modal from './Modal.js'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState('')
  const [day, setDay] = useState(new Date())
  const [time, setTime] = useState(new Date())

  return (
    <div className='AddNewTodo'>
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          + New TODO
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form>
          <div className="text">
            <h3>Add New TODO!</h3>
            <input
              type='text'
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder='Todo...'
              autoFocus
            />
          </div>
          <div className="remind">
            <Bell />
            <p>Remind Me!</p>
          </div>
          <div className="pick-day">
            <div className="title">
              <CalendarDay />
              <p>Choose a day</p>
            </div>
            date-picker
          </div>
          <div className="pick-time">
            <div className="title">
              <Clock />
              <p>Choose a time</p>
            </div>
            time-picker
          </div>
          <div className="pick-project">
            <div className="title">
              <Palette />
              <p>Choose a project</p>
            </div>
            <div className="projects">
              <div className="project active">
                Personal
              </div>
              <div className="project">
                Work
              </div>
            </div>
          </div>
          <div className="cancel" onClick={() => setShowModal(false)}>
            <X size='40' style={{ cursor: 'pointer' }} />
          </div>
          <div className="confirm">
            <button>+ Add TODO</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddNewTodo
