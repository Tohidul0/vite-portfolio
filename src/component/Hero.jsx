import React, { useEffect, useState } from 'react';
import './Hero.css'
import dp from '../assets/Images/dp.png'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

function Hero(props) {

   
    const text = "I am Mohammad Tohidul Alam.";
    const [displayedText, setDisplayedText] = useState('');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => (prevIndex + 1 < text.length ? prevIndex + 1 : prevIndex));
    }, 100); // Adjust the interval for your desired typing speed

   
  }, []);

  useEffect(() => {
    if(displayedText.length === text.length){
        displayedText = displayedText;
    }
    else{
    setDisplayedText(text.substring(0, currentLetterIndex));
    
    }
  }, [currentLetterIndex]);


    
    return (
        <div className="Home row" id="Home">
            <div className="hi col-lg-6 col-md-9">
                <div className="content">
                    <h1>Hi!!!</h1>
                     <h1 className="colorr">{displayedText}</h1>
                    <p>CSE graduate with a passion for web development and competitive programming.Always eager to learn and explore new technologies.</p>
                    <p><LuPhoneCall /> +8801947334516</p>
                    <p><MdOutlineMail />: tohidulalam967418@gmail.com</p>
          
                </div>
            </div>

            <div className="homeImg col-lg-6 col-md-3 d-flex flex-row-reverse">
            {/* <img id="homeImg" src="Images/dp.png" alt=""> */}
            <img id="homeImg" src={dp}></img>
            </div>
        </div>
    );
}

export default Hero;