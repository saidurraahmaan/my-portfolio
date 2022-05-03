import React from 'react';

const Navbar = () => {
    return (
        <nav className='d-flex flex-row justify-content-between'>
            <span className='brand-name'> Saidur~</span>
            <div className="d-flex flex-row">
                <span className='mx-4 nav-items'>Home</span>
                <span className='mx-4 nav-items'>About me</span>
                <span className='mx-4 nav-items'>Resume</span>
                <span className='mx-4 nav-items'>Testimonial</span>
                <span className='mx-4 nav-items'>Contact me</span>
            </div>
        </nav>
    );
};

export default Navbar;