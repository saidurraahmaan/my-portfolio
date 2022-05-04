import React, {useState} from 'react';
import './Resume.css'
import Education from "./education/Education";
import Work from "./work/Work";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import CP from "./competitiveProgramming/CP";

const Resume = () => {
    const [eduction, setEducation] = useState(true);
    const [workHistory, setWorkHistory] = useState(false);
    const [programming, setProgramming] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);

    const makeAllFalse = () => {
        setEducation(false);
        setWorkHistory(false);
        setProgramming(false);
        setSkills(false);
        setProjects(false);
    }

    const handleChange = (func) => {
        makeAllFalse();
        func(true);
    }

    return (
        <>
            <div className="heading-separator">
                <div className="separator-line"></div>
                <div className="separator-blob"></div>
            </div>
            <div className='resume-outer-section d-flex flex-column'>
                <span className='about-me-text'>Resume</span>
                <span className="why-text-sub"></span>
                <div
                    className="resume-new-section row"
                    style={{width: "70%", marginInline: "auto"}}
                >
                    <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
                        <div className="d-flex flex-column bg-new text-white">
                        <span className='icons-span'>
                            <i className="fa-solid fa-graduation-cap"></i>
                        </span>
                            <span className='icons-span'>
                            <i className="fa-solid fa-briefcase"></i>
                        </span>
                            <span className='icons-span'>
                            <i className="fa-regular fa-lightbulb"></i>
                        </span>
                            <span className='icons-span'>
                                <i className="fa-solid fa-laptop-code"></i>
                            </span>
                            <span className='icons-span'>
                                <i className="fa-solid fa-bars-progress"></i>
                            </span>

                        </div>
                        <div className="d-flex flex-column resume-content">
                        <span
                            className={eduction ? 'selected resume-options-items' : "resume-options-items"}
                            onClick={() => handleChange(setEducation)}
                        >
                            Education
                        </span>
                            <span
                                className={workHistory ? 'selected resume-options-items' : "resume-options-items"}
                                onClick={() => handleChange(setWorkHistory)}
                            >
                            Experience
                        </span>
                            <span
                                className={skills ? 'selected resume-options-items' : "resume-options-items"}
                                onClick={() => handleChange(setSkills)}
                            >
                            Skills
                        </span>
                            <span
                                className={programming ? 'selected resume-options-items' : "resume-options-items"}
                                onClick={() => handleChange(setProgramming)}
                            >
                            Competitive Programming
                        </span>
                            <span
                                className={projects ? 'selected resume-options-items' : "resume-options-items"}
                                onClick={() => handleChange(setProjects)}
                            >
                            Projects
                        </span>
                        </div>

                    </div>
                    <div className="col-lg-8 col-md-8 resume-right-section">
                        {eduction && <Education/>}
                        {workHistory && <Work/>}
                        {skills && <Skills/>}
                        {projects && <Projects/>}
                        {programming && <CP/>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;