import React from 'react'

const Menulist = () => {
  return (
  <div>
    <ul className='flex flex-col gap-1 justify-start items-start '>
      <li className='text-white p-2  flex  items-center gap-5 w-[200px] cursor-pointer h-[100%] rounded-lg hover:bg-gray-900'><i class='bx bx-home-alt-2 text-[18pt] text-white '></i> Home</li>
      <li className='text-white p-2 flex  items-center gap-5 w-[200px] cursor-pointer h-[100%] rounded-lg hover:bg-gray-900'><i class='bx bxs-category text-[18pt] text-white'></i> Categories </li>
      <li className='text-white p-2 flex  items-center gap-5 w-[200px] cursor-pointer h-[100%] rounded-lg hover:bg-gray-900'><i class='bx bxs-heart text-[18pt] text-white' ></i> Liked</li>
   </ul>
  </div>
  )
}

export default Menulist