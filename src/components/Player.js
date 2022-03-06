import React from 'react'
import PlayerImg from "../images/PlayerImg.png";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { BsFillPauseFill, BsMusicNoteList } from "react-icons/bs";
import {ImLoop} from "react-icons/im"
const Player = () => {
  return (
    <div className='player'>
      <div className='player_left'>
        <div className='player_left_img'>
          <img src={PlayerImg} alt="" />
        </div>
        <div className='player_left_detail'>
          <h3>INSECURE</h3>
          <p>Love in air</p>
        </div>
        <div className='player_left_control'>
          <span><RiArrowLeftSFill /></span>
          <span><BsFillPauseFill /></span>
          <span><RiArrowRightSFill /></span>

        </div>
      </div>
      <div className='player_middle'>
        <h3>2:05</h3>
        <div className='player_middle_duration'>
          <div className='player_middle_duration_inner'></div>
        </div>
        <h3>4:00</h3>
      </div>
      <div className='player_right'>
        <span><ImLoop/></span>
        <span><BsMusicNoteList/></span>
      </div>
    </div>
  )
}

export default Player