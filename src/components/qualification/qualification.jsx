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
                        <i className="uil uil-graduation-cap qualification__icon"></i>Experience
                    </div>
                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                            onClick = {() => toggleTab(2)}
                            >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Undergraduate Research Assistant</h3>
                                <span className="qualification__subtitle">Health and Informatics Lab</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>June 2024– Present
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
                                <h3 className="qualification__title">Junior Software Engineer- Web</h3>
                                <span className="qualification__subtitle">Increments Inc</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>May. 2023– May, 2024
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Student Associate</h3>
                                <span className="qualification__subtitle">CDC, Daffodil International University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>May 2022– April 2023
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
                                <h3 className="qualification__title">Assistant General Secretary</h3>
                                <span className="qualification__subtitle">Computer & Programming Club, DIU</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>Jan 2021– Dec 2022
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data ">
                            <div className="">
                                <h3 className="qualification__title">B.S.c in Computer Science & Engineering</h3>
                                <span className="qualification__subtitle">Daffodil International University, Dhaka</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>Dec 2020 - Jan 2024
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
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">PPIMSC, Munshigonj, Dhaka</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2019
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">SSC</h3>
                                <span className="qualification__subtitle">BWHS, Dhaka, Bangladesh</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2015 - 2017
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
