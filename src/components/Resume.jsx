import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
    const educationDetails = [
        {
            yearRange: "2022 - 2023",
            title: "Computer Software Engineering",
            place: "App Academy",
            desc: "Immersive software development course with focus on full stack web development.",
        },
        {
            yearRange: "2007 - 2012",
            title: "Bachelors of Business Administration",
            place: "Saint Louis University",
        },
    ];

    const experienceDetails = [
        {
            yearRange: "2018 - 2021",
            title: "Senior System Management Analyst",
            place: "Entertainment Partners",
            desc: "Acted as liaison between internal business users and the technical team for projects and support activities.",
        },
        {
            yearRange: "2016 - 2018",
            title: "System Management Analyst",
            place: "Entertainment Partners",
            desc: "Developed test strategy plans based on the scope and size of software development projects.",
        },
        {
            yearRange: "2014 - 2016",
            title: "Testing Operations Analyst II",
            place: "Express Scripts",
            desc: "Provided user acceptance testing expertise to internal/external clients and as it relates to all components of the testing process..",
        },
        {
            yearRange: "2012 - 2014",
            title: "Testing Operations Analyst I",
            place: "Express Scripts",
            desc: "Undertook new client implementations and designed comprehensive testing scenarios to accommodate unique benefit setups.",
        },
    ];

    const skills = [
        {
            name: "HTML/CSS",
            percent: 95,
        },
        {
            name: "JavaScript",
            percent: 65,
        },

        {
            name: "React JS",
            percent: 70,
        },
        {
            name: "Redux",
            percent: 80,
        },
        {
            name: "Angular Js",
            percent: 60,
        },
        {
            name: "Python",
            percent: 80,
        },
        {
            name: "SQL",
            percent: 99,
        },
    ];

    return (
        <section
            id="resume"
            className={"section " + (darkTheme ? "bg-dark-1" : "")}
        >
            <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
                {/* Heading */}
                <div className="position-relative d-flex text-center mb-5">
                    <h2
                        className={
                            "text-24  text-uppercase fw-600 w-100 mb-0 " +
                            (darkTheme
                                ? "text-muted opacity-1"
                                : "text-light opacity-4")
                        }
                    >
                        Summary
                    </h2>
                    <p
                        className={
                            "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                            (darkTheme ? "text-white" : "text-dark")
                        }
                    >
                        {" "}
                        Resume
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                    </p>
                </div>
                {/* Heading end*/}
                <div className="row gx-5">
                    {/* My Education */}
                    <div className="col-md-6">
                        <h2
                            className={
                                "text-6 fw-600 mb-4 " +
                                (darkTheme ? "text-white" : "")
                            }
                        >
                            My Education
                        </h2>
                        {educationDetails.length > 0 &&
                            educationDetails.map((value, index) => (
                                <div
                                    key={index}
                                    className={
                                        "bg-white  rounded p-4 mb-4 " +
                                        (darkTheme
                                            ? "bg-dark"
                                            : "bg-white border")
                                    }
                                >
                                    <p className="badge bg-primary text-2 fw-400">
                                        {value.yearRange}
                                    </p>
                                    <h3
                                        className={
                                            "text-5 " +
                                            (darkTheme ? "text-white" : "")
                                        }
                                    >
                                        {value.title}
                                    </h3>
                                    <p
                                        className={
                                            darkTheme
                                                ? "text-primary"
                                                : "text-danger"
                                        }
                                    >
                                        {value.place}
                                    </p>
                                    <p
                                        className={
                                            "mb-0 " +
                                            (darkTheme ? "text-white-50" : "")
                                        }
                                    >
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                    </div>
                    {/* My Experience */}
                    <div className="col-md-6">
                        <h2
                            className={
                                "text-6 fw-600 mb-4 " +
                                (darkTheme ? "text-white" : "")
                            }
                        >
                            My Experience
                        </h2>
                        {experienceDetails.length > 0 &&
                            experienceDetails.map((value, index) => (
                                <div
                                    key={index}
                                    className={
                                        "bg-white  rounded p-4 mb-4 " +
                                        (darkTheme
                                            ? "bg-dark"
                                            : "bg-white border")
                                    }
                                >
                                    <p className="badge bg-primary text-2 fw-400">
                                        {value.yearRange}
                                    </p>
                                    <h3
                                        className={
                                            "text-5 " +
                                            (darkTheme ? "text-white" : "")
                                        }
                                    >
                                        {value.title}
                                    </h3>
                                    <p
                                        className={
                                            darkTheme
                                                ? "text-primary"
                                                : "text-danger"
                                        }
                                    >
                                        {value.place}
                                    </p>
                                    <p
                                        className={
                                            "mb-0 " +
                                            (darkTheme ? "text-white-50" : "")
                                        }
                                    >
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
                {/* My Skills */}
                <h2
                    className={
                        "text-6 fw-600 mt-4 mb-4 " +
                        (darkTheme ? "text-white" : "")
                    }
                >
                    Languages/Skills
                </h2>
                <p align="left">
                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=js,html,css,react,nodejs,postgres,py,redux,sqlite,sequelize" />
                    </a>
                </p>

                <div className="text-center mt-5">
                    <a
                        className="btn btn-outline-secondary rounded-pill shadow-none"
                        href={resumeFile}
                        download
                    >
                        Download CV
                        <span className="ms-1">
                            <i className="fas fa-download" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
