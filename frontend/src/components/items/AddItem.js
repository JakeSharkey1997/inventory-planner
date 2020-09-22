import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddItem(props) {
  const [item, setItem] = useState('')
  const [brakesId, setBrakesId] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    const item_obj = {item, brakesId, category}
    props.addItem(item_obj)
    setItem('')
    setBrakesId('')
    setCategory('')
  }

  const setItemValue = (e) => {
    setItem(e.target.value)
  }

  const setBrakesIdValue = (e) => {
    setBrakesId(e.target.value)
  }

  const setCategoryValue = (e) => {
    setCategory(e.target.value)
  }

  return (
    <form onSubmit={ onSubmit } className='form'>
      <input
        type='text'
        name='item'
        className='submission_box'
        placeholder='Add Item...'
        value={ item }
        onChange={ setItemValue }
      />
      <input
        type='text'
        name='brakesId'
        className='submission_box'
        placeholder='Add Brakes ID...'
        value={ brakesId }
        onChange={ setBrakesIdValue }
      />
      <input
        type='text'
        name='category'
        className='submission_box'
        placeholder='Category'
        value={ category }
        onChange={ setCategoryValue }
      />
      <button className='inputBtn' onClick={ onSubmit }>
        Submit
      </button>
    </form>
  )
}

// PropTypes
AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default AddItem;