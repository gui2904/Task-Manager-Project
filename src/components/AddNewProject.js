import React, {useState} from 'react'
import Modal from './Modal.js'
import ProjectForm from './ProjectForm.js'
import { Plus } from 'react-bootstrap-icons'

function AddNewProject() {
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')

  function handleSubmit(e){

  }

  return (
    <div className='AddNewProject'>
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <Plus size="20" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading='New Project!'
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText='+ Add Project'
        />
      </Modal>
    </div>
  );
}

export default AddNewProject
