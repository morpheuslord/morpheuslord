import React from 'react'
import './research.css'
import IMG1 from '../../assets/research1.jpg'
import IMG2 from '../../assets/research2.jpg'
import IMG3 from '../../assets/research3.jpg'
import IMG4 from '../../assets/research4.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG4,
        title: 'API-based network scanning: Implementation of the Nmap-API project findings.',
        github: 'https://drive.proton.me/urls/6P6MS0T83G#3OLWdBs3lWM1',
    },
    {
        id: 2,
        image: IMG1,
        title: 'AI BASED ENUMERATION AND EXPLOIT SUGGESTER: A proposal paper on AI with cybersecurity research.',
        github: 'https://www.jetir.org/view.php?paper=JETIRFM06037',
    },
    {
        id: 3,
        image: IMG2,
        title: 'AI IN ACTION EXPLOITING THE NEXUS OF CYBERSECURITY ATTACKS AND SOCIAL ENGINEERING: AI in cybersecurtiy using CI/CD.',
        github: 'https://drive.proton.me/urls/R83Q1HJS9W#8Z8HRKh44jS0',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Using Autoencoder for malware detection: A deeper study into auto encoders and their use in cybersecurity.',
        github: 'https://www.fmdbpub.com/uploads/articles/174600650419444.%20FTSIN-292-2024.pdf',
    },
    {
        id: 5,
        image: IMG4,
        title: 'Docker Based Decentralized Vulnerability Assessment with Port Scanning Powered by Artificial Intelligence',
        github: 'https://www.fmdbpub.com/uploads/articles/174595000296104.%20FTSIN-290-2024.pdf',
    }
]


const Research = () => {
    return (
        <section id='research'>
            <h5>My Recent White Papers</h5>
            <h2>Research</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">View Paper</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Research