import React from 'react'
import Featured1 from "../images/Featured1.png"
import Featured2 from "../images/Featured2.png"
import Featured3 from "../images/Featured3.png"
import Featured4 from "../images/Featured4.png"
import Featured5 from "../images/Featured5.png"
import Featured6 from "../images/Featured6.png"
import Featured7 from "../images/Featured7.png"
const Featured = () => {
    return (
        <div className='featured'>
            <h3 className='featured_heading'>FEATURED</h3>
            <p>this week</p>

            <div className='featured_content'>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured1} alt="" />
                    </div>
                    <h3>Ignored</h3>
                    <p>By James</p>
                </div>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured2} alt="" />
                    </div>
                    <h3>NAO</h3>
                    <p>By Selena</p>
                </div>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured3} alt="" />
                    </div>
                    <h3>Orion</h3>
                    <p>By Check</p>
                </div>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured4} alt="" />
                    </div>
                    <h3>Hardwon</h3>
                    <p>By John</p>
                </div>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured5} alt="" />
                    </div>
                    <h3>Skillet</h3>
                    <p>By James</p>
                </div>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured6} alt="" />
                    </div>
                    <h3>Jayball</h3>
                    <p>By James</p>
                </div>
                <div className='featured_content_box'>
                    <div className='featured_content_box_img'>
                        <img src={Featured7} alt="" />
                    </div>
                    <h3>Ignored</h3>
                    <p>By James</p>
                </div>
            </div>
        </div>
    )
}

export default Featured