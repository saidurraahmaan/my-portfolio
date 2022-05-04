import React from 'react';
import './Work.css'

const Work = () => {
    return (
        <div className='resume-details'>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Spring Rain Pvt Ltd</span>
                    <div className="resume-date">2022-Present</div>
                </div>
                <div className="resume-sub-heading">
                    Full Stack Software Engineer
                </div>
            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Spring Rain Pvt Ltd</span>
                    <div className="resume-date">2022-2022</div>
                </div>
                <div className="resume-sub-heading">
                    Internship
                </div>
            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>City University Programming Club</span>
                    <div className="resume-date">2020-2022</div>
                </div>
                <div className="resume-sub-heading">
                    Mentor
                </div>
            </div>
        </div>
    );
};

export default Work;