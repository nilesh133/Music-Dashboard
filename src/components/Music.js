import React from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineBell } from "react-icons/ai"
import Image1 from "../images/Image1.png"
import Image2 from "../images/Image2.png"
import Image3 from "../images/Image3.png"
import Featured from './Featured';
const Music = () => {
  return (
    <div className='music'>
      <div className='music_search'>
        <div className='music_search_box'>
          <span><BiSearch /></span>
          <input type="text" placeholder='Search for songs, artists, etc...' />
        </div>
        <div className='music_search_setting'>
          <span><AiOutlineSetting /></span>
          <span><AiOutlineBell /></span>
        </div>
      </div>

      <div className='music_image'>
        <div className='music_image_1'>
        </div>
        <div className='music_image_2'>
          <img src={Image2} alt="" />
        </div>
        <div className='music_image_3'>
          <img src={Image3} alt="" />
        </div>
      </div>
      <Featured />
    </div>
  )
}

export default Music