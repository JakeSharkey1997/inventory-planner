import React from 'react';
import PropTypes from 'prop-types';
import EditItem from './EditItem';

function Item (props) {
  const { key, item, brakesId } = props.item;
  const button =
    <button onClick={ props.delItem.bind(this, key) } className='delbtn'>x</button>
  
  return (
   <tr>
      <td>{ item }</td>
      <td>{ brakesId }</td>
      <td><EditItem item={ props.item } editItem={ props.editItem }/></td>
      <td>{ props.showDelBtn ? button : ''}</td>
   </tr> 
  )
}

// PropTypes
Item.propTypes = {
  item: PropTypes.object.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  showDelBtn: PropTypes.bool.isRequired
}

export default Item;