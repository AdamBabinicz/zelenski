import React from 'react'
import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import img from '../../assets/images/6.png'
import img1 from '../../assets/images/5.png'
import img2 from '../../assets/images/11.png'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <img src={img} alt="..." />
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <img src={img1} alt="..." />
          <br />
          <span className="bottom-tag-html">
            <img src={img2} alt="..." />
          </span>
        </span>
      </div>
    </div>
  )
}

export default Layout
