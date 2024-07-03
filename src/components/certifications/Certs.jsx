import React from 'react'
import './certs.css'
import IMG1 from '../../assets/ceh.jpg'
import IMG2 from '../../assets/cnd.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Certified Ethical Hacker V12 - Ec-Council',
        ID: "Certification ID: ECC7349261508",
    },
    {
        id: 2,
        image: IMG2,
        title: 'Certified Network Defender - Ec-Council',
        ID: "Certification ID: ECC9327805461",
    },
]


const Certs = () => {
    return (
        <section id='certifications'>
            <h5>My Recent Certifications</h5>
            <h2>Certifications</h2>

            <div className="container portfolio__container_cert">
                {
                    data.map(({ id, image, title, ID }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <h4>{ID}</h4>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Certs