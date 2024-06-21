import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/chiranjeevi-g-naidu/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/morpheuslord" target="_blank"><FaGithub /></a>
            <a href="https://chiranjeevi-g-naidu.github.io/" target="_blank"><ImBlogger2 /></a>
            <a href="https://hackernoon.com/u/morpheuslord" target="_blank"><ImBlogger2 /></a>
        </div>
    )
}

export default HeaderSocials