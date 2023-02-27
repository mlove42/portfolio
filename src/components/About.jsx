import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
    return (
        <section
            id="about"
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
                        About Me
                    </h2>
                    <p
                        className={
                            "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                            (darkTheme ? "text-white" : "text-dark")
                        }
                    >
                        Know Me More
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                    </p>
                </div>
                {/* Heading end*/}
                <div className="row gy-5">
                    {/* About me content start */}
                    <div className="col-lg-7 col-xl-8 text-center text-lg-start">
                        <h2
                            className={
                                "text-7 fw-600 mb-3 " +
                                (darkTheme ? "text-white" : "")
                            }
                        >
                            I'm{" "}
                            <span className="text-primary">Michael Love,</span>{" "}
                            a Full Stack Developer
                        </h2>
                        <p className={darkTheme ? "text-white-50" : ""}>
                            My journey into software development started as a
                            business analyst, where I had the opportunity to
                            work closely with end-users, product managers, and
                            developers to build and test applications. Seeing
                            firsthand how software is planned, built, and
                            integrated sparked a passion in me for coding, which
                            led me to pursue a career in software engineering.
                        </p>
                        <p className={darkTheme ? "text-white-50" : ""}>
                            At App Academy, I've had the chance to hone my
                            skills in a variety of programming languages and
                            frameworks, including Javascript, Python, Flask,
                            HTML, CSS, SQL, React/Redux, and Express.js. One of
                            my proudest projects I created thus far, is a
                            full-stack application I built from scratch that was
                            inspired by Medium.com - it was challenging but
                            incredibly rewarding to see it come to life!
                        </p>
                        <p className={darkTheme ? "text-white-50" : ""}>
                            When I'm not coding, you can usually find me hanging
                            out with my family and dog at the beach, or curling
                            up with a good book. I'm passionate about building
                            meaningful relationships with others, and I believe
                            that the best software is created when developers
                            work collaboratively and empathetically.
                        </p>
                    </div>
                    {/* About me content end */}
                    {/* about me personal detials start */}
                    <div className="col-lg-5 col-xl-4">
                        <div className="ps-lg-4">
                            <ul
                                className={
                                    "list-style-2 " +
                                    (darkTheme
                                        ? "list-style-light text-light"
                                        : "")
                                }
                            >
                                <li>
                                    <span className="fw-600 me-2">Name:</span>
                                    Michael Love
                                </li>
                                <li>
                                    <span className="fw-600 me-2">Email:</span>
                                    <a href="mailto:michael.love42@gmail.com">
                                        michael.love42@gmail.com
                                    </a>
                                </li>

                                <li className="border-0">
                                    <span className="fw-600 me-2">Based:</span>
                                    Los Angeles, California
                                </li>
                            </ul>
                            <a
                                href={resumeFile}
                                download
                                className="btn btn-primary rounded-pill"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    {/* about me personal details end */}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
