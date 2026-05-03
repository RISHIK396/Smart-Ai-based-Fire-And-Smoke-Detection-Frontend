import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

//   document.querySelector("input").addEventListener("keydown", function(e) {
//   if (e.key === "ArrowUp" || e.key === "ArrowDown") {
//     e.preventDefault();
//   }
// });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Function is called");
    // if (password !== confirmPassword) {
    //   alert("Password and Confirm password must be same");
    //   return;
    // }

    const payload = {
      email,
      password,
      name,
      phone
    };

    try {
      const res = await axios.post(
        "https://fire-and-smoke-backend.onrender.com/auth/signup",
        payload,
        { withCredentials: true }
      );

      if (res.status == 201) {
        console.log("Success:", res.data);
        toast.success("Sucessfully Signed In",{
          position:"top-right",
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true
        });
        setEmail("");
        setPassword("");
        setName("");
        setPhone("");


        navigate('/dashboard',
          {
            state: {
              userId: res.data.data.userId,
              name: res.data.data.name,
              email: res.data.data.email,
              token:res.data.data.token
            }
          }
        );
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("This is called");
      toast.error("Some Thing Went Wrong",{
        pauseOnHover:true,
        position:"top-right",
        hideProgressBar:false,
        autoClose:3000,
        closeOnClick:true
      });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen bg-[#fff4f0]'>

      <div className='bg-white w-[90%] max-w-md h-[92vh] flex flex-col justify-evenly items-center rounded-3xl px-6 shadow-2xl border'>

        {/* Logo */}
        <div className='w-full flex justify-center items-center'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex justify-center items-center shadow-2xl shadow-orange-500/50'>
            <FontAwesomeIcon icon={faFireFlameCurved} className="text-white text-4xl" />
          </div>
        </div>

        <h4 className='text-2xl font-semibold'>Create An Account</h4>
        <p className='text-gray-500 text-center'>
          Get Started With Your Fire Detection System
        </p>

        {/* Form */}
        <form>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-medium'>Full Name</label>
            <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
              type='text' placeholder='John Doe' name='name' value={name} required onChange={(e) => { setName(e.target.value) }} />

            <label className='text-sm font-medium'>Email</label>
            <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
              type='email' placeholder='you@example.com' name='email' value={email} required onChange={(e) => { setEmail(e.target.value) }} />

              <label className='text-sm font-medium'>Phone</label>
            <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
              type='number' placeholder='98XXXXXXXX' name='phone' value={phone} required onChange={(e) => { setPhone(e.target.value) }} />

            <label className='text-sm font-medium'>Password</label>
            <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
              type='password' placeholder='••••••••' name='password' value={password} required onChange={(e) => { setPassword(e.target.value) }} />

            {/* <label className='text-sm font-medium'>Confirm Password</label>
            <input className='px-4 w-full bg-gray-200 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400'
              type='password' placeholder='••••••••' name='confirmPassword' value={confirmPassword} required onChange={(e) => { setConfirmPassword(e.target.value) }} /> */}

            {/* Info box */}
            <div className='flex items-center gap-2 bg-blue-100 p-3 rounded-lg'>
              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600" />
              <p className='text-sm'>
                Your account will be secured and ready to manage fire detection devices.
              </p>
            </div>
          </div>
        </form>

        {/* Button */}
        <button className='w-full py-2 text-base rounded-lg text-white 
                           bg-gradient-to-br from-orange-500 to-red-500 
                           shadow-lg shadow-orange-500/40 
                           hover:scale-105 hover:shadow-xl transition duration-300' onClick={(e) => handleFormSubmit(e)}>
          Create Account
        </button>

        <p className='text-sm'>
          Already have an account?{" "}
          <Link className='text-orange-500 font-medium' to="/login">Sign In</Link>
        </p>

      </div>
    </div>
  )
}

export default Signup