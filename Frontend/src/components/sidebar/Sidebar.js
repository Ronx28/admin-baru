import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import menuItems from '../../assets/jsonData/sidebarMenuData.json'
// eslint-disable-next-line no-unused-vars
import LogoImage from '../../assets/images/Level_Up.png'

const SidebarItem = ({ active, icon, title }) => {
  const activeClass = active ? 'active' : ''

  return (
    <div className='sidebar-item'>
      <div className={`sidebar-item-inner ${activeClass}`}>
        <i className={icon} />
        <span>{title}</span>
      </div>
    </div>
  )
}

export default function Sidebar({ location }) {
  const isActive = menuItems.findIndex(
    (item) => item.path === location.pathname
  )
  return (
    <div className='sidebar'>
        <div className='text-admin'>
        <img src={LogoImage} alt='Logo' style={{width: 'auto', height: '70px', margin: '10px auto', display: 'block'}}/> {/* Use LogoImage here */}
      </div>
      {menuItems.map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Link to={item.path} key={index}>
          <SidebarItem
            title={item.title}
            icon={item.icon}
            active={index === isActive}
          />
        </Link>
      ))}
    </div>
  )
}
