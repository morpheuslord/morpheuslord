import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Entry Level</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certification</h5>
                            <small>CEH V12,</small>
                            <small> CND V2</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>9 Completed</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Research</h5>
                            <small>4 Completed</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Work Experience</h5>
                            <small>11 Months</small>
                        </article>
                    </div>

                    <p>
                        I am an aspiring cybersecurity professional with a robust academic foundation, holding a bachelor's degree in cybersecurity from Jain University, CEH v12, and CND certification. My expertise is showcased in red team operations and security testing, currently applied as an Offensive Security Engineer at Avercyber Technologies, a subsidiary of Averlon Inc. In this role, I focus on securing AWS systems, conducting attack simulations, and mitigating security vulnerabilities. Additionally, I offer freelance programming and technical writing services, creating hacking automation scripts and frameworks in Python, and contributing to blogs and articles on cutting-edge cybersecurity topics. Recognized among the top 1% on TryHackMe, I excel as a bug hunter and penetration tester, with notable skills in website and application security. My career is propelled by an insatiable curiosity and a commitment to excellence, constantly enhancing my skills to stay at the forefront of the cybersecurity field. As a proactive community member, I share my insights through blogging, aiming to elevate cybersecurity awareness and knowledge. I am eager to explore new opportunities, share expertise, and contribute to a more secure digital world.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
