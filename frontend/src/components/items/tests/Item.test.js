import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

import Item from "../Item";

let container = null;
beforeEach(() => {
  container = document.createElement("tbody");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test ("item in row renders correctly", () => {
  act(() => {
    const item_obj = {key:12, item:"Bacon", brakesId:"1234"}
    const delItem_obj = (key) => {}
    const editItem = () => {}
    render(<Item item={ item_obj } delItem={ delItem_obj } editItem={ editItem } showDelBtn={ true }/>, container);
  });
  expect(container.textContent).toBe("Bacon1234Editx")
})