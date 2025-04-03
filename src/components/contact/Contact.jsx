import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            
            <span className="section__subtitle contact">Contact Me</span>

            <div className="contact__icons">
                <a href="https://www.linkedin.com/in/adina-martiniuc-6b2850226/" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-linkedin'></i>
                </a>
                <a href="mailto:adinamartiniuc2697@gmail.com">
                <i class='bx bxl-gmail' ></i>
                </a>
                <a href="https://www.instagram.com/m.adina26?igsh=MXVxYjRpY2RqOG83aA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-instagram' ></i>
                </a>
            </div>

        </section>
    )
}

export default Contact