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
   
   
   
   

    console.log(data)
    return (
        <div class="container-Proyectos">
          
               
           
           
            {data.map((item) => (
                <div className="proyecto-card" key={item.id}>
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
