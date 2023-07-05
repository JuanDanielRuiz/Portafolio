import './StylePanelProyect.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ProyectosForm = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Función para realizar la petición
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/CreateProyect/allData');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    const handlerDeleteProyect = (id) => {
        try {
            axios
                .delete(`http://localhost:3001/deleteProyect/delete/${id}`)
                .then();
            alert("Felicidades se Elimino El proyecto con exito")
            const updatedData = data.filter((item) => item.id !== id);
            setData(updatedData);
        } catch (error) {
            console.log(error, 'No se puede eliminar el proyecto');
        }

    }



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
        <div className="form-container">
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
            <div class="container-Proyectos-panel">




                {data.map((item) => (
                    <div className="proyecto-card" key={item.id}>
                        <button class="delete" onClick={() => handlerDeleteProyect(item.id)}>Delete Proyect</button>
                        <h2 className="proyecto-title-panel">{item.name}</h2>
                        <p className="proyecto-description-panel">{item.description}</p>
                        <img className="proyecto-img-panel" src={item.img} alt="Project" />
                        <a className="proyecto-linkedin" href={item.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="proyecto-repo" href={item.repo} target="_blank" rel="noopener noreferrer">Repositorio</a>
                    </div>




                ))}

            </div>
            
        </div>

    );
};

export default ProyectosForm;
