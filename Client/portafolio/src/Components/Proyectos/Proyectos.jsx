import './StyleProyectos.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';





const Proyectos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Función para realizar la petición
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/allData');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
   
   
   
   

    console.log(data)
    return (
        <div class="container-fluid proyectos">
          
               
           
           
            {data.map((item) => (
                <div class="card" >
                    <img src={item.img} class="card-img-top" alt="Project" />
                <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.description}</p>
                        <a href={item.linkedin} class="btn btn-primary">Linkedin</a>
                        <a href={item.repo} class="btn btn-primary">Git Hub</a>
                    </div>
                    
                </div>
                
                
                
                

            ))}
           
        </div>

    )
}


export default Proyectos
