import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className='absolute top-6 right-6 text-3xl '><i className="ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

      <div className='flex gap-4 flex-col justify-between items-center'>
        <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='w-full'>
          <div className='flex items-center gap-5 p-3 border-b-2 rounded-lg'>
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2 rounded-lg'>
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2 rounded-lg'>
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.00</h3>
              <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default LookingForDriver
