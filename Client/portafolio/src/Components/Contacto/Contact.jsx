import './StyleContact.css'
import { useState } from "react";
import axios from 'axios'
import { useMediaQuery } from 'react-responsive';



const Contact = () => {
    const [userData, setUserData] = useState({
        nombre: "",
        email: "",
        phone: 0,
        Empresa: "",
        mensaje: "",


    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const NuevoEmail = {
            nombre: userData.nombre,
            email: userData.email,
            phone: userData.phone,
            Empresa: userData.Empresa,
            mensaje: userData.mensaje
        };
        await axios.post('http://localhost:8000/email', NuevoEmail);
        alert('Mensaje Enviado con exito')

        setUserData({
            nombre: "",
            email: "",
            phone: 0,
            Empresa: "",
            mensaje: ""

        })
    };
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    }
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <div className="container-Contact">
            {isMobile && (
                <p style={{ color: 'red', fontSize: '30px', background: '#374259', margin: 0, padding: '10px' }}>Esta pagina solo esta disponible en version web. La version movil esta en creacion.</p>
            )}
            <h2>
                Need help with a project? Contact me, I'm at your service.</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={userData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Empresa">Empresa:</label>
                    <input
                        type="text"
                        id="Empresa"
                        name="Empresa"
                        value={userData.Empresa}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={userData.mensaje}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button class="Enviar" type="submit">Enviar</button>
            </form>
        </div>

    )
}


export default Contact
