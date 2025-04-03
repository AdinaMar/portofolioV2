import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-git-compare about__icon' ></i>
                <h3 className="about__title">Software Developer</h3>
                <span className="about__subtitle"></span>
            </div>

            <div className="about__box">
            <i class='bx bx-edit-alt about__icon' ></i>
                <h3 className="about__title">Technical Writer</h3>
                <span className="about__subtitle"></span>
            </div>

            <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Customer support</h3>
                <span className="about__subtitle"></span>
            </div>

        </div>
    )
}

export default Info