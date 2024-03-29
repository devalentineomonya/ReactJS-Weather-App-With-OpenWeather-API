import React from 'react'
import WeatherFilter from '../WeatherFilter/WeatherFilter'

const WeatherCards = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className='w-[100%]'>
        <WeatherFilter/>
      </div>
    </div>
  )
}

export default WeatherCards
