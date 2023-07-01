import React from 'react'
import Volumeslider from './Volumeslider'


const Musicactions = (props) => {
  var music= props.music
  return (
    <div className='musicactions flex justify-between items-center w-[300px] h-[80px] rounded-lg  p-3 pl-3 pr-3'>
        <i class='bx bxl-deezer text-[18pt] text-white'></i>
        <i class='bx bx-devices text-[18pt] text-white' ></i>
        <div className='sound flex gap-2 justify-center items-center pr-5'>
            <i class='bx bxs-volume-full text-[18pt] text-white'></i>
            <Volumeslider/>
        </div>
    </div>
  )
}

export default Musicactions