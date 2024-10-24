import React, {useState} from 'react'
import Modal from './Modal.js'

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='AddNewTodo'>
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          + New TODO
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          Hello World
          <button onClick={() => setShowModal(false)}>
            hide
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewTodo
