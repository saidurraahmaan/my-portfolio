import React from 'react';
import './Skills.css'

const Skills = () => {
    const skills = [
        {title: "C", percentage: 80},
        {title: "C++", percentage: 80},
        {title: "C#", percentage: 60},
        {title: "Javascript", percentage: 80},
        {title: "Python", percentage: 60},
        {title: "Java", percentage: 50},
        {title: "HTML", percentage: 80},
        {title: "Reactjs", percentage: 50},
        {title: "Nodejs", percentage: 50},
        {title: "MongoDB", percentage: 50},
        {title: "MySQL", percentage: 50},
        {title: "ASP.NET CORE", percentage: 50},
    ]
    return (
        <>
            <div className="row">
                {skills.map((ele,index)=>(
                        <div className='col-lg-6 col-md-6 col-sm-12 skills' key={index}>
                            <span className="language">{ele.title}</span>
                            <div className="progress-some">
                                <div className="progress-new" style={{width:`${ele.percentage}%`}}></div>
                            </div>
                        </div>
                ))}
            </div>
        </>
    );
};

export default Skills;