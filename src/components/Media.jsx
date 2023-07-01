import React from 'react'
import Mediacomponent from './Mediacomponent'

const Media = (props) => {
  var music= props.music
  return (
    <div className='flex-col pl-[10px] pt-[10px] pr-[10px] pb-[10px]'>
        <Mediacomponent/>        
        <Mediacomponent/>
        <Mediacomponent/>
       
    </div>
  )
}

export default Media