import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'GPT-Vuln-Analyzer: An PoC on AI intrgration into security operations.',
        github: 'https://github.com/morpheuslord/GPT_Vuln-analyzer',
    },
    {
        id: 2,
        image: IMG9,
        title: 'Startup-SBOM: A Sbom based on complete reverse engineering of the linux boot process.',
        github: 'https://github.com/morpheuslord/WinFiHack',
    },
    {
        id: 3,
        image: IMG2,
        title: 'QuadraInspect: An Automated approch for APK analysis.',
        github: 'https://github.com/morpheuslord/netlify-personal-site',
    },
    {
        id: 4,
        image: IMG3,
        title: 'Brute Framework: An AIO hackers framework for Windows.',
        github: 'https://github.com/morpheuslord/Brute-Hacking-Framework-SourceCode',
    },
    {
        id: 5,
        image: IMG4,
        title: 'Nmap-API: A graduation project was done by my team, an RESTAPI for network analysis.',
        github: 'https://github.com/morpheuslord/Nmap-API',
    },
    {
        id: 6,
        image: IMG5,
        title: 'HackBot: A PoC LLM Assistant for analysis and information gathering.',
        github: 'https://github.com/morpheuslord/HackBot',
    },
    {
        id: 7,
        image: IMG6,
        title: 'CVE-LLM-Dataset: A test dataset to display the structure of LLM trainig dataset.',
        github: 'https://github.com/morpheuslord/CVE-llm_dataset',
    },
    {
        id: 8,
        image: IMG7,
        title: 'C2C-Server: A simple Command Control server to demonstrate real-life hacks.',
        github: 'https://github.com/morpheuslord/C2C-Server',
    },
    {
        id: 9,
        image: IMG8,
        title: 'WinFiHack: A simple script that uses native windows network lib to run wifi bruteforcing.',
        github: 'https://github.com/morpheuslord/WinFiHack',
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Activity</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio