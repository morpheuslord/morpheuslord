import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer__logo'>Chiranjeevi</a>

            <ul className='permalinks'>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/chiranjeevi-g-naidu/"><FaLinkedinIn /></a>
                <a href="https://github.com/morpheuslord"><FaGithubAlt /></a>
                <a href="http://hackernoon.com/u/morpheuslord"><ImBlogger2 /></a >
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/chiranjeevi-g-naidu/">Chiranjeevi G</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer