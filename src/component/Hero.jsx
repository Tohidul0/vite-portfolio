import React from 'react';
import './Hero.css'
import dp from '../assets/Images/dp.png'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

function Hero(props) {
    return (
        <div class="Home row" id="Home">
            <div class="hi col-lg-6 col-md-9">
                <div class="content">
                    <h1>Hi!! <span class="colorr">I am Mohammad Tohidul Alam</span></h1>
                    <p>CSE graduate with a passion for web development and competitive programming.Always eager to learn and explore new technologies.</p>
                    <p><LuPhoneCall /> +8801947334516</p>
                    <p> :<MdOutlineMail /> tohidulalam967418@gmail.com</p>
          
                </div>
            </div>

            <div class="homeImg col-lg-6 col-md-3 d-flex flex-row-reverse">
            {/* <img id="homeImg" src="Images/dp.png" alt=""> */}
            <img id="homeImg" src={dp}></img>
            </div>
        </div>
    );
}

export default Hero;