import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const navigate = useNavigate()

  const { user, setUser } = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
        <form action="" onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="text-lg mb-2 font-medium">What's Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com" />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password" />
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2 w-full text-lg"
          >Login</button>
        </form>
        <p className="text-center">New here? <Link to='/signup' className="text-blue-600">Create new Account</Link></p>
      </div>
      <div>
        <Link
          to='/caption-login'
          className="bg-[#04aa6d] flex items-center justify-center text-white font-semibold mb-5 rounded px-2 py-2 w-full text-lg"
        >Sign in as Caption</Link>
      </div>
    </div>
  );
};

export default UserLogin;
