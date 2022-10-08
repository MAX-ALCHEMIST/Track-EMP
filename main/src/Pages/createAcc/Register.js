import React, { useState } from 'react'

function Register() {
    
    const [lid,setlid]=useState("");
    const [lpass,setlpass]=useState("");
    const [clpass,setclpass]=useState("");

  return (
    <div className='h-screen w-screen' style={{ background: "#191414" }}>
        <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1 className=" font-font-mast text-5xl text-white font-semibold mb-8">Create Account</h1>
          <p className=" text-white mb-3 text-xl w-80 ">Register and get started</p>
          <div className='w-80'>
            <input type="text" placeholder='Email' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={lid} name="id" onChange={e => setlid(e.target.value)} ></input>
            <br />
            <input type="Password" placeholder='Create Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={lpass} name="pass" onChange={e => setlpass(e.target.value)}></input>
            <input type="Password" placeholder='Confirm Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={clpass} name="pass" onChange={e => setclpass(e.target.value)}></input>
            <div className='flex w-full relative'>
              <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2 text-white' />
              <p className="text-gray-300">Remember me</p>
              <p className= 'text-yellow-400 absolute right-0'>Forgot Password</p>
            </div>



              <button className=" text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center bg-lime-600">Login</button>
            <div className='flex justify-center mt-5 '>
              {/* <img src={google} alt="google" className='w-10 rounded-full mx-2'></img> */}
              {/* <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img> */}
            </div>

            <div className='flex mb-12 mt-3 '>
              {/* <p className="text-white">Don't have an account?</p><Link to='/signup' className='ml-3 blur-1  text-yellow-500 font-bold'> Sign up </Link> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register