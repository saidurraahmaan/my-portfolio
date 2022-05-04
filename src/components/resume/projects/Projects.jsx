import React from 'react';
import './Projects.css'

const Projects = () => {
    return (
        <div className='resume-details'>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Pro-Learner</span>
                    <a className="resume-date" href='https://github.com/saidurraahmaan/proLearner' target='_blank'><i className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Technologies: &nbsp;<span style={{fontSize:".7rem"}}>React,Material UI, Nodejs,Express, MongoDB</span>
                </div>

            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>e-tickets</span>
                    <a className="resume-date" href='https://github.com/saidurraahmaan/eTickets/tree/master/eTickets' target='_blank'><i className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Technologies: &nbsp;<span style={{fontSize:".7rem"}}>Bootstrap, ASP.NET Core, Entity Framework</span>
                </div>

            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Portfolio</span>
                    <a className="resume-date" href='https://github.com/saidurraahmaan/my-portfolio' target='_blank'><i className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Technologies: &nbsp;<span style={{fontSize:".7rem"}}>React, Nodejs</span>
                </div>

            </div>

        </div>
    );
};

export default Projects;