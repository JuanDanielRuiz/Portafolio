import './StylePanelProyect.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ProyectosForm = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        // Función para realizar la petición
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/CreateProyect/allData');
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
                .delete(`http://localhost:8000/deleteProyect/delete/${id}`)
                .then();
           
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
        const Nuevoproyecto = {
            name: proyectoData.name,
            repo: proyectoData.repo,
            img: proyectoData.img,
            description: proyectoData.description,
            linkedin: proyectoData.linkedin
        };

        await axios.post('http://localhost:8000/CreateProyect/data', Nuevoproyecto);
      
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
        <div className="container-fluid formulario">       
                <div class="row">
                <div class="col-3 order-firt contenedor-form">
                    <h2>Agregar Proyecto</h2>
                    <div class="Formulairo-tetx">
                    <form  onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre:</label>
                            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"
                                id="name"
                                name="name"
                                value={proyectoData.name}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label htmlFor="repo">Repo:</label>
                            <input class="form-control form-control-sm" placeholder=".form-control-sm" aria-label=".form-control-sm example"
                                type="text"
                                id="repo"
                                name="repo"
                                value={proyectoData.repo}
                                onChange={handleChange}
                            />
                        </div>
                            <div class="mb-3">
                                <label htmlFor="img">Imagen URL:</label>
                                <input class="form-control form-control-sm" placeholder=".form-control-sm" aria-label=".form-control-sm example"
                                    
                                    name="img"
                                    value={proyectoData.img}
                                    onChange={handleChange}/>
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
                            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"
                                
                                id="linkedin"
                                name="linkedin"
                                value={proyectoData.linkedin}
                                onChange={handleChange}
                            />
                        </div>
                        <button class="PanelEnviar" type="submit">Guardar</button>
                        </form>
                    </div>
                </div>
                    
           
                <div class="col-9 order-last proyecto">
                   

                    {data.map((item) => (
                        <table class="table table-dark table-sm">
                        <thead>
                            <tr>
                               <th scope='col'>Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Repositorio</th>
                                <th scope="col">Imagen url</th>
                                <th scope="col">Descripcion</th>
                                    <th scope="col">Linkedin</th>
                                    <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.repo}</td>
                                <td>{item.img}</td>
                                <td>{item.description}</td>
                                    <td>{item.linkedin}</td>
                                    <td><button onClick={() => handlerDeleteProyect(item.id)}>Eliminar</button></td>
                            </tr>
                           
                        </tbody>
                    </table>
                    ))}





                </div>
            </div>
            
        </div>

    );
};

export default ProyectosForm;
