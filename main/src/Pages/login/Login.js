import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

function Login() {
    
  const [lid,setlid]=useState("");
  const [lpass,setlpass]=useState("");
  const [tof, settof] = useState(true);

  const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_API)

  async function post(lid, lpass) {
    console.log("ultra");
    
    const a=await supabase.auth.signInWithPassword({
      email: lid,
      password: lpass,
    })
    console.log(a.error);
    if (a.error == null) {
      settof(false);
      console.log(tof);
    }
    else if (a.error !== null) {
      alert((a.error.message +" "+a.error.status ))
      setlid('')
      setlpass('')
    }
  }



  return (
    <div className='h-screen w-screen' style={{ background: "#191414" }}>
        <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1 className=" font-font-mast text-5xl text-white font-semibold mb-8">Sign in</h1>
          <p className="text-white mb-3 text-xl w-80 ">Sign in and get started</p>
          <div className='w-80'>
            <input type="text" placeholder='Login' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={lid} name="id" onChange={e => setlid(e.target.value)} ></input>
            <br />
            <input type="Password" placeholder='Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={lpass} name="pass" onChange={e => setlpass(e.target.value)}></input>
            <div className='flex w-full relative'>
              <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2 text-white' />
              <p className="text-gray-300">Remember me</p>
              <p className='text-yellow-400 absolute right-0'>Forgot Password</p>
            </div>
            <div className='flex mb-12 mt-3 '>
            <button className=" text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center bg-lime-600" onClick={() => (post(lid, lpass))}>Login</button> 
            {/* give link and check tof if tof is true the it will goes forward otherwise it will be return */}
            
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login