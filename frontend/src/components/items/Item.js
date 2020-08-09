import React from 'react';
import PropTypes from 'prop-types';
import EditItem from './EditItem';

function Item (props) {
  const { key, item, brakesId } = props.item;
  return (
   <tr>
      <td><button onClick={ props.delItem.bind(this, key) } className='delbtn'>x</button></td>
      <td>{ item }</td>
      <td>{ brakesId }</td>
      <td><EditItem item={item} brakesId={brakesId} /></td>
   </tr> 
  )
}

// PropTypes
Item.propTypes = {
  item: PropTypes.object.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
}

export default Item;