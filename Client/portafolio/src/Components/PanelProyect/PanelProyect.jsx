import { useState } from "react";
import './StylePanelProyect.css'
import axios from 'axios';

const ProyectosForm = () => {
    const [proyectoData, setProyectoData] = useState({
        name: "",
        repo: "",
        img: "",
        description: "",
        linkedin: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Nuevoproyecto = {
            name: proyectoData.name,
            repo: proyectoData.repo,
            img: proyectoData.img,
            description: proyectoData.description,
            linkedin: proyectoData.linkedin
        };

        const response = await axios.post('http://localhost:3001/CreateProyect/data', Nuevoproyecto);
        alert("Felicidades Proyecto Nuevo Desbloqueado")
        setProyectoData({
            name: "",
            repo: "",
            img: "",
            description: "",
            linkedin: ""

        })
    };

    const handleChange = (event) => {
        setProyectoData({
            ...proyectoData,
            [event.target.name]: event.target.value,
        });
    };
    console.log(proyectoData)

    return (
        <div className="container-admin-panel">
            <h2>Agregar Proyecto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={proyectoData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="repo">Repo:</label>
                    <input
                        type="text"
                        id="repo"
                        name="repo"
                        value={proyectoData.repo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="img">Imagen:</label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={proyectoData.img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripcion:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={proyectoData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="linkedin">LinkedIn:</label>
                    <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={proyectoData.linkedin}
                        onChange={handleChange}
                    />
                </div>
                <button class="PanelEnviar" type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default ProyectosForm;
