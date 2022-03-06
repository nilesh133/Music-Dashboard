import React from 'react'

import { AiFillHome } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { TiMicrophoneOutline } from "react-icons/ti"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { IoPersonOutline } from "react-icons/io5"
import {AiOutlinePlusCircle} from "react-icons/ai"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_heading'>MUSICLY</div>
            <div className='navbar_options'>
                <h4 style = {{borderRight: "4px solid #00ad00"}}><span><AiFillHome /></span>HOME</h4>
                <h4><span><BiSearch /></span>BROWSE</h4>
                <h4><span><TiMicrophoneOutline /></span>RADIO</h4>
            </div>
            <div className='navbar_library'>
                <p className='navbar_library_heading'>YOUR LIBRARY</p>
                <h4><span><AiOutlineClockCircle /></span>RECENTLY PLAYED</h4>
                <h4><span><AiOutlineHeart /></span>FAVORITE SONGS</h4>
                <h4><span><IoPersonOutline /></span>ARTISTS</h4>
            </div>
            <div className='navbar_playlist'>
                <p className='navbar_playlist_heading'>PLAYLISTS</p>
                <h4>HINDI TOP 50</h4>
                <h4>INDIPOP 50</h4>
                <h4>ROMANCE SEASON</h4>
            </div>
            <div className='navbar_addition'>
                <h4>ADD NEW PLAYLIST</h4>
            </div>
        </div>
    )
}

export default Navbar