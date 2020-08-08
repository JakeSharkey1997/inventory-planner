import React from 'react';
import PropTypes from 'prop-types';

function Item (props) {
  const { key, item, brakes_id } = props.item;
  return (
   <tr>
      <td>{ item }</td>
      <td>{ brakes_id }</td>
      <td><button onClick={ props.delItem.bind(this, key) } className='delbtn'>x</button></td>
   </tr> 
  )
}

// PropTypes
Item.propTypes = {
  item: PropTypes.object.isRequired,
  delItem: PropTypes.func.isRequired
}

export default Item;