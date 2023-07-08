import './StyleLandingPage.css'
import photo from './img/Presentacion.jpg'
import tecnology from './img/tecnologias.png'
import ReactIcon from './icons/icons8-react-native.svg'
import Javascript from './icons/icons8-javascript.svg'
import Html from './icons/icons8-html-5.svg'
import express from './icons/nodejs-svgrepo-com .svg'
import postgres from './icons/postgresql-svgrepo-com.svg'
import git from './icons/icons8-git.svg'
import python from './icons/python-svgrepo-com.svg'
import mongodb from './icons/mongodb-logo-svgrepo-com.svg'


const LandingPage = () => {
    return (
        <div >
            <div class="container-fluid landing">
            <div class="col order-last photo">
                <img src={photo} alt="Imagen de presentacion de Danny Ruiz"></img>
               
            </div>
            
            <main class="info">
            <h1>I'm <span>Danny </span> Ruiz</h1>
            <p>

                    Hello! I'm Juan Daniel Luevano Ruiz, a passionate and experienced backend developer. I'm here to help you create robust and efficient technological solutions. If you're looking to optimize your processes and enhance user experience, you've come to the right place! Contact me and let's talk about your next project!
            </p>
            <a download href="/"> <button class="download-cv">Download CV</button></a>
            </main>
            </div>
            <section class="tecnology">
                <h2>Technologies I Handle</h2>
                <img src={tecnology} alt="Imagen de presentacion de Danny Ruiz"></img>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </section>
            <div class='icons'>
                <img src={ReactIcon} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={Javascript} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={Html} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={express} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={git} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={postgres} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={python} alt="Imagen de presentacion de Danny Ruiz"></img>
                <img src={mongodb} alt="Imagen de presentacion de Danny Ruiz"></img>
              
            </div>
            <section class="ciberseguridad">
                <h2>Cybersecurity Knowledge</h2>
                <p>
                    I am a professional with strong knowledge in cybersecurity, committed to protecting information and systems against cyber threats and attacks. My skills and experience include:
                </p>
                <ul>
                    <li>Risk analysis and vulnerability assessment.</li>
                    <li>Implementation of security measures and compliance policies.</li>
                    <li>Configuration and administration of firewalls and intrusion detection systems.</li>
                    <li>Monitoring and analysis of security logs to detect suspicious activities.</li>
                    <li>Cybersecurity education and awareness for users and teams.</li>
                    <li>Incident response and security incident handling.</li>
                </ul>
                <p>
                    My goal is to ensure the integrity, confidentiality, and availability of systems and data, and to work proactively to anticipate and mitigate any potential security breaches. I stay up-to-date on the latest threats and trends in cybersecurity to adapt and effectively protect digital assets.
                </p>
                <p>
                    If you need advice or solutions in cybersecurity, feel free to contact me.
                </p>
                <br></br>
            </section>

            
          
        </div>


    )
}


export default LandingPage
