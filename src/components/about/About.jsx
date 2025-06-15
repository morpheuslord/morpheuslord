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
                        <img src={ME} alt="About Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
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
                            <small>5 Completed</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Work Experience</h5>
                            <small>2+ Years</small>
                        </article>
                    </div>

                    <p>
                        I am a cybersecurity engineer with a strong foundation in offensive security, holding a BCA in Cybersecurity from Jain University along with CEH v12 and CND certifications. At Cygne Noir Cyber, I work across product development and applied research, contributing to the design and implementation of Python-based security tools and API-driven systems. My responsibilities span from building automation frameworks to supporting client-facing engagements involving secure backend development and threat detection capabilities. Previously at Avercyber Technologies, I focused on red teaming and cloud security assessments, particularly within AWS environments. Beyond my core role, I actively develop custom scripts, publish technical content, and contribute to community learning platforms. I rank among the top 1% on TryHackMe and continue to refine my skills in penetration testing, bug hunting, and secure application architecture.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
