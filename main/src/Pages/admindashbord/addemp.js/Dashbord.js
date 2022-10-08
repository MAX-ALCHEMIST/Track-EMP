import React from 'react'

import Sidebar from '../Sidebar'

function Dashbord() {
  return (
    <div className='h-screen w-screen ' style={{ background: "#1c1c1c" }}>
        <div className='flex h-screen w-screen'>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Dashbord