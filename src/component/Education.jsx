import React from 'react';
import './Education.css';
import { SlCalender } from "react-icons/sl";

function Education(props) {
    return (
        <div className="Education" id="Education">
        <h1 className="ED">My Education</h1>
        <div className="edu row row-cols-1 row-cols-md-3 g-4   mt-5">
           <div className="col">
            <div className="institution  d-flex justify-content-center ">
                <div>
                    <div className="date">
                        <SlCalender />
                        <h4>2010-2015</h4>
                    </div>
                    <h3>Gomdandi Pilot High School</h3>
                    <h3>Science</h3>
                    <h5>GPA : 5.0/5.0</h5>
                </div>
            </div>
           </div>

            <div className="col">
                <div class="institution  d-flex justify-content-center ">
                    <div>
                        <div className="date">
                            <SlCalender />
                            <h4>2015-2018</h4>
                        </div>
                        <h3>Chattagram Biggan College</h3>
                        <h3>Science</h3>
                        <h5>GPA : 4.08/5.0</h5>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="institution  d-flex justify-content-center  ">
                    <div>
                        <div className="date">
                            <SlCalender />
                            <h4>2018-2023</h4>
                        </div>
                        <h3>International Islamic University</h3>
                        <h3>B.Sc. in Computer Science Engineering</h3>
                        <h5>CGPA : 3.43/4.0</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Education;