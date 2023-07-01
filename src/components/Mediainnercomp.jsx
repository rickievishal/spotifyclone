import React from 'react'

const Mediainnercomp = (props) => {
  var music= props.music
  return (
    
    <div className='pl-2 pt-2 pr-2 pb-2 w-[200px] h-[260px]  overflow-hidden '>
        <div className=' bg-[rgb(37,25,51)] w-full h-full rounded-[17px] flex-col pt-5 justify-center items-center transition-all ease-in-out hover:bg-[rgb(53,35,74)] '>
            <div className='w-full h-[150px] object-center flex  justify-center items-center'>
                <img src="https://i.scdn.co/image/ab67616d0000b273ef57183066d6cac0cabb85c6" alt="" className='w-[150px] h-[150px] rounded-xl shadow-[0px_2px_20px_rgb(0,0,0)]'/>
            </div>
            <div className='flex-col pt-2 w-[full] pl-5 '>
                <p className='text-white musicfont'>Dreamers</p>
                <p className='text-[10pt] text-[rgb(176,176,176)] musicartistfont'>BTS</p>
            </div>
        </div>
    </div>
  )
}

export default Mediainnercomp