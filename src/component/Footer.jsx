import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import './Footer.css'

function Footer(props) {
    return (
        <div class="Footer" id="Contact">
            <h1 class="ED">Contact</h1>
            <div class="row row-cols-2 row-cols-md-5  g-4">
                <div class="col">
                    <div class="ms-4 "><FaLinkedin /><br/></div>
                    <a href="https://www.linkedin.com/in/mohammad-tohidul-alam-361115265/"><button>Linkdln</button></a>
          
                </div>
                <div class="col">
                    <div class="ms-4"><FaGithub /><br/></div>
                    <a href="https://github.com/Tohidul0"><button>GitHub</button></a>
          
                </div>

                <div class="col">
                    <div class="ms-4"><BsFillBoxSeamFill /><br/></div>
                    <a href ="https://drive.google.com/file/d/1bvRHMI3UlNj-DvIoW0nPBn5IRCOzL-fk/view?usp=sharing" attributes-list download ="optional-value" ><button>Resume</button>  </a>
          
                </div>

       
        
                <div class="col">
                    <div class="ms-4"><BiSolidPhoneCall /><br/></div>
                    <p>+8801947334516</p>
          
                </div>
                <div class="col">
                    <div class="ms-3"><SiGmail /><br/></div>
                    <p>tohidulalam967418@gmail.com</p>
          
                </div>
            </div>
    </div>
    );
}

export default Footer;