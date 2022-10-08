import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className='h-full w-2/12 border-r border-neutral-600 '>
            <p className='text-white text-center pt-5 font-semibold text-3xl border-b pb-4 border-neutral-600'>TrackEmp</p>
            <Link to="/dashbord">
            <button className=' mx-auto py-2 w-full  rounded-lg text-white text-lg mt-10 ' style={{ background: "#34b27b" }}>Home</button>
            </Link>
            <Link to="/addemp">
                <button className=' mx-auto py-2 w-full  rounded-lg text-white text-lg mt-5 ' style={{ background: "#34b27b" }}>Add Employee</button>
            </Link>
            <Link to="/track">
            <button className=' mx-auto py-2 w-full  rounded-lg text-white text-lg mt-5 ' style={{ background: "#34b27b" }}>Employee</button>
            </Link>
        </div>
    )
}

export default Sidebar