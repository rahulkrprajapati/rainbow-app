import React from 'react';
import Color from './color';

const col = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const ColorContainer  = () =>{
    const listItems = col.map((cols) =>
      <Color name={cols}></Color>
    );
    return (
      <ul>{listItems}</ul>
    );
}
export default ColorContainer