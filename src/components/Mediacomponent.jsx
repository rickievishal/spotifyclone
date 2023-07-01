import React from 'react'
import Mediainnercomp from './Mediainnercomp'
// this is a row component
const Mediacomponent = (props) => {
  var music= props.music
  return (
        <div className='w-full h-[350px] flex-col gap-2'>
            <div className="mediatitle w-full height-full ">
                <p className='p-[10px] pl-[10px] text-[20pt] text-white font-semibold'>Recently played</p>
            </div>
            <div className='flex'>
            <Mediainnercomp music={props.music}/>          
            </div>             
        </div>
  )
}

export default Mediacomponent