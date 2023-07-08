import React from 'react';
import './StyleSobreMi.css';
import { FaCode, FaServer, FaDatabase, FaPython } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section className="sobre-mi">
            <h2 className="section-title">Sobre mi</h2>
            <div className="content">
                <h3 className="skill-title">Backend Development</h3>
                <div className="description">
                    <p>  I'm a backend developer with 1 year of experience in Node.js and Express.</p>
                    <p>
                        I have knowledge in front-end development and I use Node.js, Express, and PostgreSQL in my projects. I also have experience with Python and FastAPI.</p>
                </div>
                <div className="skills">
                    <div className="skill">
                        <FaCode className="skill-icon" />
                        <p>Desarrollo Front-end</p>
                    </div>
                    <div className="skill">
                        <FaServer className="skill-icon" />
                        <p>Node.js & Express</p>
                    </div>
                    <div className="skill">
                        <FaDatabase className="skill-icon" />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skill">
                        <FaPython className="skill-icon" />
                        <p>Python & FastAPI</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
