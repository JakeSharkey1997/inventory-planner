import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditItem from './EditItem';
import Tick from './Tick';

export default function Item (props) {
  const { key, item, brakesId, category, categoryTitle } = props.item;
  const button =
    <button onClick={ props.delItem.bind(this, key) } className='delBtn'>x</button>

  const [lineStyle, setLineStyle] = useState(false);
  const lineToggle = () => {
    setLineStyle(!lineStyle)}

  const strikestyle = 
  lineStyle ?  'strikeOn': 'strikeOff'

  return (
   <tr>
      <td className={strikestyle}>{ item }</td>
      <td className={strikestyle}>{ brakesId }</td>
      <td className={strikestyle}>{ categoryTitle }</td>
      <td className='editBtnContainer'><EditItem item={ props.item } editItem={ props.editItem } className='editBtn'/></td>
      <td><Tick item={ props.item } lineToggle = {lineToggle}/>{ props.showDelBtn ? button : ''}</td>
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