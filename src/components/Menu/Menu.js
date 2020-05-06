import React from 'react';
import './Menu.css'

const Menu = ( { onClick } ) => {
  return (
    <div className="menu-container">
      <button onClick={onClick} name='entertainment' className='menu-btn'>entertainment</button>
      <button onClick={onClick} name='health' className='menu-btn'>health</button>
      <button onClick={onClick} name='local' className='menu-btn'>local</button>
      <button onClick={onClick} name='science' className='menu-btn'>science</button>
      <button onClick={onClick} name='technology' className='menu-btn'>technology</button>
    </div>
   );
}
export default Menu;