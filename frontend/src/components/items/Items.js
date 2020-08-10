import React, { useState }from 'react';
import Item from './Item';
import PropTypes from 'prop-types'

function Items(props) {
  const [showDelBtn, setShowDelBtn] = useState(false);
  const deltoggle = () => {
    setShowDelBtn(!showDelBtn)
  }

  return <table className='table all-items'>
      <thead>
        <tr>
          <th>Item</th>
          <th>Brakes ID</th>
          <th></th>
          <th><button onClick={ deltoggle } className='deltogglebtn'>Delete Item</button></th>
        </tr>
      </thead>
      <tbody>
        { props.items.map((item) => (
          <Item key={ item.key } item={ item } delItem={ props.delItem } editItem={ props.editItem } showDelBtn={ showDelBtn }/>
        ))
        }
      </tbody>
    </table>
}

// PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired,
  delItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
}

export default Items;