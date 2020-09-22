import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function EditItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [item, setItem] = useState(props.item.item)
  const [brakesId, setBrakesId] = useState(props.item.brakesId)
  const [category, setCategory] = useState(props.item.category)

  const onSubmit = (e) => {
    e.preventDefault();
    const key = props.item.key
    const item_obj = { key, item, brakesId, category}
    props.editItem(item_obj)
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='editBtn'>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={ onSubmit } className='editmodal'>
              <div className='modalcon'>
                <input
                  type='text'
                  name='item'
                  className='submission_box'
                  value={ item }
                  onChange={ e => setItem(e.target.value) }
                />
              </div>
              <div className='modalcon'>
                <input
                  type='text'
                  name='brakesId'
                  className='submission_box'
                  value={ brakesId }
                  onChange={ e => setBrakesId(e.target.value) }
                />
              </div>
              <div className='modalcon'>
                <select value={ category } onChange= {e => setCategory(e.target.value) }>
                  <option value="" hidden>Category</option>
                  <option value="0">Frozen</option>
                  <option value="1">Chilled</option>
                  <option value="2">Ambient</option>
                </select>
              </div>
              </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// PropTypes
EditItem.propTypes = {
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired
}


export default EditItem;