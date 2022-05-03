import React from 'react';
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <div className="hero-section px-10 py-5">
            <Navbar/>
            <div className="hero-section-2 row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex flex-column justify-content-center Im-text-section">
                        <span className="Im-text">
                            Hello, I'm <span className='name-Im-text'>Saidur</span>
                        </span>
                        <span className="Im-text-enthusiastic py-2"> Enthusiastic Dev 😎</span>
                        <span className="Im-text-sub-heading">
                            Knack of building applications with front & back end operations
                        </span>
                        <div className="d-flex flex-row justify-content-center mt-5">
                            <button className="btn-hire-me">Hire me</button>
                            <button className="btn-resume-me">Get Resume</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center custom-div-outer-img">
                        <img
                            className="img-fluid custom-img"
                            src="https://i.ibb.co/SdmtxKs/Saidur-photo.jpg"
                            alt="heroImage"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;