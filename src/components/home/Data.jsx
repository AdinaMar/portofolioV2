import React from 'react';
import { useEffect, useState } from 'react';

const Data = () => {
    const [abGroup, setAbGroup] = useState('A');

    useEffect(() => {
        const group = localStorage.getItem('abGroup') || 'A';
        setAbGroup(group);
      }, []);

    return(
        <div className="home__data">
            <section className="hero">
            <h1>
                {abGroup === 'A'
                ? "Hi, I'm Adina -- Front-End Developer"
            : "Hey there! I design & code clean interfaces"}
            </h1>

            </section>

            <h3 className="home__subtitle">Software Developer</h3>
            <p className="home__description">I'm a software developer based in Suceava, always eager to expand my knowledge and grow both personally and professionally. 
            I specialize in web development, SEO, and technical writing.</p>
        
        <a href="#contact" className="button button--flex"></a>
        
        </div>
    )
}

export default Data