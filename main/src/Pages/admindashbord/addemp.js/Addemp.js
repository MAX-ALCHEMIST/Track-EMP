import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { createClient } from '@supabase/supabase-js'



function Addemp() {
    const [ename, setename] = useState("");
    const [eid, seteid] = useState("");
    const [ecn, setecn] = useState("");
    const [dpt, setdpt] = useState("");
    const [pass, setpass] = useState("");
    const [cpass, setcpass] = useState("");

    const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_API)

    async function post(eid, pass, cpass) {
      console.log(eid, pass)

      if (pass !== cpass) {
          alert("Enter confirm password again correctely ")
          setpass('');
          setcpass('');
      }
      else if (pass === cpass) {
          supabase.auth.signUp({
              email: eid,
              password: pass,
          })
          upload()
          seteid('');
          setpass('');
          setcpass('');
      }
  }
  async function upload() {
    const {data,error}=await supabase
        .from('users')
        .insert([{ 
            uEmailId : eid,
            name : ename,  
            role : "Emloyee",
            department : dpt,
            mobileNo : ecn
         }])
         if(error!==undefined){
            console.log(data);
            alert("something went wrong")
         }
}

    return (
        <div className='h-screen w-screen ' style={{ background: "#1c1c1c" }}>
            <div className='flex h-screen w-screen'>
                <Sidebar />
                <div className=' w-10/12 py-10 '>
                    <div className='w-8/12 mx-auto p-10 h-full bg-black'>
                        <div className='flex'>
                            <p className='text-white py-1 px-5 text-xl '>Employee Name</p>
                            <input type="text" placeholder='Employee Name' className=" rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={ename} name="id" onChange={e => setename(e.target.value)} ></input>
                        </div>

                        <div className='flex'>
                            <p className='text-white py-1 px-5 text-xl '>Employee Email id</p>
                            <input type="text" placeholder='Email' className=" rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={eid} name="id" onChange={e => seteid(e.target.value)} ></input>
                        </div>

                        <div className='flex'>
                            <p className='text-white py-1 px-5 text-xl '>Mobile No</p>
                            <input type="text" placeholder='Contact Number' className=" rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={ecn} name="id" onChange={e => setecn(e.target.value)} ></input>
                        </div>

                        <div className='flex'>
                            <p className='text-white py-1 px-5 text-xl '>Department</p>
                            <input type="text" placeholder='Department' className=" rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={dpt} name="id" onChange={e => setdpt(e.target.value)} ></input>
                        </div>

                        <div className='flex'>
                            <p className='text-white py-1 px-5 text-xl '>Create Password</p>
                            <input type="text" placeholder='Create Password' className=" rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={pass} name="id" onChange={e => setpass(e.target.value)} ></input>
                        </div>

                        <div className='flex'>
                            <p className='text-white py-1 px-5 text-xl '>Confirm password   </p>
                            <input type="text" placeholder='Confirm Password' className=" rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={cpass} name="id" onChange={e => setcpass(e.target.value)} ></input>
                        </div>
                        <button className='bg-yellow-500 py-1 px-4 rounded-lg mx-auto flex mt-7 ' onClick={() => (post(eid, pass, cpass))}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addemp