import React from 'react';
import './Menu.css'

const Menu = ( { onClick } ) => {
  return (
    <div className="menu-container">
      <button onClick={onClick}className='entertainment menu-btn'>entertainment</button>
      <button onClick={onClick}className='health menu-btn'>health</button>
      <button onClick={onClick}className='local menu-btn'>local</button>
      <button onClick={onClick}className='science menu-btn'>science</button>
      <button onClick={onClick}className='technology menu-btn'>technology</button>
    </div>
   );
}
export default Menu;