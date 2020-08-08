import React, { Component }from 'react';
import PropTypes from 'prop-types';

export class AddItem extends Component {
  state = {
    item: '',
    brakes_id: ''
  }

  onSubmit = (e) => {
    this.props.addItem(this.state.item, this.state.brakes_id)
    this.setState({ item: '', brakes_id: '' })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return(
      <form onSubmit={ this.onSubmit } className='form'>
        <input
          type='text'
          name='item'
          className='submission_box'
          placeholder='Add Item...'
          value={ this.state.item }
          onChange={ this.onChange }
        />
        <input
          type='text'
          name='brakes_id'
          className='submission_box'
          placeholder='Add Brakes ID...'
          value={ this.state.brakes_id }
          onChange={ this.onChange }
        />
        <input
          type='submit'
          value='Submit'
          className='btn'

        />
      </form>
    )
  }
}

// PropTypes
AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default AddItem;