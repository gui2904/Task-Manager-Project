import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TodoForm({
  handleSubmit,
  heading = false,
  text, setText,
  day, setDay,
  time, setTime,
  projects,
  showButtons = false,
  setShowModal = false
}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {
            heading &&
            <h3>{heading}</h3>
          }
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
          <DatePicker
            value={day}
            onChange={day => setDay(day)}
          />
        </div>
        <div className="pick-time">
          <div className="title">
            <Clock />
            <p>Choose a time</p>
          </div>
          <TimePicker
            value={time}
            onChange={time => setTime(time)}
          />
        </div>
        <div className="pick-project">
          <div className="title">
            <Palette />
            <p>Choose a project</p>
          </div>
          <div className="projects">
            {
              projects.map( project =>
                <div className="project" key={project.id}>
                {project.name}
                </div>
              )
            }
          </div>
        </div>
        {
          showButtons &&
          <div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <X size='40' />
            </div>
            <div className="confirm">
              <button>+ Add to do</button>
            </div>
          </div>
        }
      </form>
    </LocalizationProvider>
  );
}

export default TodoForm
