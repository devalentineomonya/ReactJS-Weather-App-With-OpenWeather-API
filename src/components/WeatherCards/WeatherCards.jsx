import React from 'react'
import WeatherFilter from '../WeatherFilter/WeatherFilter'
import WeatherCard from './WeatherCard/WeatherCard'

const WeatherCards = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className='w-[100%]'>
        <WeatherFilter/>
        <div className='flex flex-row gap-x-[10px] mt-5'>

        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        </div>
      </div>
    </div>
  )
}

export default WeatherCards
