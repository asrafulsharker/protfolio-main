import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section" id='qualifications'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"}
                                onClick = {() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                            onClick = {() => toggleTab(2)}
                            >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Bohubrihi - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2019 - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className="">

                            </div>

                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div className="">
                                <h3 className="qualification__title">Graphics Design</h3>
                                <span className="qualification__subtitle">Career Development Center</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Bohubrihi - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className="">

                            </div>

                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div className="">
                                <h3 className="qualification__title">Video Editor</h3>
                                <span className="qualification__subtitle">Self</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2020 - Present
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data ">
                            <div className="">
                                <h3 className="qualification__title">Graphics Design</h3>
                                <span className="qualification__subtitle">Career Development Center</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className="">

                            </div>

                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div className="">
                                <h3 className="qualification__title">Video Editor</h3>
                                <span className="qualification__subtitle">Self</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Bohubrihi - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;
