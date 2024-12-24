import React, { useState } from "react";
import { Link } from "react-router-dom";


const CaptionSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [captionData, setCaptionData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptionData({
      fullname:{
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    })
    console.log(captionData)
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img className='w-16 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
          <form action="" onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className="text-lg mb-2 font-medium w-full">What's our Caption's Name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="First Name" />
              <input
                required
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Last Name" />
            </div>
            <h3 className="text-lg mb-2 font-medium">What's Your Email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com" />
            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password" />
            <button
              className="bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2 w-full text-lg"
            >Sign up</button>
          </form>
          <p className="text-center">Already have a account? <Link to='/caption-login' className="text-blue-600">Login here</Link></p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default CaptionSignup
