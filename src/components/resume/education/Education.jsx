import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <div className='resume-details'>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>City University</span>
                    <div className="resume-date">2018-2022</div>
                </div>
                <div className="resume-sub-heading">
                    BSC in CSE &nbsp; &nbsp; &nbsp; CGPA: <span style={{fontSize:".7rem"}}>3.86 out of 4.00</span>
                </div>

            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Shaheed Police Smrity College</span>
                    <div className="resume-date">2014-2016</div>
                </div>
                <div className="resume-sub-heading">
                    HSC &nbsp; &nbsp; &nbsp; CGPA: <span style={{fontSize:".7rem"}}>5.00 out of 5.00</span>
                </div>

            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Mirpur Government High School</span>
                    <div className="resume-date">2011-2014</div>
                </div>
                <div className="resume-sub-heading">
                    SSC &nbsp; &nbsp; &nbsp; CGPA: <span style={{fontSize:".7rem"}}>5.00 out of 5.00</span>
                </div>

            </div>

        </div>
    );
};

export default Education;