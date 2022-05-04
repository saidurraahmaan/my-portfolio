import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-me-section about-me-inside my-5'>
            <div className="d-flex flex-column">
                <span className='about-me-text'>About me</span>
                <span className="why-text-sub">Why Choose Me</span>
                <div className="row justify-content-center shadow-lg my-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                        <lottie-player
                            src="https://assets1.lottiefiles.com/packages/lf20_0bzu9jvt.json"
                            background="transparent"
                            speed="1"
                            style={{width: "500px", height: "500px"}}
                            loop
                            autoplay
                        >
                        </lottie-player>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 py-4 d-flex flex-column">
                        <span className="some-text-about-me">
                            Extremely motivated to constantly develop my skills and grow professionally.
                            I am confident in my ability to learn new things quickly as I have a background of competitive programming.
                        </span>
                        <span className="few-highlights">
                            <span className="few-text">Here are few highlights</span>
                            <span className="few-list">
                                <ul>
                                    <li>Competitive Programmer</li>
                                    <li>Full Stack Developer</li>
                                    <li>MERN Stack Developer</li>
                                </ul>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;