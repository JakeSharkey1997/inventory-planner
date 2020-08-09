import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddItem(props) {
  const [item, setItem] = useState('')
  const [brakesId, setBrakesId] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    props.addItem(item, brakesId)
    setItem('')
    setBrakesId('')
  }

  return (
    <form onSubmit={ onSubmit } className='form'>
      <input
        type='text'
        name='item'
        className='submission_box'
        placeholder='Add Item...'
        value={ item }
        onChange={ e => setItem(e.target.value) }
      />
      <input
        type='text'
        name='brakes_id'
        className='submission_box'
        placeholder='Add Brakes ID...'
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
  )
}

// PropTypes
AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default AddItem;