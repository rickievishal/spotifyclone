import React, { useState } from 'react'

const Navbar = (props) => {
    var music= props.music

    const [user, setUser] = useState(null)

    const handleLogin = async () => {
        
    }

  return (<>
            <div className="navcontrols flex gap-3 items-center "> 
                <i class='bx bx-chevron-left text-[30pt] text-white w-20px h-[40px] rounded-full bg-black hover:cursor-pointer'></i>
                <i class='bx bx-chevron-right text-[30pt] text-white w-20px h-[40px] rounded-full bg-black hover:cursor-pointer '></i>
                <div className='searchbox w-[350px] h-[50px]  relative justify-center items-center'> 
                    <i class='bx bx-search text-[15pt] top-[13px] left-[15px] text-white absolute'> </i>
                    <input type="text" className='w-[350px] h-[45px] rounded-3xl bg-[rgba(63,63,63)] pl-10 p-2 text-white text-[14pt]' />   
                </div>
            </div>
            {/* <div className="profile">
                <img src="https://media.gq-magazine.co.uk/photos/64075b85334750a349594733/1:1/w_1440,h_1440,c_limit/Elon_Musk_0001_GettyImages-1130611572.jpg" alt="" className='w-[40px] h-[40px] rounded-full ' />
            </div>  */}

            {user ? <div>User Details</div> : <div><p className='px-4 py-2 rounded-md border border-gray-500 text-base text-white cursor-pointer active:scale-90 duration-150 ease-in-out' onClick={handleLogin}>Sign In</p></div>}
        </>
  )
}

export default Navbar