import react from "react";
import "./about.css";
import imgcv from "../../assets/imgcv.png";
import AdinaMartiniucCV from "../../assets/AdinaMartiniucCV.pdf";
import AdinaMartiniuc from "../../assets/AdinaMartiniuc.pdf"
import Info from "./Info";

const About = () => {
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle"></span>

            <div className="about__container container grid">
            <img src={imgcv} alt="" className="about__img" />
            
            <div className="about__data">
                <Info />

                <p className="about__description">
                EXPERIENCE
                </p>
                <ul className="about__list">
        <li>4 years of experience in web development</li>
        <li>Expertise in PHP, JavaScript, WordPress, and Elementor</li>
        <li>SEO best practices for websites</li>
        <li>Testing & technical writing</li>
        <li>Working knowledge of Java & React</li>
        <li>Figma for web design & prototyping</li>
        <li>Customer service & support</li>
         
       </ul>
                
                <a download="" href={AdinaMartiniuc} className="button button-about">Download CV</a>
            </div>
            </div>
        </section>
    )
}

export default About