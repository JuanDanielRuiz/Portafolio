import './StyleLandingPage.css'
import photo from './img/Presentacion.jpg'
import backend from './img/backend.jpeg'


const LandingPage = () => {
    return (
        <div class="container-fluid landing">
            <div class="row">
                <div class="col order-first inf">
                    <h1>I'm <span>Danny </span> Ruiz</h1>
                    <p>
                        &iexcl;Hola! Soy Juan Daniel Luevano Ruiz, un desarrollador backend apasionado y experimentado. Estoy aqui para ayudarte a crear soluciones tecnologicas solidas y eficientes. Si buscas optimizar tus procesos y mejorar la experiencia del usuario, &iexcl;estas en el lugar indicado! &iexcl;Contactame y hablemos sobre tu proximo proyecto!
                    </p>

                    <a download href="#"> <button class="download-cv">Download CV</button></a>
                </div>
                <div class="col order-last photo">
                    <img src={photo} alt="Imagen de presentacion de Danny Ruiz"></img>
                </div>
            </div>
            
            <div class="container-fluid">
                <img class="backend" src={backend} alt="Imagen de backend"></img>
            </div>
        </div>

    )
}


export default LandingPage
