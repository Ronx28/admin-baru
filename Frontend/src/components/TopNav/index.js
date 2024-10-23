import React from 'react'
import { Link } from 'react-router-dom'
import './topnav.css'

export default function index() {
  return (
    <div className='topnav'>
      <div>
      </div>
      <div className='topnav-right'>
        <div className='topnav-right-item'>
          <Link to='/login'>
            <i className='bx bx-log-out-circle logout-icon' />
          </Link>
        </div>
      </div>
    </div>
  )
}
