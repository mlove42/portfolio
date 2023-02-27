import React from "react";
import Typewriter from "typewriter-effect";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
    return (
        <section id="home">
            <div className="hero-wrap">
                <div className="hero-mask opacity-8 bg-dark" />

                {/* ---------------image background------------------ */}
                <div
                    className="hero-bg parallax"
                    style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
                ></div>

                {/* -------------------video background---------------------- */}

                {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

                <div className="hero-content section d-flex min-vh-100">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                                    Welcome
                                </p>
                                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "I'm Michael Love",
                                                "I'm a Full-Stack Developer.",
                                                "I'm a team player.",
                                                "I'm a problem solver.",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>
                                <p className="text-5 text-light mb-4">
                                    based in Los Angeles, California.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#about"
                        className="scroll-down-arrow text-white smooth-scroll"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("about");
                        }}
                    >
                        <span className="animated">
                            <i className="fa fa-chevron-down" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
