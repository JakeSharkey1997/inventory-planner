import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function EditItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [item, setItem] = useState(props.item)
  const [brakesId, setBrakesId] = useState(props.brakesId)

  const onSubmit = (e) => {
    e.preventDefault();
    props.addItem(item, brakesId)
    setItem('')
    setBrakesId('')
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='editbtn'>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={ onSubmit } className='form'>
            <input
              type='text'
              name='item'
              className='submission_box'
              value={ item }
              onChange={ e => setItem(e.target.value) }
            />
            <input
              type='text'
              name='brakesId'
              className='submission_box'
              value={ brakesId }
              onChange={ e => setBrakesId(e.target.value) }
            />
            <input
              type='submit'
              value='Submit'
              className='btn'
              onClick={ onSubmit }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// PropTypes
EditItem.propTypes = {
  item: PropTypes.string.isRequired,
  brakesId: PropTypes.string.isRequired,
}


export default EditItem;