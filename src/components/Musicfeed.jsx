import React, { useState } from 'react'

const Musicfeed = (props) => {
  var [screencast, setScreencast] = useState(false)
  var [heart, setheart] = useState(false)
  const clickhandle = () => {
     setheart(!heart)
     console.log(heart)
     console.log(music)
  }
  const clickhandlescreencast = () => {
    setScreencast(!screencast)
  }
  var music= props.music
  return (
    <div className="musicfeed w-[300px] h-[80px] p-2 pl-2 pr-2 rounded-lg  flex items-center gap-2 justify-between">
        <div className="thumbnail w-[60px] h-[60px] overflow-hidden rounded-lg ">
            <img src={music.images.background}
             alt="" />
        </div>
        <div className="text flex-col gap-3">
                <p className='musictitle text-white text-[15pt] font-semibold'>{music.title.length > 12 ? `${music.title.slice(0,12)}..` : music.title}</p>
                <p className='author text-white text-[10pt]'>{music.subtitle}</p>
        </div>
        <div className="icons flex justify-center items-center gap-5 ">
                <i onClick={clickhandle}  className={`${heart? 'bx bxs-heart  text-red-500 ' : 'bx bx-heart text-[rgb(196,196,196)] hover:text-white'} text-[20pt]`}></i>
                <i onClick={clickhandlescreencast} className={`${screencast ? 'bx bx-cast text-[20pt] text-[rgb(196,196,196)]  hover:text-white}' :'bx bx-cast text-[20pt] text-[rgb(91,255,118)]'} `} ></i>
        </div>
    </div>
  )
}

export default Musicfeed