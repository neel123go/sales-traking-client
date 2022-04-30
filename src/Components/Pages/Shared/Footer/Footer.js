import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
    // get current date
    const date = new Date();

    return (
        <div className='footer py-md-5 py-4 text-center mt-5'>
            <div className='container d-sm-flex justify-content-between align-items-center'>
                <p className='mt-4 text-light fs-6'>Copyright &copy; {date.getFullYear()} SalesTracking.com</p>
                <div className='d-flex justify-content-center align-items-center mt-4 mt-sm-0'>
                    <div className='social-icon'>
                        <a href="https://www.facebook.com/ayounpaul.neel" target={`_blank`}><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://www.instagram.com/?hl=en" target={`_blank`}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://twitter.com/Neel66262882" target={`_blank`}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://www.pinterest.com/" target={`_blank`}><FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;