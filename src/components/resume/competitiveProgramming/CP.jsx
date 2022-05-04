import React from 'react';

const Cp = () => {
    return (
        <div className='resume-details'>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Codeforces</span>
                    <a className="resume-date" href='https://codeforces.com/profile/Saidur_Raahmaan' target='_blank'><i
                        className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Total Solved: &nbsp;<span style={{fontSize: ".7rem"}}>964</span> &nbsp;&nbsp;
                    Contest: &nbsp;<span style={{fontSize: ".7rem"}}>96</span>&nbsp;&nbsp;
                    Max Ratting: &nbsp;<span style={{fontSize: ".7rem"}}>1370</span>
                </div>
            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>UVA</span>
                    <a className="resume-date" href='https://uhunt.onlinejudge.org/id/1058658' target='_blank'><i
                        className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Total Solved: &nbsp;<span style={{fontSize: ".7rem"}}>110</span> &nbsp;&nbsp;
                </div>
            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>Atcoder</span>
                    <a className="resume-date" href='https://atcoder.jp/users/Saidur' target='_blank'><i
                        className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Total Solved: &nbsp;<span style={{fontSize: ".7rem"}}>50+</span> &nbsp;&nbsp;
                    Contest: &nbsp;<span style={{fontSize: ".7rem"}}>20</span>&nbsp;&nbsp;
                </div>
            </div>
            <div className="resume-container">
                <div className='resume-heading'>
                    <div className="heading-bullet"></div>
                    <span className='university-name'>LightOJ</span>
                    <a className="resume-date" href='https://lightoj.com/user/saidur' target='_blank'><i
                        className="fa-solid fa-link"></i></a>
                </div>
                <div className="resume-sub-heading">
                    Total Solved: &nbsp;<span style={{fontSize: ".7rem"}}>45+</span> &nbsp;&nbsp;
                </div>
            </div>
        </div>
    );
};

export default Cp;