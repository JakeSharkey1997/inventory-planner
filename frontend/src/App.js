import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Items from './components/items/Items';
import AddItem from './components/items/AddItem';

import './App.css';

function App() {
  const [ items, setItems ] = useState([])

  //Delete Item
  const delItem = async( key ) => {
    const item_obj = { key };
    const response = await fetch("/del-item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item_obj)
    });
    if (response.ok) {
      console.log("Item deleted")
      getAllItems()
    }
  }

  // Add Item
  const addItem = async(item, brakes_id) => {
    const item_obj = { item, brakes_id }
    const response = await fetch("/add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item_obj)
    });
    if (response.ok) {
      console.log("Item added")
      getAllItems()
    }
  }

  // Get all items from database
  const getAllItems = () => {
    fetch("/get-all-items").then(resp =>
      resp.json().then(data => {
        setItems(data.results)
        }
      )
    )
  }

  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddItem addItem={ addItem }/>
        <Items items={ items } delItem={ delItem }/>
      </div>
    </div>
  );
}

export default App;
