import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className='absolute top-0 right-6 text-3xl '><i className="ri-arrow-down-wide-line"></i></h5>
      
      <div className='flex items-center justify-between'>
        <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>Mp04 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className='flex gap-4 flex-col justify-between items-center'>
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

export default WaitingForDriver 
