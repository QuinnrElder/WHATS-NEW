import React from 'react';
import './Menu.css'

const Menu = ({
  entertainment, 
  health, 
  local, 
  science, 
  technology
  }) => {
 
  return (
    <div className="menu-container">
      <button>entertainment</button>
      <button>health</button>
      <button>local</button>
      <button>science</button>
      <button>technology</button>
    </div>
   );
}
export default Menu;