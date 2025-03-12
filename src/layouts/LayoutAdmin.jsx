import React from 'react'
import { Outlet } from 'react-router'

const LayoutAdmin = () => {
  return (
    <div>
      <h1>Admin Nav</h1>
      <hr />
      <Outlet />
    </div>
  )
}

export default LayoutAdmin
