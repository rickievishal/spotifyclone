import React, { useEffect, useState } from 'react'
import Menulist from './components/Menulist'
import Playlist from './components/playlist'
import Musicfeed from './components/Musicfeed'
import Musiccontrols from './components/Musiccontrols'
import Musicactions from './components/Musicactions'
import Navbar from './components/Navbar'
import Media from './components/Media'
// import { fetchMusic } from './api'
import { musicdata } from './data/data';

const App = () => {
    // const [music, setmusic] = useState(null)
    // useEffect(() => {
    //     if (!music)
    //     {
    //         fetchMusic().then((music) => {
    //             console.log(music)
    //             setmusic(music);
    //         })
    //     }
    // }, [])
    const show =() =>{
        console.log(musicdata)
    } 
    show()
    
  return (
    <>
        <div className="screen w-[100%] h-[85%] flex gap-2 p-2 pl-2 pr-2" >
            <div className="sidemenu w-[300px] h-[100%] bg-gray-950 flex flex-col gap-[30px]  items-center pr-12 rounded-2xl">
                <div className="logo flex">
                       <div className='w-[200px] h-[100px] object-cover overflow-hidden flex justify-center items-center'> <img src="https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg" alt="" className='w-[300px] h-[300px] ' /></div>
                </div>
                <div className="features flex flex-col w-[70%] gap-[25px]">
                    <div className="menu flex flex-col gap-3">
                        <p className='text-gray-600
                         text-[20pt] font-semibold pl-3 menutitle'>Menu</p>
                        <Menulist music={musicdata}/>
                    </div>
                    <div className="playllist flex flex-col gap-3">
                        <p className='text-white text-[20pt] font-semibold pl-2 playlisttitle'>Playlist</p>
                        <Playlist music={musicdata}/>
                    </div>
                </div>
               
            </div>
            <div className="content w-[95%] h-[100%] bg-gray-950 rounded-2xl flex-col overflow-y-auto ">
                <div className="nav w-full h-[80px] flex justify-between items-center pt-[10px] pl-[10px] pr-[10px] pb-[10px] sticky top-0 backdrop-blur-lg bg-[rgba(0,0,0,0.31)]">
                    <Navbar music={musicdata}/>
                </div>
                <div className="contentmedia w-full h-full pb-[10px] ">
                    <Media music={musicdata}/>
                </div>
            </div>
        </div>
        <div className="musicstate rounded-t-3xl w-[100%] h-[100px] flex flex-row justify-between items-center pl-2 pr-2 pb-2 absolute bottom-0 left-0 bg-[rgb(11,11,11)]">
            <div className="nameofmusic">
                <Musicfeed music={musicdata}/>
            </div>
            <div className="musiccontrols">
                <Musiccontrols music={musicdata}/>
            </div>
            <div className="musicactions">
                <Musicactions music={musicdata}/>
            </div>
        </div>
    </>
  )
}

export default App