import './StyleProyectos.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';





const Proyectos = () => {
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
   
   

    console.log(data)
    return (
        <div class="container-Proyectos">
          
               
           
           
            {data.map((item) => (
                <div className="proyecto-card" key={item.id}>
                    <button class="delete" onClick={() => handlerDeleteProyect(item.id)}>Delete Proyect</button>
                    <h2 className="proyecto-title">{item.name}</h2>
                    <p className="proyecto-description">{item.description}</p>
                    <img className="proyecto-img" src={item.img} alt="Project" />
                    <a className="proyecto-linkedin" href={item.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="proyecto-repo" href={item.repo} target="_blank" rel="noopener noreferrer">Repositorio</a>
                </div>
                
                
                

            ))}
           
        </div>

    )
}


export default Proyectos
