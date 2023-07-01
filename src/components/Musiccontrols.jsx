import React from 'react'

const Musiccontrols = (props) => {
  var music= props.music
  return (
    <div className="musiccontrols flex justify-between w-[280px] h-[80px]  rounded-lg items-center p-2 pl-2 pr-2">
        <i class='bx bx-shuffle text-[20pt] text-slate-500 hover:text-white' ></i>
        <i class='bx bxs-rewind-circle text-[20pt] text-slate-300 hover:text-white'></i>
        <div className='w-[40px] h-[40px] bg-green-400 rounded-full flex justify-center items-center pl-1 hover:scale-110 transition-all ease-in-out'><i class='bx bxs-right-arrow text-[20pt] text-gray-900  rounded-full'></i></div>
        <i class='bx bxs-fast-forward-circle text-[20pt] text-slate-300 hover:text-white'></i>
        <i class='bx bx-repeat text-[20pt] text-slate-500 hover:text-white'></i>
    </div>
  )
}

export default Musiccontrols