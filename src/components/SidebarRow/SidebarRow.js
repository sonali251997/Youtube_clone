import React from 'react';
import './SidebarRow.css';


function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarrow ${selected ? 'selected' : ''}`}>
      <Icon className='sidebarrow__icon' />
      <h2 className='sidebarrow__title'>{title}</h2>
    </div>
  )
}

export default SideBarRow;
