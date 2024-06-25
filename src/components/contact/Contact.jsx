import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Ensure the Service ID, Template ID, and User ID are correct
        emailjs.sendForm('service_qdoncr5', 'template_clv1uvg', form.current, '8wQaI_dSLeMjhrmB2')
            .then((result) => {
                console.log(result.text);
                e.target.reset(); // Reset the form after the email is sent successfully
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>chiranjeevi.naidu@proton.me</h5>
                        <a href="mailto:chiranjeevi.naidu@proton.me" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Chiranjeevi Naidu</h5>
                        <a href="https://www.linkedin.com/in/chiranjeevi-g-naidu/" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder='Enter your message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
