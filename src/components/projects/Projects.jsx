import React, { useState } from "react";
import './projects.css';
import endoImg from '../../assets/endo.PNG';
import edwImg from '../../assets/edw.PNG';
import aerImg from '../../assets/aer.PNG';
import appedImg from '../../assets/apped (1).jpeg';
import emailImg from '../../assets/email.PNG';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const projects = [
        { id: 1, title: "ENDOUBT", img: endoImg, description: "I developed web pages for the site based on the provided designs in Figma. My work involved using Elementor, JavaScript/jQuery, and WordPress to implement the designs and ensure a responsive, interactive user experience." },
        { id: 2, title: "EDWARDS UNIVERSITY", img: edwImg, description: "I created new responsive pages from scratch and modified existing ones using PHP, JavaScript, and WordPress to ensure functionality and responsiveness. I have also used SQL to manage the database, ensuring data integrity and seamless interactions with the web pages." },
        { id: 3, title: "AER", img: aerImg, description: "I used PHP and WordPress to develop the pages of the website, ensuring they were visually appealing and responsive across all mobile devices." },
        { id: 4, title: "EDWARDS MOBILE APPLICATION", img: appedImg, description: "Using PHP and SQL, I developed various APIs and endpoints to retrieve data from the database and website. This data was then sent to the app developers, enabling them to integrate it into the mobile app's frontend." },
        { id: 5, title: "EMAIL TEMPLATES", img: emailImg, description: "I developed responsive email templates using HTML tables (<table>, <th>, <td>, <tr>), following the Figma designs. I ensured that the templates were visually appealing and functioned properly across various email platforms, such as Gmail and Outlook, on both web and mobile devices" },
    ];

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">(some) Projects</h2>
            <span className="section__subtitle">Click to Learn More</span>

            <div className="projects__container container">
                <ul className="projects__modal-projects">
                    {projects.map((project) => (
                        <li
                            className="projects__modal-item"
                            key={project.id}
                            onClick={() => openModal(project)}
                        >
                            <p className="projects__modal-info">{project.title}</p>
                            <img src={project.img} alt={project.title} />
                        </li>
                    ))}
                </ul>
            </div>

            {isModalOpen && currentProject && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.description}</p>
                        <button onClick={closeModal} className="modal__close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
