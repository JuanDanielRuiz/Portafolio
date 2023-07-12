import './StylePanelProyect.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';


const ProyectosForm = () => {
   
    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    const [data, setData] = useState([]); 

    useEffect(() => {
       
        const fetchData = async () => {
            try {
                const userLoginLocalStorage = window.localStorage.getItem('login')
                if (userLoginLocalStorage) {
                    const user = JSON.parse(userLoginLocalStorage)
                    setUser(user)
                } 
                const response = await axios.get('http://localhost:8000/allData');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    if (!user || user.name === null) {
        navigate("/admin")
    }
    const handlerDeleteProyect = (id) => {
        try {
            const token = user.tokenSession;
            console.log("soy el token", token)

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
                .delete(`http://localhost:8000/delete/${id}`,config)
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

        const token = user.tokenSession;
        console.log("soy el token",token)

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        await axios.post('http://localhost:8000/data', Nuevoproyecto,config);
      
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
    const handlerLogout = () => {
        window.localStorage.removeItem('login');
        navigate('/admin');
    }
    
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
      
        <div className="container-fluid formulario"> 
            {isMobile && (
                <p style={{ color: 'red', fontSize: '30px', background: '#374259', margin: 0, padding: '10px' }}>Esta pagina solo esta disponible en version web. La version movil esta en creacion.</p>
            )}
      
                <div class="row">
                <div class="col-3 order-firt contenedor-form">
                    <button onClick={() => handlerLogout()} class="logout" type="button">Cerrar session</button>
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
                                maxLength={15}

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
                                maxLength={112}
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
