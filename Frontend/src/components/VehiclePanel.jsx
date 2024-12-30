import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
          onClick={() => {
            props.setVehiclePanelOpen(false);
          }}
          className='absolute top-6 right-6 text-3xl '><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true);
            props.setVehiclePanelOpen(false);
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='w-1/2 pl-[-10px]'>
            <h4 className='font-lg text-sm'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable compact ride</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.00</h2>
        </div>
        <div onClick={()=>{
            props.confirmRidePanel(true);
            props.setVehiclePanelOpen(false);
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2 pl-1'>
            <h4 className='font-lg text-sm'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs'>Affordable motorcycle ride</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.00</h2>
        </div>
        <div onClick={()=>{
            props.confirmRidePanel(true);
            props.setVehiclePanelOpen(false);
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2 pl-2'>
            <h4 className='font-lg text-sm'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs'>Affordable Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.00</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
