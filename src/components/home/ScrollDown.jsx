import React from "react";
import scrollDownImg from '../../assets/scrollDown.png';

const ScrollDown = () => {
    return (
        <div className="home__scroll" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <a href="#about" className="home__scroll-button button--flex">
                <img src={scrollDownImg} alt="Scroll Down" style={{ height: '100px'}}/>
            <span className="home__scroll-name">Scroll Down</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    );
};

export default ScrollDown;