import React from 'react'

const LocationSearchPanel = (props) => {
  

  const location = [
    "24B, Near Kapoor's cafe, Sheryians Coading School, Bhopal",
    "22c, Near Malahotra's cafe, Sheryians Coading School, Bhopal",
    "28B, Near Singhania's cafe, Sheryians Coading School, Bhopal",
    "14A, Near Sharma's cafe, Sheryians Coading School, Bhopal"
  ]
  return (
    <div>
      {
        location.map((elem, key) => {
          return <div onClick={() => {
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} key={key} className='flex gap-4 border-2 px-3 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-12 rounded-full flex justify-center items-center'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>

        })
      }


    </div>
  )
}

export default LocationSearchPanel
