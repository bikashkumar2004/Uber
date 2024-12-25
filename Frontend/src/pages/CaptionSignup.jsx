import React, { useContext, useState } from "react";
import { CaptionDataContext } from "../context/CaptionContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CaptionSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')


  const { caption, setCaption } = useContext(CaptionDataContext)

  const navigate = useNavigate()
  const submitHandler = async(e) => {
    e.preventDefault();
    const captionData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/caption/register`, captionData)

    if(response.status === 201){
      const data = response.data
      setCaption(data.caption)
      localStorage.setItem('token', data.token)
      navigate('/caption-home')
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
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
            <h3 className="text-lg mb-2 font-medium w-full">Vehicle Information</h3>
            <div className="flex gap-4 mb-3">
              <input
                required
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Color" />
              <input
                required
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate" />
            </div>
            <div className="flex gap-4 mb-6">
              <input
                required
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Capacity" />
              <select
                required
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
              >
                <option value='' disabled>Select Vehicle Type</option>
                <option value='car' >Car</option>
                <option value='auto' >Auto</option>
                <option value='moto' >Moto</option>
              </select>
            </div>
            <button
              className="bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2 w-full text-lg"
            >Create account</button>
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
