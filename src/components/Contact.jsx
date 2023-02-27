import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {
    const form = useRef();
    const [sendingMail, setSendingMail] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSendingMail(true);
        emailjs
            .sendForm(
                "service_i86k3ms",
                "template_si6cin9",
                form.current,
                "c9HsDgGF0tvWyVnAL"
            )
            .then(
                (result) => {
                    document.getElementById("contact-form").reset();
                    toast.success("Message sent successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: darkTheme ? "dark" : "light",
                    });
                    console.log(result.text);
                    setSendingMail(false);
                },
                (error) => {
                    toast.error("Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: darkTheme ? "dark" : "light",
                    });
                    console.log(error.text);
                    setSendingMail(false);
                }
            );
    };

    return (
        <section
            id="contact"
            className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
                        Contact
                    </h2>
                    <p
                        className={
                            "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                            (darkTheme ? "text-white" : "text-dark")
                        }
                    >
                        {" "}
                        Get in Touch
                        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                    </p>
                </div>
                {/* Heading end*/}
                <div className="row gy-5">
                    {/* contact details */}
                    <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
                        <p
                            className={
                                "text-3 mb-1 " + (darkTheme ? "text-light" : "")
                            }
                        >
                            <span className="text-primary text-4 me-2">
                                <i className="fas fa-phone" />
                            </span>
                            (626-676-0186)
                        </p>

                        <p
                            className={
                                "text-3 mb-4 " + (darkTheme ? "text-light" : "")
                            }
                        >
                            <span className="text-primary text-4 me-2">
                                <i className="fas fa-envelope" />
                            </span>
                            michael.love42@gmail.com
                        </p>
                        <h2
                            className={
                                "mb-3 text-5 text-uppercase " +
                                (darkTheme ? "text-white" : "")
                            }
                        >
                            Follow Me
                        </h2>
                        <ul
                            className={
                                "social-icons justify-content-center justify-content-md-start " +
                                (darkTheme ? "social-icons-muted" : "")
                            }
                        >
                            <li className="social-icons-github">
                                <Tooltip text="Github" placement="top">
                                    <a
                                        href="https://github.com/mlove42"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github" />
                                    </a>
                                </Tooltip>
                            </li>
                            <li className="social-icons-github">
                                <Tooltip text="LinkedIn" placement="top">
                                    <a
                                        href="https://www.linkedin.com/in/michaelllove1/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i class="fa-brands fa-linkedin" />
                                    </a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                    {/* contact form */}
                    <div className="col-md-8 col-xl-9 order-0 order-md-1"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
