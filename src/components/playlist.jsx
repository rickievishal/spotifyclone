import React from 'react'

const Playlist = (props) => {
  var music= props.music
  return (
    <div className=''> 
        <ul className='flex flex-col gap-1 justify-start items-start '>
            <li className='text-white text-[12pt] p-2 rounded-lg w-[200px] pl-3 hover:bg-gray-900 cursor-pointer'>Podcasts</li>
            <li className='text-white text-[12pt] p-2 pl-3 w-[200px] rounded-lg hover:bg-gray-900 cursor-pointer'>Pop</li>
            <li className='text-white text-[12pt] rounded-lg p-2 w-[200px] pl-3  hover:bg-gray-900 cursor-pointer'>K pop</li>
        </ul>
  </div>
  )
}

export default Playlist