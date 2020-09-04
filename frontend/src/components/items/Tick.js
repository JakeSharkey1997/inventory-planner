import React from 'react';
import { Button } from 'react-bootstrap';

export default function Tick(props) {
  return (
    <Button variant="primary" onClick={props.lineToggle} className='tick'>
    ✓
  </Button>
  )
}