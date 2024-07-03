import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/chiranjeevi-g-naidu/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/morpheuslord" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://hackernoon.com/u/morpheuslord" target="_blank" rel="noreferrer"><ImBlogger2 /></a>
        </div>
    )
}

export default HeaderSocials