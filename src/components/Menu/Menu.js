import React from 'react';
import './Menu.css'

const Menu = ( { onClick } ) => {
  return (
    <div className="menu-container">
      <button onClick={onClick}className='entertainment'>entertainment</button>
      <button onClick={onClick}className='health'>health</button>
      <button onClick={onClick}className='local'>local</button>
      <button onClick={onClick}className='science'>science</button>
      <button onClick={onClick}className='technology'>technology</button>
    </div>
   );
}
export default Menu;