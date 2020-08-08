import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types'

function Items(props) {
  return <table className='table all-items'>
      <thead>
        <tr>
          <th>Item</th>
          <th>Brakes ID</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { props.items.map((item) => (
          <Item key={ item.key } item={ item } delItem={ props.delItem }/>
        ))
        }
      </tbody>
    </table>
}

// PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired,
  delItem: PropTypes.func.isRequired
}

export default Items;