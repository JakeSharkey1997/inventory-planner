import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types'

function Items(props) {
  return <table className='table all-items'>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Brakes ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { props.items.map((item) => (
          <Item key={ item.key } item={ item } delItem={ props.delItem } editItem={ props.editItem }/>
        ))
        }
      </tbody>
    </table>
}

// PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
}

export default Items;